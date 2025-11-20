import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';

/**
 * ESLint configuration.
 * @see {@link https://eslint.org/docs/latest/rules/}
 */
export const eslintConfig = defineConfig({
    name: 'eslint-config',
    extends: [eslint.configs.recommended],
    rules: {
        /**
         * Enforce return statements in callbacks of array methods.
         * @see {@link https://eslint.org/docs/latest/rules/array-callback-return}
         */
        'array-callback-return': ['error', { checkForEach: true, allowVoid: true }],

        /**
         * Disallow await inside of loops.
         * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop}
         */
        // 'no-await-in-loop': 'error',

        /**
         * Disallow returning value from constructor.
         * @see {@link https://eslint.org/docs/latest/rules/no-constructor-return}
         */
        'no-constructor-return': 'error',

        /**
         * Disallow duplicate module imports.
         * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports}
         */
        'no-duplicate-imports': 'error',

        /**
         * Disallow variable or function declarations in nested blocks.
         * @see {@link https://eslint.org/docs/latest/rules/no-inner-declarations}
         */
        'no-inner-declarations': 'error',

        /**
         * Disallow returning values from Promise executor functions.
         * @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return}
         */
        'no-promise-executor-return': ['error', { allowVoid: true }],

        /**
         * Disallow comparisons where both sides are exactly the same.
         * @see {@link https://eslint.org/docs/latest/rules/no-self-compare}
         */
        'no-self-compare': 'error',

        /**
         * Disallow template literal placeholder syntax in regular strings.
         * @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string}
         */
        'no-template-curly-in-string': 'error',

        /**
         * Disallow let or var variables that are read but never assigned.
         * @see {@link https://eslint.org/docs/latest/rules/no-unassigned-vars}
         */
        'no-unassigned-vars': 'error',

        /**
         * Disallow unmodified loop conditions.
         * @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition}
         */
        'no-unmodified-loop-condition': 'error',

        /**
         * Disallow loops with a body that allows only one iteration.
         * @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop}
         */
        'no-unreachable-loop': 'error',

        /**
         * Disallow the use of variables before they are defined.
         * @see {@link https://eslint.org/docs/latest/rules/no-use-before-define}
         */
        'no-use-before-define': 'error',

        /**
         * Disallow variable assignments when the value is not used.
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-assignment}
         */
        'no-useless-assignment': 'error',

        /**
         * Disallow assignments that can lead to race conditions due to usage of await or yield.
         * @see {@link https://eslint.org/docs/latest/rules/require-atomic-updates}
         */
        'require-atomic-updates': 'error',

        /**
         * Enforce getter and setter pairs in objects and classes.
         * @see {@link https://eslint.org/docs/latest/rules/accessor-pairs}
         */
        // 'accessor-pairs': 'error',

        /**
         * Require braces around arrow function bodies.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/arrow-body-style}
         */
        'arrow-body-style': 'error',

        /**
         * Enforce the use of variables within the scope they are defined.
         * @see {@link https://eslint.org/docs/latest/rules/block-scoped-var}
         */
        'block-scoped-var': 'error',

        /**
         * Enforce camelcase naming convention.
         * @see {@link https://eslint.org/docs/latest/rules/camelcase}
         */
        'camelcase': 'error',

        /**
         * Enforce or disallow capitalization of the first letter of a comment.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/capitalized-comments}
         */
        // 'capitalized-comments': 'error',

        /**
         * Enforce that class methods utilize this.
         * @see {@link https://eslint.org/docs/latest/rules/class-methods-use-this}
         */
        // 'class-methods-use-this': 'error',

        /**
         * Enforce a maximum cyclomatic complexity allowed in a program.
         * @see {@link https://eslint.org/docs/latest/rules/complexity}
         */
        // 'complexity': 'error',

        /**
         * Require return statements to either always or never specify values.
         * @see {@link https://eslint.org/docs/latest/rules/consistent-return}
         */
        'consistent-return': 'error',

        /**
         * Enforce consistent naming when capturing the current execution context.
         * @see {@link https://eslint.org/docs/latest/rules/consistent-this}
         */
        'consistent-this': ['error', 'self'],

        /**
         * Enforce consistent brace style for all control statements.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/curly}
         */
        'curly': ['error', 'multi-or-nest', 'consistent'],

        /**
         * Require default cases in switch statements.
         * @see {@link https://eslint.org/docs/latest/rules/default-case}
         */
        'default-case': 'error',

        /**
         * Enforce default clauses in switch statements to be last.
         * @see {@link https://eslint.org/docs/latest/rules/default-case-last}
         */
        'default-case-last': 'error',

        /**
         * Enforce default parameters to be last.
         * @see {@link https://eslint.org/docs/latest/rules/default-param-last}
         */
        'default-param-last': 'error',

        /**
         * Enforce dot notation whenever possible.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/dot-notation}
         */
        'dot-notation': 'error',

        /**
         * Require the use of === and !==.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/eqeqeq}
         */
        'eqeqeq': 'error',

        /**
         * Require function names to match the name of the variable or property to which they are assigned.
         * @see {@link https://eslint.org/docs/latest/rules/func-name-matching}
         */
        // 'func-name-matching': 'error',

        /**
         * Require or disallow named function expressions.
         * @see {@link https://eslint.org/docs/latest/rules/func-names}
         */
        // 'func-names': 'error',

        /**
         * Enforce the consistent use of either function declarations or expressions assigned to variables.
         * @see {@link https://eslint.org/docs/latest/rules/func-style}
         */
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

        /**
         * Require grouped accessor pairs in object literals and classes.
         * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
         */
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],

        /**
         * Require for-in loops to include an if statement.
         * @see {@link https://eslint.org/docs/latest/rules/guard-for-in}
         */
        'guard-for-in': 'error',

        /**
         * Disallow specified identifiers.
         * @see {@link https://eslint.org/docs/latest/rules/id-denylist}
         */
        // 'id-denylist': 'error',

        /**
         * Enforce minimum and maximum identifier lengths.
         * @see {@link https://eslint.org/docs/latest/rules/id-length}
         */
        // 'id-length': 'error',

        /**
         * Require identifiers to match a specified regular expression.
         * @see {@link https://eslint.org/docs/latest/rules/id-match}
         */
        // 'id-match': 'error',

        /**
         * Require or disallow initialization in variable declarations.
         * @see {@link https://eslint.org/docs/latest/rules/init-declarations}
         */
        // 'init-declarations': 'error',

        /**
         * Require or disallow logical assignment operator shorthand.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators}
         */
        'logical-assignment-operators': 'error',

        /**
         * Enforce a maximum number of classes per file.
         * @see {@link https://eslint.org/docs/latest/rules/max-classes-per-file}
         */
        // 'max-classes-per-file': 'error',

        /**
         * Enforce a maximum depth that blocks can be nested.
         * @see {@link https://eslint.org/docs/latest/rules/max-depth}
         */
        // 'max-depth': 'error',

        /**
         * Enforce a maximum number of lines per file.
         * @see {@link https://eslint.org/docs/latest/rules/max-lines}
         */
        // 'max-lines': 'error',

        /**
         * Enforce a maximum number of lines of code in a function.
         * @see {@link https://eslint.org/docs/latest/rules/max-lines-per-function}
         */
        // 'max-lines-per-function': 'error',

        /**
         * Enforce a maximum depth that callbacks can be nested.
         * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks}
         */
        // 'max-nested-callbacks': 'error',

        /**
         * Enforce a maximum number of parameters in function definitions.
         * @see {@link https://eslint.org/docs/latest/rules/max-params}
         */
        // 'max-params': 'error',

        /**
         * Enforce a maximum number of statements allowed in function blocks.
         * @see {@link https://eslint.org/docs/latest/rules/max-statements}
         */
        // 'max-statements': 'error',

        /**
         * Require constructor names to begin with a capital letter.
         * @see {@link https://eslint.org/docs/latest/rules/new-cap}
         */
        // 'new-cap': 'error',

        /**
         * Disallow the use of alert, confirm, and prompt.
         * @see {@link https://eslint.org/docs/latest/rules/no-alert}
         */
        // 'no-alert': 'error',

        /**
         * Disallow Array constructors.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-array-constructor}
         */
        'no-array-constructor': 'error',

        /**
         * Disallow bitwise operators.
         * @see {@link https://eslint.org/docs/latest/rules/no-bitwise}
         */
        // 'no-bitwise': 'error',

        /**
         * Disallow the use of arguments.caller or arguments.callee.
         * @see {@link https://eslint.org/docs/latest/rules/no-caller}
         */
        'no-caller': 'error',

        /**
         * Disallow the use of console.
         * @see {@link https://eslint.org/docs/latest/rules/no-console}
         */
        // 'no-console': 'error',

        /**
         * Disallow continue statements.
         * @see {@link https://eslint.org/docs/latest/rules/no-continue}
         */
        // 'no-continue': 'error',

        /**
         * Disallow equal signs explicitly at the beginning of regular expressions.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-div-regex}
         */
        'no-div-regex': 'error',

        /**
         * Disallow else blocks after return statements in if statements.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-else-return}
         */
        // 'no-else-return': 'error',

        /**
         * Disallow empty functions.
         * @see {@link https://eslint.org/docs/latest/rules/no-empty-function}
         */
        'no-empty-function': 'error',

        /**
         * Disallow null comparisons without type-checking operators.
         * @see {@link https://eslint.org/docs/latest/rules/no-eq-null}
         */
        'no-eq-null': 'error',

        /**
         * Disallow the use of eval().
         * @see {@link https://eslint.org/docs/latest/rules/no-eval}
         */
        'no-eval': 'error',

        /**
         * Disallow extending native types.
         * @see {@link https://eslint.org/docs/latest/rules/no-extend-native}
         */
        'no-extend-native': 'error',

        /**
         * Disallow unnecessary calls to .bind().
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-extra-bind}
         */
        'no-extra-bind': 'error',

        /**
         * Disallow unnecessary labels.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-extra-label}
         */
        'no-extra-label': 'error',

        /**
         * Disallow shorthand type conversions.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion}
         */
        'no-implicit-coercion': 'error',

        /**
         * Disallow declarations in the global scope.
         * @see {@link https://eslint.org/docs/latest/rules/no-implicit-globals}
         */
        'no-implicit-globals': 'error',

        /**
         * Disallow the use of eval()-like methods.
         * @see {@link https://eslint.org/docs/latest/rules/no-implied-eval}
         */
        'no-implied-eval': 'error',

        /**
         * Disallow inline comments after code.
         * @see {@link https://eslint.org/docs/latest/rules/no-inline-comments}
         */
        'no-inline-comments': 'error',

        /**
         * Disallow use of this in contexts where the value of this is undefined.
         * @see {@link https://eslint.org/docs/latest/rules/no-invalid-this}
         */
        'no-invalid-this': 'error',

        /**
         * Disallow the use of the __iterator__ property.
         * @see {@link https://eslint.org/docs/latest/rules/no-iterator}
         */
        'no-iterator': 'error',

        /**
         * Disallow labels that share a name with a variable.
         * @see {@link https://eslint.org/docs/latest/rules/no-label-var}
         */
        'no-label-var': 'error',

        /**
         * Disallow labeled statements.
         * @see {@link https://eslint.org/docs/latest/rules/no-labels}
         */
        'no-labels': 'error',

        /**
         * Disallow unnecessary nested blocks.
         * @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks}
         */
        'no-lone-blocks': 'error',

        /**
         * Disallow if statements as the only statement in else blocks.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if}
         */
        'no-lonely-if': 'error',

        /**
         * Disallow function declarations that contain unsafe references inside loop statements.
         * @see {@link https://eslint.org/docs/latest/rules/no-loop-func}
         */
        'no-loop-func': 'error',

        /**
         * Disallow magic numbers.
         * @see {@link https://eslint.org/docs/latest/rules/no-magic-numbers}
         */
        // 'no-magic-numbers': 'error',

        /**
         * Disallow use of chained assignment expressions.
         * @see {@link https://eslint.org/docs/latest/rules/no-multi-assign}
         */
        'no-multi-assign': 'error',

        /**
         * Disallow multiline strings.
         * @see {@link https://eslint.org/docs/latest/rules/no-multi-str}
         */
        // 'no-multi-str': 'error',

        /**
         * Disallow negated conditions.
         * @see {@link https://eslint.org/docs/latest/rules/no-negated-condition}
         */
        // 'no-negated-condition': 'error',

        /**
         * Disallow nested ternary expressions.
         * @see {@link https://eslint.org/docs/latest/rules/no-nested-ternary}
         */
        // 'no-nested-ternary': 'error',

        /**
         * Disallow new operators outside of assignments or comparisons.
         * @see {@link https://eslint.org/docs/latest/rules/no-new}
         */
        'no-new': 'error',

        /**
         * Disallow new operators with the Function object.
         * @see {@link https://eslint.org/docs/latest/rules/no-new-func}
         */
        'no-new-func': 'error',

        /**
         * Disallow new operators with the String, Number, and Boolean objects.
         * @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers}
         */
        'no-new-wrappers': 'error',

        /**
         * Disallow calls to the Object constructor without an argument.
         * @see {@link https://eslint.org/docs/latest/rules/no-object-constructor}
         */
        'no-object-constructor': 'error',

        /**
         * Disallow octal escape sequences in string literals.
         * @see {@link https://eslint.org/docs/latest/rules/no-octal-escape}
         */
        'no-octal-escape': 'error',

        /**
         * Disallow reassigning function parameters.
         * @see {@link https://eslint.org/docs/latest/rules/no-param-reassign}
         */
        'no-param-reassign': 'error',

        /**
         * Disallow the unary operators ++ and --.
         * @see {@link https://eslint.org/docs/latest/rules/no-plusplus}
         */
        'no-plusplus': 'error',

        /**
         * Disallow the use of the __proto__ property.
         * @see {@link https://eslint.org/docs/latest/rules/no-proto}
         */
        'no-proto': 'error',

        /**
         * Disallow specified names in exports.
         * @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports}
         */
        // 'no-restricted-exports': 'error',

        /**
         * Disallow specified global variables.
         * @see {@link https://eslint.org/docs/latest/rules/no-restricted-globals}
         */
        // 'no-restricted-globals': 'error',

        /**
         * Disallow specified modules when loaded by import.
         * @see {@link https://eslint.org/docs/latest/rules/no-restricted-imports}
         */
        // 'no-restricted-imports': 'error',

        /**
         * Disallow certain properties on certain objects.
         * @see {@link https://eslint.org/docs/latest/rules/no-restricted-properties}
         */
        // 'no-restricted-properties': 'error',

        /**
         * Disallow specified syntax.
         * @see {@link https://eslint.org/docs/latest/rules/no-restricted-syntax}
         */
        // 'no-restricted-syntax': 'error',

        /**
         * Disallow assignment operators in return statements.
         * @see {@link https://eslint.org/docs/latest/rules/no-return-assign}
         */
        'no-return-assign': 'error',

        /**
         * Disallow javascript: URLs.
         * @see {@link https://eslint.org/docs/latest/rules/no-script-url}
         */
        'no-script-url': 'error',

        /**
         * Disallow comma operators.
         * @see {@link https://eslint.org/docs/latest/rules/no-sequences}
         */
        'no-sequences': 'error',

        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope.
         * @see {@link https://eslint.org/docs/latest/rules/no-shadow}
         */
        'no-shadow': 'error',

        /**
         * Disallow ternary operators.
         * @see {@link https://eslint.org/docs/latest/rules/no-ternary}
         */
        // 'no-ternary': 'error',

        /**
         * Disallow throwing literals as exceptions.
         * @see {@link https://eslint.org/docs/latest/rules/no-throw-literal}
         */
        'no-throw-literal': 'error',

        /**
         * Disallow initializing variables to undefined.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-undef-init}
         */
        'no-undef-init': 'error',

        /**
         * Disallow the use of undefined as an identifier.
         * @see {@link https://eslint.org/docs/latest/rules/no-undefined}
         */
        // 'no-undefined': 'error',

        /**
         * Disallow dangling underscores in identifiers.
         * @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle}
         */
        // 'no-underscore-dangle': 'error',

        /**
         * Disallow ternary operators when simpler alternatives exist.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
         */
        'no-unneeded-ternary': 'error',

        /**
         * Disallow unused expressions.
         * @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions}
         */
        'no-unused-expressions': 'error',

        /**
         * Disallow unnecessary calls to .call() and .apply().
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-call}
         */
        'no-useless-call': 'error',

        /**
         * Disallow unnecessary computed property keys in objects and classes.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key}
         */
        'no-useless-computed-key': 'error',

        /**
         * Disallow unnecessary concatenation of literals or template literals.
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-concat}
         */
        'no-useless-concat': 'error',

        /**
         * Disallow unnecessary constructors.
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-constructor}
         */
        'no-useless-constructor': 'error',

        /**
         * Disallow renaming import, export, and destructured assignments to the same name.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-rename}
         */
        'no-useless-rename': 'error',

        /**
         * Disallow redundant return statements.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-return}
         */
        'no-useless-return': 'error',

        /**
         * Require let or const instead of var.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-var}
         */
        'no-var': 'error',

        /**
         * Disallow void operators.
         * @see {@link https://eslint.org/docs/latest/rules/no-void}
         */
        // 'no-void': 'error',

        /**
         * Disallow specified warning terms in comments.
         * @see {@link https://eslint.org/docs/latest/rules/no-warning-comments}
         */
        // 'no-warning-comments': 'error',

        /**
         * Require or disallow method and property shorthand syntax for object literals.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/object-shorthand}
         */
        'object-shorthand': 'error',

        /**
         * Enforce variables to be declared either together or separately in functions.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/one-var}
         */
        // 'one-var': 'error',

        /**
         * Require or disallow assignment operator shorthand where possible.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/operator-assignment}
         */
        'operator-assignment': 'error',

        /**
         * Require using arrow functions for callbacks.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
         */
        'prefer-arrow-callback': 'error',

        /**
         * Require const declarations for variables that are never reassigned after declared.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-const}
         */
        'prefer-const': 'error',

        /**
         * Require destructuring from arrays and/or objects.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
         */
        'prefer-destructuring': 'error',

        /**
         * Disallow the use of Math.pow in favor of the ** operator.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator}
         */
        'prefer-exponentiation-operator': 'error',

        /**
         * Enforce using named capture group in regular expression.
         * @see {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group}
         */
        'prefer-named-capture-group': 'error',

        /**
         * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals}
         */
        'prefer-numeric-literals': 'error',

        /**
         * Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn().
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own}
         */
        'prefer-object-has-own': 'error',

        /**
         * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread}
         */
        'prefer-object-spread': 'error',

        /**
         * Require using Error objects as Promise rejection reasons.
         * @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors}
         */
        'prefer-promise-reject-errors': 'error',

        /**
         * Disallow use of the RegExp constructor in favor of regular expression literals.
         * @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals}
         */
        'prefer-regex-literals': 'error',

        /**
         * Require rest parameters instead of arguments.
         * @see {@link https://eslint.org/docs/latest/rules/prefer-rest-params}
         */
        'prefer-rest-params': 'error',

        /**
         * Require spread operators instead of .apply().
         * @see {@link https://eslint.org/docs/latest/rules/prefer-spread}
         */
        'prefer-spread': 'error',

        /**
         * Require template literals instead of string concatenation.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/prefer-template}
         */
        'prefer-template': 'error',

        /**
         * Disallow losing originally caught error when re-throwing custom errors.
         * @see {@link https://eslint.org/docs/latest/rules/preserve-caught-error}
         */
        // 'preserve-caught-error': 'error',

        /**
         * Enforce the consistent use of the radix argument when using parseInt().
         * @see {@link https://eslint.org/docs/latest/rules/radix}
         */
        'radix': ['error', 'as-needed'],

        /**
         * Disallow async functions which have no await expression.
         * @see {@link https://eslint.org/docs/latest/rules/require-await}
         */
        'require-await': 'error',

        /**
         * Enforce the use of u or v flag on regular expressions.
         * @see {@link https://eslint.org/docs/latest/rules/require-unicode-regexp}
         */
        'require-unicode-regexp': 'error',

        /**
         * Enforce sorted import declarations within modules.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/sort-imports}
         */
        'sort-imports': 'error',

        /**
         * Require object keys to be sorted.
         * @see {@link https://eslint.org/docs/latest/rules/sort-keys}
         */
        // 'sort-keys': 'error',

        /**
         * Require variables within the same declaration block to be sorted.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/sort-vars}
         */
        // 'sort-vars': 'error',

        /**
         * Require or disallow strict mode directives.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/strict}
         */
        // 'strict': 'error',

        /**
         * Require symbol descriptions.
         * @see {@link https://eslint.org/docs/latest/rules/symbol-description}
         */
        'symbol-description': 'error',

        /**
         * Require var declarations be placed at the top of their containing scope.
         * @see {@link https://eslint.org/docs/latest/rules/vars-on-top}
         */
        // 'vars-on-top': 'error',

        /**
         * Require or disallow “Yoda” conditions.
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/yoda}
         */
        // 'yoda': 'error',

        /**
         * Require or disallow Unicode byte order mark (BOM).
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/unicode-bom}
         */
        // 'unicode-bom': 'error',

        /**
         * Require super() calls in constructors.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/constructor-super}
         */
        // 'constructor-super': 'off',

        /**
         * Enforce for loop update clause moving the counter in the right direction.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/for-direction}
         */
        // 'for-direction': 'off',

        /**
         * Enforce return statements in getters.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/getter-return}
         */
        // 'getter-return': 'off',

        /**
         * Disallow using an async function as a Promise executor.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-async-promise-executor}
         */
        // 'no-async-promise-executor': 'off',

        /**
         * Disallow reassigning class members.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-class-assign}
         */
        // 'no-class-assign': 'off',

        /**
         * Disallow comparing against -0.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-compare-neg-zero}
         */
        // 'no-compare-neg-zero': 'off',

        /**
         * Disallow assignment operators in conditional expressions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-cond-assign}
         */
        // 'no-cond-assign': 'off',

        /**
         * Disallow reassigning const, using, and await using variables.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-const-assign}
         */
        // 'no-const-assign': 'off',

        /**
         * Disallow expressions where the operation doesn’t affect the value.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression}
         */
        // 'no-constant-binary-expression': 'off',

        /**
         * Disallow constant expressions in conditions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-constant-condition}
         */
        // 'no-constant-condition': 'off',

        /**
         * Disallow control characters in regular expressions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-control-regex}
         */
        // 'no-control-regex': 'off',

        /**
         * Disallow the use of debugger.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-debugger}
         */
        // 'no-debugger': 'off',

        /**
         * Disallow duplicate arguments in function definitions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-dupe-args}
         */
        // 'no-dupe-args': 'off',

        /**
         * Disallow duplicate class members.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-dupe-class-members}
         */
        // 'no-dupe-class-members': 'off',

        /**
         * Disallow duplicate conditions in if-else-if chains.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-dupe-else-if}
         */
        // 'no-dupe-else-if': 'off',

        /**
         * Disallow duplicate keys in object literals.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-dupe-keys}
         */
        // 'no-dupe-keys': 'off',

        /**
         * Disallow duplicate case labels.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-case}
         */
        // 'no-duplicate-case': 'off',

        /**
         * Disallow empty character classes in regular expressions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-empty-character-class}
         */
        // 'no-empty-character-class': 'off',

        /**
         * Disallow empty destructuring patterns.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-empty-pattern}
         */
        // 'no-empty-pattern': 'off',

        /**
         * Disallow reassigning exceptions in catch clauses.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-ex-assign}
         */
        // 'no-ex-assign': 'off',

        /**
         * Disallow fallthrough of case statements.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-fallthrough}
         */
        // 'no-fallthrough': 'off',

        /**
         * Disallow reassigning function declarations.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-func-assign}
         */
        // 'no-func-assign': 'off',

        /**
         * Disallow assigning to imported bindings.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-import-assign}
         */
        // 'no-import-assign': 'off',

        /**
         * Disallow invalid regular expression strings in RegExp constructors.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-invalid-regexp}
         */
        // 'no-invalid-regexp': 'off',

        /**
         * Disallow irregular whitespace.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace}
         */
        // 'no-irregular-whitespace': 'off',

        /**
         * Disallow literal numbers that lose precision.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-loss-of-precision}
         */
        // 'no-loss-of-precision': 'off',

        /**
         * Disallow characters which are made with multiple code points in character class syntax.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-misleading-character-class}
         */
        // 'no-misleading-character-class': 'off',

        /**
         * Disallow new operators with global non-constructor functions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor}
         */
        // 'no-new-native-nonconstructor': 'off',

        /**
         * Disallow calling global object properties as functions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-obj-calls}
         */
        // 'no-obj-calls': 'off',

        /**
         * Disallow calling some Object.prototype methods directly on objects.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-prototype-builtins}
         */
        // 'no-prototype-builtins': 'off',

        /**
         * Disallow assignments where both sides are exactly the same.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-self-assign}
         */
        // 'no-self-assign': 'off',

        /**
         * Disallow returning values from setters.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-setter-return}
         */
        // 'no-setter-return': 'off',

        /**
         * Disallow sparse arrays.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-sparse-arrays}
         */
        // 'no-sparse-arrays': 'off',

        /**
         * Disallow this/super before calling super() in constructors.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-this-before-super}
         */
        // 'no-this-before-super': 'off',

        /**
         * Disallow the use of undeclared variables unless mentioned in /*global *\/ comments.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-undef}
         */
        // 'no-undef': 'off',

        /**
         * Disallow confusing multiline expressions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-unexpected-multiline}
         */
        // 'no-unexpected-multiline': 'off',

        /**
         * Disallow unreachable code after return, throw, continue, and break statements.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-unreachable}
         */
        // 'no-unreachable': 'off',

        /**
         * Disallow control flow statements in finally blocks.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-finally}
         */
        // 'no-unsafe-finally': 'off',

        /**
         * Disallow negating the left operand of relational operators.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-negation}
         */
        // 'no-unsafe-negation': 'off',

        /**
         * Disallow use of optional chaining in contexts where the undefined value is not allowed.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining}
         */
        // 'no-unsafe-optional-chaining': 'off',

        /**
         * Disallow unused private class members.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members}
         */
        // 'no-unused-private-class-members': 'off',

        /**
         * Disallow unused variables.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars}
         */
        // 'no-unused-vars': 'off',

        /**
         * Disallow useless backreferences in regular expressions.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-backreference}
         */
        // 'no-useless-backreference': 'off',

        /**
         * Require calls to isNaN() when checking for NaN.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/use-isnan}
         */
        // 'use-isnan': 'off',

        /**
         * Enforce comparing typeof expressions against valid strings.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/valid-typeof}
         */
        // 'valid-typeof': 'off',

        /**
         * Disallow lexical declarations in case clauses.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-case-declarations}
         */
        // 'no-case-declarations': 'off',

        /**
         * Disallow deleting variables.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-delete-var}
         */
        // 'no-delete-var': 'off',

        /**
         * Disallow empty block statements.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-empty}
         */
        // 'no-empty': 'off',

        /**
         * Disallow empty static blocks.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block}
         */
        // 'no-empty-static-block': 'off',

        /**
         * Disallow unnecessary boolean casts.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast}
         */
        // 'no-extra-boolean-cast': 'off',

        /**
         * Disallow assignments to native objects or read-only global variables.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-global-assign}
         */
        // 'no-global-assign': 'off',

        /**
         * Disallow &#92;8 and &#92;9 escape sequences in string literals.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape}
         */
        // 'no-nonoctal-decimal-escape': 'off',

        /**
         * Disallow octal literals.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-octal}
         */
        // 'no-octal': 'off',

        /**
         * Disallow variable redeclaration.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-redeclare}
         */
        // 'no-redeclare': 'off',

        /**
         * Disallow multiple spaces in regular expressions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-regex-spaces}
         */
        // 'no-regex-spaces': 'off',

        /**
         * Disallow identifiers from shadowing restricted names.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names}
         */
        // 'no-shadow-restricted-names': 'off',

        /**
         * Disallow unused labels.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.org/docs/latest/rules/no-unused-labels}
         */
        // 'no-unused-labels': 'off',

        /**
         * Disallow unnecessary catch clauses.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-catch}
         */
        // 'no-useless-catch': 'off',

        /**
         * Disallow unnecessary escape characters.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-useless-escape}
         */
        // 'no-useless-escape': 'off',

        /**
         * Disallow with statements.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/no-with}
         */
        // 'no-with': 'off',

        /**
         * Require generator functions to contain yield.
         * @config recommended
         * @see {@link https://eslint.org/docs/latest/rules/require-yield}
         */
        // 'require-yield': 'off',
    },
});
