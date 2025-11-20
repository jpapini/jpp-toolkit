type Func = (this: unknown, ...args: any[]) => unknown;

type Cache<TFunc extends Func> = {
    this: ThisParameterType<TFunc>;
    args: Parameters<TFunc>;
    result: ReturnType<TFunc>;
};

function isArrayShallowEqual<T extends unknown[]>(a: T, b: T): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) if (a[i] !== b[i]) return false;
    return true;
}

export function memoizeOne<TFunc extends Func>(func: TFunc): TFunc {
    let cache: Cache<TFunc> | null = null;

    function memoized(
        this: ThisParameterType<TFunc>,
        ...args: Parameters<TFunc>
    ): ReturnType<TFunc> {
        if (cache !== null && cache.this === this && isArrayShallowEqual(cache.args, args)) {
            return cache.result;
        }
        const result = func.apply(this, args) as ReturnType<TFunc>;
        cache = { this: this, args, result };
        return result;
    }

    return memoized as TFunc;
}
