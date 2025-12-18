export function debounce<T extends (...args: unknown[]) => Promise<void>>(
    func: T,
    delay: number,
): (...args: Parameters<T>) => Promise<void> {
    let timeoutId: NodeJS.Timeout | null = null;
    return async (...args: Parameters<T>) => {
        if (timeoutId) clearTimeout(timeoutId);
        return new Promise<void>((resolve) => {
            timeoutId = setTimeout(() => {
                void func(...args).then(resolve);
            }, delay);
        });
    };
}
