import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

/**
 * Unicorn configuration.
 * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn}
 */
export const unicornConfig = defineConfig({
    name: 'unicorn-config',
    plugins: { unicorn },
    rules: {
        /**
         * Improve regexes by making them shorter, consistent, and safer.
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md}
         */
        // 'unicorn/better-regex': 'error',

        /**
         * Enforce a specific parameter name in catch clauses.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md}
         */
        // 'unicorn/catch-error-name': 'error',

        /**
         * Enforce consistent assertion style with node:assert.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-assert.md}
         */
        // 'unicorn/consistent-assert': 'error',

        /**
         * Prefer passing Date directly to the constructor when cloning.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-date-clone.md}
         */
        // 'unicorn/consistent-date-clone': 'error',

        /**
         * Use destructured variables over properties.
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md}
         */
        // 'unicorn/consistent-destructuring': 'error',

        /**
         * Prefer consistent types when spreading a ternary in an array literal.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-empty-array-spread.md}
         */
        // 'unicorn/consistent-empty-array-spread': 'error',

        /**
         * Enforce consistent style for element existence checks with indexOf(), lastIndexOf(), findIndex(), and findLastIndex().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md}
         */
        // 'unicorn/consistent-existence-index-check': 'error',

        /**
         * Move function definitions to the highest possible scope.
         * @config recommended
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md}
         */
        // 'unicorn/consistent-function-scoping': 'error',

        /**
         * Enforce correct Error subclassing.
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md}
         */
        // 'unicorn/custom-error-definition': 'error',

        /**
         * Enforce no spaces between braces.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md}
         */
        // 'unicorn/empty-brace-spaces': 'error',

        /**
         * Enforce passing a message value when creating a built-in error.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md}
         */
        // 'unicorn/error-message': 'error',

        /**
         * Require escape sequences to use uppercase or lowercase values.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md}
         */
        // 'unicorn/escape-case': 'error',

        /**
         * Add expiration conditions to TODO comments.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md}
         */
        // 'unicorn/expiring-todo-comments': 'error',

        /**
         * Enforce explicitly comparing the length or size property of a value.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md}
         */
        // 'unicorn/explicit-length-check': 'error',

        /**
         * Enforce a case style for filenames.
         * @config recommended
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md}
         */
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],

        /**
         * Enforce specific import styles per module.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md}
         */
        // 'unicorn/import-style': 'error',

        /**
         * Prevent usage of variables from outside the scope of isolated functions.
         * @config recommended
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/isolated-functions.md}
         */
        // 'unicorn/isolated-functions': 'error',

        /**
         * Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md}
         */
        // 'unicorn/new-for-builtins': 'error',

        /**
         * Enforce specifying rules to disable in eslint-disable comments.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md}
         */
        // 'unicorn/no-abusive-eslint-disable': 'error',

        /**
         * Disallow recursive access to this within getters and setters.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accessor-recursion.md}
         */
        // 'unicorn/no-accessor-recursion': 'error',

        /**
         * Disallow anonymous functions and classes as the default export.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-anonymous-default-export.md}
         */
        // 'unicorn/no-anonymous-default-export': 'error',

        /**
         * Prevent passing a function reference directly to iterator methods.
         * @config recommended
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md}
         */
        // 'unicorn/no-array-callback-reference': 'error',

        /**
         * Prefer for…of over the forEach method.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md}
         */
        // 'unicorn/no-array-for-each': 'error',

        /**
         * Disallow using the this argument in array methods.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md}
         */
        // 'unicorn/no-array-method-this-argument': 'error',

        /**
         * Disallow Array#reduce() and Array#reduceRight().
         * @config recommended
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md}
         */
        // 'unicorn/no-array-reduce': 'error',

        /**
         * Prefer Array#toReversed() over Array#reverse().
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reverse.md}
         */
        // 'unicorn/no-array-reverse': 'error',

        /**
         * Prefer Array#toSorted() over Array#sort().
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort.md}
         */
        // 'unicorn/no-array-sort': 'error',

        /**
         * Disallow member access from await expression.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md}
         */
        // 'unicorn/no-await-expression-member': 'error',

        /**
         * Disallow using await in Promise method parameters.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-in-promise-methods.md}
         */
        // 'unicorn/no-await-in-promise-methods': 'error',

        /**
         * Do not use leading/trailing space between console.log parameters.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md}
         */
        // 'unicorn/no-console-spaces': 'error',

        /**
         * Do not use document.cookie directly.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md}
         */
        // 'unicorn/no-document-cookie': 'error',

        /**
         * Disallow empty files.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md}
         */
        // 'unicorn/no-empty-file': 'error',

        /**
         * Do not use a for loop that can be replaced with a for-of loop.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md}
         */
        // 'unicorn/no-for-loop': 'error',

        /**
         * Enforce the use of Unicode escapes instead of hexadecimal escapes.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md}
         */
        // 'unicorn/no-hex-escape': 'error',

        /**
         * Disallow immediate mutation after variable assignment.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-immediate-mutation.md}
         */
        // 'unicorn/no-immediate-mutation': 'error',

        /**
         * Disallow instanceof with built-in objects.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-builtins.md}
         */
        // 'unicorn/no-instanceof-builtins': 'error',

        /**
         * Disallow invalid options in fetch() and new Request().
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md}
         */
        // 'unicorn/no-invalid-fetch-options': 'error',

        /**
         * Prevent calling EventTarget#removeEventListener() with the result of an expression.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md}
         */
        // 'unicorn/no-invalid-remove-event-listener': 'error',

        /**
         * Disallow identifiers starting with new or class.
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md}
         */
        // 'unicorn/no-keyword-prefix': 'error',

        /**
         * Disallow if statements as the only statement in if blocks without else.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md}
         */
        // 'unicorn/no-lonely-if': 'error',

        /**
         * Disallow a magic number as the depth argument in Array#flat(…).
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-magic-array-flat-depth.md}
         */
        // 'unicorn/no-magic-array-flat-depth': 'error',

        /**
         * Disallow named usage of default import and export.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-named-default.md}
         */
        // 'unicorn/no-named-default': 'error',

        /**
         * Disallow negated conditions.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md}
         */
        // 'unicorn/no-negated-condition': 'error',

        /**
         * Disallow negated expression in equality check.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md}
         */
        // 'unicorn/no-negation-in-equality-check': 'error',

        /**
         * Disallow nested ternary expressions.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md}
         */
        // 'unicorn/no-nested-ternary': 'error',

        /**
         * Disallow new Array().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md}
         */
        // 'unicorn/no-new-array': 'error',

        /**
         * Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md}
         */
        // 'unicorn/no-new-buffer': 'error',

        /**
         * Disallow the use of the null literal.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md}
         */
        // 'unicorn/no-null': 'error',

        /**
         * Disallow the use of objects as default parameters.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md}
         */
        // 'unicorn/no-object-as-default-parameter': 'error',

        /**
         * Disallow process.exit().
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md}
         */
        // 'unicorn/no-process-exit': 'error',

        /**
         * Disallow passing single-element arrays to Promise methods.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-single-promise-in-promise-methods.md}
         */
        // 'unicorn/no-single-promise-in-promise-methods': 'error',

        /**
         * Disallow classes that only have static members.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md}
         */
        // 'unicorn/no-static-only-class': 'error',

        /**
         * Disallow then property.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md}
         */
        // 'unicorn/no-thenable': 'error',

        /**
         * Disallow assigning this to a variable.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md}
         */
        // 'unicorn/no-this-assignment': 'error',

        /**
         * Disallow comparing undefined using typeof.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md}
         */
        // 'unicorn/no-typeof-undefined': 'error',

        /**
         * Disallow using 1 as the depth argument of Array#flat().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-flat-depth.md}
         */
        // 'unicorn/no-unnecessary-array-flat-depth': 'error',

        /**
         * Disallow using .length or Infinity as the deleteCount or skipCount argument of Array#{splice,toSpliced}().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-splice-count.md}
         */
        // 'unicorn/no-unnecessary-array-splice-count': 'error',

        /**
         * Disallow awaiting non-promise values.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md}
         */
        // 'unicorn/no-unnecessary-await': 'error',

        /**
         * Enforce the use of built-in methods instead of unnecessary polyfills.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md}
         */
        // 'unicorn/no-unnecessary-polyfills': 'error',

        /**
         * Disallow using .length or Infinity as the end argument of {Array,String,TypedArray}#slice().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-slice-end.md}
         */
        // 'unicorn/no-unnecessary-slice-end': 'error',

        /**
         * Disallow unreadable array destructuring.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md}
         */
        // 'unicorn/no-unreadable-array-destructuring': 'error',

        /**
         * Disallow unreadable IIFEs.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md}
         */
        // 'unicorn/no-unreadable-iife': 'error',

        /**
         * Disallow unused object properties.
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md}
         */
        // 'unicorn/no-unused-properties': 'error',

        /**
         * Disallow useless values or fallbacks in Set, Map, WeakSet, or WeakMap.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-collection-argument.md}
         */
        // 'unicorn/no-useless-collection-argument': 'error',

        /**
         * Disallow unnecessary Error.captureStackTrace(…).
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-error-capture-stack-trace.md}
         */
        // 'unicorn/no-useless-error-capture-stack-trace': 'error',

        /**
         * Disallow useless fallback when spreading in object literals.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md}
         */
        // 'unicorn/no-useless-fallback-in-spread': 'error',

        /**
         * Disallow useless array length check.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md}
         */
        // 'unicorn/no-useless-length-check': 'error',

        /**
         * Disallow returning/yielding Promise.resolve/reject() in async functions or promise callbacks.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md}
         */
        // 'unicorn/no-useless-promise-resolve-reject': 'error',

        /**
         * Disallow unnecessary spread.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md}
         */
        // 'unicorn/no-useless-spread': 'error',

        /**
         * Disallow useless case in switch statements.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md}
         */
        // 'unicorn/no-useless-switch-case': 'error',

        /**
         * Disallow useless undefined.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md}
         */
        // 'unicorn/no-useless-undefined': 'error',

        /**
         * Disallow number literals with zero fractions or dangling dots.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md}
         */
        // 'unicorn/no-zero-fractions': 'error',

        /**
         * Enforce proper case for numeric literals.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md}
         */
        // 'unicorn/number-literal-case': 'error',

        /**
         * Enforce the style of numeric separators by correctly grouping digits.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md}
         */
        // 'unicorn/numeric-separators-style': 'error',

        /**
         * Prefer .addEventListener() and .removeEventListener() over on-functions.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md}
         */
        // 'unicorn/prefer-add-event-listener': 'error',

        /**
         * Prefer .find(…) and .findLast(…) over the first or last element from .filter(…).
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md}
         */
        // 'unicorn/prefer-array-find': 'error',

        /**
         * Prefer Array#flat() over legacy techniques to flatten arrays.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md}
         */
        // 'unicorn/prefer-array-flat': 'error',

        /**
         * Prefer .flatMap(…) over .map(…).flat().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md}
         */
        // 'unicorn/prefer-array-flat-map': 'error',

        /**
         * Prefer Array#{indexOf,lastIndexOf}() over Array#{findIndex,findLastIndex}() when looking for the index of an item.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md}
         */
        // 'unicorn/prefer-array-index-of': 'error',

        /**
         * Prefer .some(…) over .filter(…).length check and .{find,findLast,findIndex,findLastIndex}(…).
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md}
         */
        // 'unicorn/prefer-array-some': 'error',

        /**
         * Prefer .at() method for index access and String#charAt().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md}
         */
        // 'unicorn/prefer-at': 'error',

        /**
         * Prefer BigInt literals over the constructor.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-bigint-literals.md}
         */
        // 'unicorn/prefer-bigint-literals': 'error',

        /**
         * Prefer Blob#arrayBuffer() over FileReader#readAsArrayBuffer(…) and Blob#text() over FileReader#readAsText(…).
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md}
         */
        // 'unicorn/prefer-blob-reading-methods': 'error',

        /**
         * Prefer class field declarations over this assignments in constructors.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-class-fields.md}
         */
        // 'unicorn/prefer-class-fields': 'error',

        /**
         * Prefer using Element#classList.toggle() to toggle class names.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-classlist-toggle.md}
         */
        // 'unicorn/prefer-classlist-toggle': 'error',

        /**
         * Prefer String#codePointAt(…) over String#charCodeAt(…) and String.fromCodePoint(…) over String.fromCharCode(…).
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md}
         */
        // 'unicorn/prefer-code-point': 'error',

        /**
         * Prefer Date.now() to get the number of milliseconds since the Unix Epoch.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md}
         */
        // 'unicorn/prefer-date-now': 'error',

        /**
         * Prefer default parameters over reassignment.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md}
         */
        // 'unicorn/prefer-default-parameters': 'error',

        /**
         * Prefer Node#append() over Node#appendChild().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md}
         */
        // 'unicorn/prefer-dom-node-append': 'error',

        /**
         * Prefer using .dataset on DOM elements over calling attribute methods.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md}
         */
        // 'unicorn/prefer-dom-node-dataset': 'error',

        /**
         * Prefer childNode.remove() over parentNode.removeChild(childNode).
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md}
         */
        // 'unicorn/prefer-dom-node-remove': 'error',

        /**
         * Prefer .textContent over .innerText.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md}
         */
        // 'unicorn/prefer-dom-node-text-content': 'error',

        /**
         * Prefer EventTarget over EventEmitter.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md}
         */
        // 'unicorn/prefer-event-target': 'error',

        /**
         * Prefer export…from when re-exporting.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md}
         */
        // 'unicorn/prefer-export-from': 'error',

        /**
         * Prefer globalThis over window, self, and global.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md}
         */
        // 'unicorn/prefer-global-this': 'error',

        /**
         * Prefer import.meta.{dirname,filename} over legacy techniques for getting file paths.
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-import-meta-properties.md}
         */
        // 'unicorn/prefer-import-meta-properties': 'error',

        /**
         * Prefer .includes() over .indexOf(), .lastIndexOf(), and Array#some() when checking for existence or non-existence.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md}
         */
        // 'unicorn/prefer-includes': 'error',

        /**
         * Prefer reading a JSON file as a buffer.
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md}
         */
        // 'unicorn/prefer-json-parse-buffer': 'error',

        /**
         * Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md}
         */
        // 'unicorn/prefer-keyboard-event-key': 'error',

        /**
         * Prefer using a logical operator over a ternary.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md}
         */
        // 'unicorn/prefer-logical-operator-over-ternary': 'error',

        /**
         * Prefer Math.min() and Math.max() over ternaries for simple comparisons.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md}
         */
        // 'unicorn/prefer-math-min-max': 'error',

        /**
         * Enforce the use of Math.trunc instead of bitwise operators.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md}
         */
        // 'unicorn/prefer-math-trunc': 'error',

        /**
         * Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md}
         */
        // 'unicorn/prefer-modern-dom-apis': 'error',

        /**
         * Prefer modern Math APIs over legacy patterns.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md}
         */
        // 'unicorn/prefer-modern-math-apis': 'error',

        /**
         * Prefer JavaScript modules (ESM) over CommonJS.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md}
         */
        // 'unicorn/prefer-module': 'error',

        /**
         * Prefer using String, Number, BigInt, Boolean, and Symbol directly.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md}
         */
        // 'unicorn/prefer-native-coercion-functions': 'error',

        /**
         * Prefer negative index over .length - index when possible.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md}
         */
        // 'unicorn/prefer-negative-index': 'error',

        /**
         * Prefer using the node: protocol when importing Node.js builtin modules.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md}
         */
        'unicorn/prefer-node-protocol': 'error',

        /**
         * Prefer Number static properties over global ones.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md}
         */
        // 'unicorn/prefer-number-properties': 'error',

        /**
         * Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md}
         */
        // 'unicorn/prefer-object-from-entries': 'error',

        /**
         * Prefer omitting the catch binding parameter.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md}
         */
        // 'unicorn/prefer-optional-catch-binding': 'error',

        /**
         * Prefer borrowing methods from the prototype instead of the instance.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md}
         */
        // 'unicorn/prefer-prototype-methods': 'error',

        /**
         * Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName() and .getElementsByName().
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md}
         */
        // 'unicorn/prefer-query-selector': 'error',

        /**
         * Prefer Reflect.apply() over Function#apply().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md}
         */
        // 'unicorn/prefer-reflect-apply': 'error',

        /**
         * Prefer RegExp#test() over String#match() and RegExp#exec().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md}
         */
        // 'unicorn/prefer-regexp-test': 'error',

        /**
         * Prefer Response.json() over new Response(JSON.stringify()).
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-response-static-json.md}
         */
        // 'unicorn/prefer-response-static-json': 'error',

        /**
         * Prefer Set#has() over Array#includes() when checking for existence or non-existence.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md}
         */
        // 'unicorn/prefer-set-has': 'error',

        /**
         * Prefer using Set#size instead of Array#length.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md}
         */
        // 'unicorn/prefer-set-size': 'error',

        /**
         * Enforce combining multiple Array#push(), Element#classList.{add,remove}(), and importScripts() into one call.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-call.md}
         */
        // 'unicorn/prefer-single-call': 'error',

        /**
         * Prefer the spread operator over Array.from(…), Array#concat(…), Array#{slice,toSpliced}() and String#split('').
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md}
         */
        // 'unicorn/prefer-spread': 'error',

        /**
         * Prefer using the String.raw tag to avoid escaping \.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md}
         */
        // 'unicorn/prefer-string-raw': 'error',

        /**
         * Prefer String#replaceAll() over regex searches with the global flag.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md}
         */
        // 'unicorn/prefer-string-replace-all': 'error',

        /**
         * Prefer String#slice() over String#substr() and String#substring().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md}
         */
        // 'unicorn/prefer-string-slice': 'error',

        /**
         * Prefer String#startsWith() & String#endsWith() over RegExp#test().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md}
         */
        // 'unicorn/prefer-string-starts-ends-with': 'error',

        /**
         * Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md}
         */
        // 'unicorn/prefer-string-trim-start-end': 'error',

        /**
         * Prefer using structuredClone to create a deep clone.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md}
         */
        // 'unicorn/prefer-structured-clone': 'error',

        /**
         * Prefer switch over multiple else-if.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md}
         */
        // 'unicorn/prefer-switch': 'error',

        /**
         * Prefer ternary expressions over simple if-else statements.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md}
         */
        // 'unicorn/prefer-ternary': 'error',

        /**
         * Prefer top-level await over top-level promises and async function calls.
         * @config recommended
         * @config unopinionated
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md}
         */
        // 'unicorn/prefer-top-level-await': 'error',

        /**
         * Enforce throwing TypeError in type checking conditions.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md}
         */
        // 'unicorn/prefer-type-error': 'error',

        /**
         * Prevent abbreviations.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md}
         */
        // 'unicorn/prevent-abbreviations': 'error',

        /**
         * Enforce consistent relative URL style.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md}
         */
        // 'unicorn/relative-url-style': 'error',

        /**
         * Enforce using the separator argument with Array#join().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md}
         */
        // 'unicorn/require-array-join-separator': 'error',

        /**
         * Require non-empty module attributes for imports and exports.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-attributes.md}
         */
        // 'unicorn/require-module-attributes': 'error',

        /**
         * Require non-empty specifier list in import and export statements.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-specifiers.md}
         */
        // 'unicorn/require-module-specifiers': 'error',

        /**
         * Enforce using the digits argument with Number#toFixed().
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md}
         */
        // 'unicorn/require-number-to-fixed-digits-argument': 'error',

        /**
         * Enforce using the targetOrigin argument with window.postMessage().
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md}
         */
        // 'unicorn/require-post-message-target-origin': 'error',

        /**
         * Enforce better string content.
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md}
         */
        // 'unicorn/string-content': 'error',

        /**
         * Enforce consistent brace style for case clauses.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md}
         */
        // 'unicorn/switch-case-braces': 'error',

        /**
         * Fix whitespace-insensitive template indentation.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md}
         */
        // 'unicorn/template-indent': 'error',

        /**
         * Enforce consistent case for text encoding identifiers.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md}
         */
        // 'unicorn/text-encoding-identifier-case': 'error',

        /**
         * Require new when creating an error.
         * @config recommended
         * @config unopinionated
         * @fixable
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md}
         */
        // 'unicorn/throw-new-error': 'error',
    },
});
