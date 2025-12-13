import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

/**
 * TypeScript configuration.
 * @see {@link https://typescript-eslint.io/rules/}
 */
export const typescriptConfig = defineConfig([
    {
        name: 'typescript-config',
        files: ['**/*.{ts,tsx}'],
        extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            /**
             * Enforce that class methods utilize this.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/class-methods-use-this}
             */
            // '@typescript-eslint/class-methods-use-this': 'error',

            /**
             * Require return statements to either always or never specify values.
             * @typeChecked
             * @extension
             * @see {@link https://typescript-eslint.io/rules/consistent-return}
             */
            // '@typescript-eslint/consistent-return': 'error',

            /**
             * Enforce consistent usage of type exports.
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/consistent-type-exports}
             */
            '@typescript-eslint/consistent-type-exports': 'error',

            /**
             * Enforce consistent usage of type imports.
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/consistent-type-imports}
             */
            '@typescript-eslint/consistent-type-imports': 'error',

            /**
             * Enforce default parameters to be last.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/default-param-last}
             */
            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': 'error',

            /**
             * Require explicit return types on functions and class methods.
             * @see {@link https://typescript-eslint.io/rules/explicit-function-return-type}
             */
            // '@typescript-eslint/explicit-function-return-type': 'error',

            /**
             * Require explicit accessibility modifiers on class properties and methods.
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/explicit-member-accessibility}
             */
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'explicit',
                    overrides: {
                        accessors: 'explicit',
                        constructors: 'no-public',
                        methods: 'explicit',
                        properties: 'no-public',
                        parameterProperties: 'no-public',
                    },
                },
            ],

            /**
             * Require explicit return and argument types on exported functions' and classes' public class methods.
             * @see {@link https://typescript-eslint.io/rules/explicit-module-boundary-types}
             */
            // '@typescript-eslint/explicit-module-boundary-types': 'error',

            /**
             * Require or disallow initialization in variable declarations.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/init-declarations}
             */
            // '@typescript-eslint/init-declarations': 'error',

            /**
             * Enforce a maximum number of parameters in function definitions.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/max-params}
             */
            // '@typescript-eslint/max-params': 'error',

            /**
             * Require a consistent member declaration order.
             * @see {@link https://typescript-eslint.io/rules/member-ordering}
             */
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: [
                        // Index signature
                        'signature',
                        'call-signature',

                        // Fields
                        'public-static-field',
                        'protected-static-field',
                        'private-static-field',
                        '#private-static-field',

                        'public-instance-field',
                        'protected-instance-field',
                        'private-instance-field',
                        '#private-instance-field',

                        'public-abstract-field',
                        'protected-abstract-field',

                        'public-field',
                        'protected-field',
                        'private-field',
                        '#private-field',

                        'static-field',
                        'instance-field',
                        'abstract-field',

                        'field',

                        // Static initialization
                        'static-initialization',

                        // Constructors
                        'public-constructor',
                        'protected-constructor',
                        'private-constructor',

                        // Accessors
                        'public-static-accessor',
                        'protected-static-accessor',
                        'private-static-accessor',
                        '#private-static-accessor',

                        'public-instance-accessor',
                        'protected-instance-accessor',
                        'private-instance-accessor',
                        '#private-instance-accessor',

                        'public-abstract-accessor',
                        'protected-abstract-accessor',

                        'public-accessor',
                        'protected-accessor',
                        'private-accessor',
                        '#private-accessor',

                        'static-accessor',
                        'instance-accessor',
                        'abstract-accessor',

                        'accessor',

                        // Getters / Setters
                        ['public-static-get', 'public-static-set'],
                        ['protected-static-get', 'protected-static-set'],
                        ['private-static-get', 'private-static-set'],
                        ['#private-static-get', '#private-static-set'],

                        ['public-instance-get', 'public-instance-set'],
                        ['protected-instance-get', 'protected-instance-set'],
                        ['private-instance-get', 'private-instance-set'],
                        ['#private-instance-get', '#private-instance-set'],

                        ['public-abstract-get', 'public-abstract-set'],
                        ['protected-abstract-get', 'protected-abstract-set'],

                        ['public-get', 'public-set'],
                        ['protected-get', 'protected-set'],
                        ['private-get', 'private-set'],
                        ['#private-get', '#private-set'],

                        ['static-get', 'static-set'],
                        ['instance-get', 'instance-set'],
                        ['abstract-get', 'abstract-set'],

                        ['get', 'set'],

                        // Methods
                        'public-static-method',
                        'protected-static-method',
                        'private-static-method',
                        '#private-static-method',

                        'public-instance-method',
                        'protected-instance-method',
                        'private-instance-method',
                        '#private-instance-method',

                        'public-abstract-method',
                        'protected-abstract-method',

                        'public-method',
                        'protected-method',
                        'private-method',
                        '#private-method',

                        'static-method',
                        'instance-method',
                        'abstract-method',

                        'method',
                    ],
                },
            ],

            /**
             * Enforce using a particular method signature syntax.
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/method-signature-style}
             */
            '@typescript-eslint/method-signature-style': 'error',

            /**
             * Enforce naming conventions for everything across a codebase.
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/naming-convention}
             */
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'typeParameter',
                    format: ['PascalCase'],
                    prefix: ['T', 'K', 'U', 'V'],
                },
                {
                    selector: ['method', 'parameterProperty', 'property'],
                    modifiers: ['private'],
                    format: ['camelCase'],
                    leadingUnderscore: 'require',
                },
                {
                    selector: ['interface', 'typeAlias'],
                    format: ['PascalCase'],
                },
            ],

            /**
             * Disallow duplicate class members.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-dupe-class-members}
             */
            // '@typescript-eslint/no-dupe-class-members': 'error',

            /**
             * Disallow the declaration of empty interfaces.
             * @fixable
             * @deprecated
             * @see {@link https://typescript-eslint.io/rules/no-empty-interface}
             */
            // '@typescript-eslint/no-empty-interface': 'error',

            /**
             * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-import-type-side-effects}
             */
            '@typescript-eslint/no-import-type-side-effects': 'error',

            /**
             * Disallow.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-invalid-this}
             */
            'no-invalid-this': 'off',
            '@typescript-eslint/no-invalid-this': 'error',

            /**
             * Disallow function declarations that contain unsafe references inside loop statements.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-loop-func}
             */
            'no-loop-func': 'off',
            '@typescript-eslint/no-loop-func': 'error',

            /**
             * Disallow literal numbers that lose precision.
             * @extension
             * @deprecated
             * @see {@link https://typescript-eslint.io/rules/no-loss-of-precision}
             */
            // '@typescript-eslint/no-loss-of-precision': 'error',

            /**
             * Disallow magic numbers.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-magic-numbers}
             */
            // '@typescript-eslint/no-magic-numbers': 'error',

            /**
             * Disallow variable redeclaration.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-redeclare}
             */
            // '@typescript-eslint/no-redeclare': 'error',

            /**
             * Disallow specified modules when loaded by.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-restricted-imports}
             */
            // '@typescript-eslint/no-restricted-imports': 'error',

            /**
             * Disallow certain types.
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-restricted-types}
             */
            // '@typescript-eslint/no-restricted-types': 'error',

            /**
             * Disallow variable declarations from shadowing variables declared in the outer scope.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-shadow}
             */
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            /**
             * Disallow type aliases.
             * @deprecated
             * @see {@link https://typescript-eslint.io/rules/no-type-alias}
             */
            // '@typescript-eslint/no-type-alias': 'error',

            /**
             * Disallow unnecessary assignment of constructor property parameter.
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment}
             */
            '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',

            /**
             * Disallow unnecessary namespace qualifiers.
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-qualifier}
             */
            '@typescript-eslint/no-unnecessary-qualifier': 'error',

            /**
             * Disallow type assertions that narrow a type.
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-type-assertion}
             */
            // '@typescript-eslint/no-unsafe-type-assertion': 'error',

            /**
             * Disallow unused private class members.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-unused-private-class-members}
             */
            // '@typescript-eslint/no-unused-private-class-members': 'error',

            /**
             * Disallow the use of variables before they are defined.
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-use-before-define}
             */
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'error',

            /**
             * Disallow empty exports that don't change anything in a module file.
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-useless-empty-export}
             */
            '@typescript-eslint/no-useless-empty-export': 'error',

            /**
             * Disallow.
             * @deprecated
             * @see {@link https://typescript-eslint.io/rules/no-var-requires}
             */
            // '@typescript-eslint/no-var-requires': 'error',

            /**
             * Require or disallow parameter properties in class constructors.
             * @see {@link https://typescript-eslint.io/rules/parameter-properties}
             */
            '@typescript-eslint/parameter-properties': 'error',

            /**
             * Require destructuring from arrays and/or objects.
             * @fixable
             * @typeChecked
             * @extension
             * @see {@link https://typescript-eslint.io/rules/prefer-destructuring}
             */
            'prefer-destructuring': 'off',
            '@typescript-eslint/prefer-destructuring': 'error',

            /**
             * Require each enum member value to be explicitly initialized.
             * @see {@link https://typescript-eslint.io/rules/prefer-enum-initializers}
             */
            '@typescript-eslint/prefer-enum-initializers': 'error',

            /**
             * Require private members to be marked as.
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-readonly}
             */
            '@typescript-eslint/prefer-readonly': 'error',

            /**
             * Require function parameters to be typed as.
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-readonly-parameter-types}
             */
            // '@typescript-eslint/prefer-readonly-parameter-types': 'error',

            /**
             * Enforce using.
             * @fixable
             * @deprecated
             * @see {@link https://typescript-eslint.io/rules/prefer-ts-expect-error}
             */
            // '@typescript-eslint/prefer-ts-expect-error': 'error',

            /**
             * Require any function or method that returns a Promise to be marked async.
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/promise-function-async}
             */
            '@typescript-eslint/promise-function-async': 'error',

            /**
             * Require Array#sort and Array#toSorted calls to always provide a compareFunction.
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/require-array-sort-compare}
             */
            '@typescript-eslint/require-array-sort-compare': 'error',

            /**
             * Enforce constituents of a type union/intersection to be sorted alphabetically.
             * @fixable
             * @deprecated
             * @see {@link https://typescript-eslint.io/rules/sort-type-constituents}
             */
            // '@typescript-eslint/sort-type-constituents': 'error',

            /**
             * Disallow certain types in boolean expressions.
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/strict-boolean-expressions}
             */
            // '@typescript-eslint/strict-boolean-expressions': 'error',

            /**
             * Require switch-case statements to be exhaustive.
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/switch-exhaustiveness-check}
             */
            // '@typescript-eslint/switch-exhaustiveness-check': 'error',

            /**
             * Require type annotations in certain places.
             * @deprecated
             * @see {@link https://typescript-eslint.io/rules/typedef}
             */
            // '@typescript-eslint/typedef': 'error',

            /**
             * Require that function overload signatures be consecutive.
             * @config stylistic
             * @see {@link https://typescript-eslint.io/rules/adjacent-overload-signatures}
             */
            // '@typescript-eslint/adjacent-overload-signatures': 'off',

            /**
             * Require consistently using either.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/array-type}
             */
            // '@typescript-eslint/array-type': 'off',

            /**
             * Disallow awaiting a value that is not a Thenable.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/await-thenable}
             */
            // '@typescript-eslint/await-thenable': 'off',

            /**
             * Disallow.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/ban-ts-comment}
             */
            // '@typescript-eslint/ban-ts-comment': 'off',

            /**
             * Disallow.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/ban-tslint-comment}
             */
            // '@typescript-eslint/ban-tslint-comment': 'off',

            /**
             * Enforce that literals on classes are exposed in a consistent style.
             * @config stylistic
             * @see {@link https://typescript-eslint.io/rules/class-literal-property-style}
             */
            // '@typescript-eslint/class-literal-property-style': 'off',

            /**
             * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/consistent-generic-constructors}
             */
            // '@typescript-eslint/consistent-generic-constructors': 'off',

            /**
             * Require or disallow the.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/consistent-indexed-object-style}
             */
            // '@typescript-eslint/consistent-indexed-object-style': 'off',

            /**
             * Enforce consistent usage of type assertions.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/consistent-type-assertions}
             */
            // '@typescript-eslint/consistent-type-assertions': 'off',

            /**
             * Enforce type definitions to consistently use either.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/consistent-type-definitions}
             */
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

            /**
             * Enforce dot notation whenever possible.
             * @config stylistic
             * @fixable
             * @typeChecked
             * @extension
             * @see {@link https://typescript-eslint.io/rules/dot-notation}
             */
            // '@typescript-eslint/dot-notation': 'off',

            /**
             * Disallow generic.
             * @config recommended
             * @fixable
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-array-constructor}
             */
            // '@typescript-eslint/no-array-constructor': 'off',

            /**
             * Disallow using the.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-array-delete}
             */
            // '@typescript-eslint/no-array-delete': 'off',

            /**
             * Require.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-base-to-string}
             */
            // '@typescript-eslint/no-base-to-string': 'off',

            /**
             * Disallow non-null assertion in locations that may be confusing.
             * @config stylistic
             * @see {@link https://typescript-eslint.io/rules/no-confusing-non-null-assertion}
             */
            // '@typescript-eslint/no-confusing-non-null-assertion': 'off',

            /**
             * Require expressions of type void to appear in statement position.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-confusing-void-expression}
             */
            '@typescript-eslint/no-confusing-void-expression': [
                'error',
                { ignoreVoidOperator: true, ignoreVoidReturningFunctions: true },
            ],

            /**
             * Disallow using code marked as.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-deprecated}
             */
            // '@typescript-eslint/no-deprecated': 'off',

            /**
             * Disallow duplicate enum member values.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-duplicate-enum-values}
             */
            // '@typescript-eslint/no-duplicate-enum-values': 'off',

            /**
             * Disallow duplicate constituents of union or intersection types.
             * @config recommended
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-duplicate-type-constituents}
             */
            // '@typescript-eslint/no-duplicate-type-constituents': 'off',

            /**
             * Disallow using the.
             * @config strict
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-dynamic-delete}
             */
            // '@typescript-eslint/no-dynamic-delete': 'off',

            /**
             * Disallow empty functions.
             * @config stylistic
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-empty-function}
             */
            // '@typescript-eslint/no-empty-function': 'off',

            /**
             * Disallow accidentally using the "empty object" type.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-empty-object-type}
             */
            // '@typescript-eslint/no-empty-object-type': 'off',

            /**
             * Disallow the.
             * @config recommended
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-explicit-any}
             */
            '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

            /**
             * Disallow extra non-null assertions.
             * @config recommended
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-extra-non-null-assertion}
             */
            // '@typescript-eslint/no-extra-non-null-assertion': 'off',

            /**
             * Disallow classes used as namespaces.
             * @config strict
             * @see {@link https://typescript-eslint.io/rules/no-extraneous-class}
             */
            '@typescript-eslint/no-extraneous-class': 'off',

            /**
             * Require Promise-like statements to be handled appropriately.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-floating-promises}
             */
            // '@typescript-eslint/no-floating-promises': 'off',

            /**
             * Disallow iterating over an array with a for-in loop.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-for-in-array}
             */
            // '@typescript-eslint/no-for-in-array': 'off',

            /**
             * Disallow the use of.
             * @config recommended
             * @typeChecked
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-implied-eval}
             */
            // '@typescript-eslint/no-implied-eval': 'off',

            /**
             * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-inferrable-types}
             */
            // '@typescript-eslint/no-inferrable-types': 'off',

            /**
             * Disallow void type outside of generic or return types.
             * @config strict
             * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type}
             */
            // '@typescript-eslint/no-invalid-void-type': 'off',

            /**
             * Disallow the void operator except when used to discard a value.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-meaningless-void-operator}
             */
            '@typescript-eslint/no-meaningless-void-operator': 'off',

            /**
             * Enforce valid definition of.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-misused-new}
             */
            // '@typescript-eslint/no-misused-new': 'off',

            /**
             * Disallow Promises in places not designed to handle them.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-misused-promises}
             */
            // '@typescript-eslint/no-misused-promises': 'off',

            /**
             * Disallow using the spread operator when it might cause unexpected behavior.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-misused-spread}
             */
            // '@typescript-eslint/no-misused-spread': 'off',

            /**
             * Disallow enums from having both number and string members.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-mixed-enums}
             */
            // '@typescript-eslint/no-mixed-enums': 'off',

            /**
             * Disallow TypeScript namespaces.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-namespace}
             */
            // '@typescript-eslint/no-namespace': 'off',

            /**
             * Disallow non-null assertions in the left operand of a nullish coalescing operator.
             * @config strict
             * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing}
             */
            // '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',

            /**
             * Disallow non-null assertions after an optional chain expression.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain}
             */
            // '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

            /**
             * Disallow non-null assertions using the.
             * @config strict
             * @see {@link https://typescript-eslint.io/rules/no-non-null-assertion}
             */
            '@typescript-eslint/no-non-null-assertion': 'off',

            /**
             * Disallow members of unions and intersections that do nothing or override type information.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-redundant-type-constituents}
             */
            // '@typescript-eslint/no-redundant-type-constituents': 'off',

            /**
             * Disallow invocation of.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-require-imports}
             */
            // '@typescript-eslint/no-require-imports': 'off',

            /**
             * Disallow aliasing.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-this-alias}
             */
            // '@typescript-eslint/no-this-alias': 'off',

            /**
             * Disallow unnecessary equality comparisons against boolean literals.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare}
             */
            // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

            /**
             * Disallow conditionals where the type is always truthy or always falsy.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-condition}
             */
            // '@typescript-eslint/no-unnecessary-condition': 'off',

            /**
             * Disallow unnecessary template expressions.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-template-expression}
             */
            // '@typescript-eslint/no-unnecessary-template-expression': 'off',

            /**
             * Disallow type arguments that are equal to the default.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-arguments}
             */
            // '@typescript-eslint/no-unnecessary-type-arguments': 'off',

            /**
             * Disallow type assertions that do not change the type of an expression.
             * @config recommended
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-assertion}
             */
            // '@typescript-eslint/no-unnecessary-type-assertion': 'off',

            /**
             * Disallow unnecessary constraints on generic types.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-constraint}
             */
            // '@typescript-eslint/no-unnecessary-type-constraint': 'off',

            /**
             * Disallow conversion idioms when they do not change the type or value of the expression.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-conversion}
             */
            // '@typescript-eslint/no-unnecessary-type-conversion': 'off',

            /**
             * Disallow type parameters that aren't used multiple times.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-parameters}
             */
            // '@typescript-eslint/no-unnecessary-type-parameters': 'off',

            /**
             * Disallow calling a function with a value with type.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-argument}
             */
            // '@typescript-eslint/no-unsafe-argument': 'off',

            /**
             * Disallow assigning a value with type.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-assignment}
             */
            // '@typescript-eslint/no-unsafe-assignment': 'off',

            /**
             * Disallow calling a value with type.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-call}
             */
            // '@typescript-eslint/no-unsafe-call': 'off',

            /**
             * Disallow unsafe declaration merging.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-declaration-merging}
             */
            // '@typescript-eslint/no-unsafe-declaration-merging': 'off',

            /**
             * Disallow comparing an enum value with a non-enum value.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-enum-comparison}
             */
            // '@typescript-eslint/no-unsafe-enum-comparison': 'off',

            /**
             * Disallow using the unsafe built-in Function type.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-function-type}
             */
            // '@typescript-eslint/no-unsafe-function-type': 'off',

            /**
             * Disallow member access on a value with type.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-member-access}
             */
            // '@typescript-eslint/no-unsafe-member-access': 'off',

            /**
             * Disallow returning a value with type.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-return}
             */
            // '@typescript-eslint/no-unsafe-return': 'off',

            /**
             * Require unary negation to take a number.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/no-unsafe-unary-minus}
             */
            // '@typescript-eslint/no-unsafe-unary-minus': 'off',

            /**
             * Disallow unused expressions.
             * @config recommended
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-unused-expressions}
             */
            // '@typescript-eslint/no-unused-expressions': 'off',

            /**
             * Disallow unused variables.
             * @config recommended
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-unused-vars}
             */
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],

            /**
             * Disallow unnecessary constructors.
             * @config strict
             * @extension
             * @see {@link https://typescript-eslint.io/rules/no-useless-constructor}
             */
            // '@typescript-eslint/no-useless-constructor': 'off',

            /**
             * Disallow using confusing built-in primitive class wrappers.
             * @config recommended
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/no-wrapper-object-types}
             */
            // '@typescript-eslint/no-wrapper-object-types': 'off',

            /**
             * Enforce non-null assertions over explicit type assertions.
             * @config stylistic
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/non-nullable-type-assertion-style}
             */
            // '@typescript-eslint/non-nullable-type-assertion-style': 'off',

            /**
             * Disallow throwing non-.
             * @config recommended
             * @typeChecked
             * @extension
             * @see {@link https://typescript-eslint.io/rules/only-throw-error}
             */
            // '@typescript-eslint/only-throw-error': 'off',

            /**
             * Enforce the use of.
             * @config recommended
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/prefer-as-const}
             */
            // '@typescript-eslint/prefer-as-const': 'off',

            /**
             * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
             * @config stylistic
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-find}
             */
            // '@typescript-eslint/prefer-find': 'off',

            /**
             * Enforce the use of.
             * @config stylistic
             * @see {@link https://typescript-eslint.io/rules/prefer-for-of}
             */
            // '@typescript-eslint/prefer-for-of': 'off',

            /**
             * Enforce using function types instead of interfaces with call signatures.
             * @config stylistic
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/prefer-function-type}
             */
            // '@typescript-eslint/prefer-function-type': 'off',

            /**
             * Enforce.
             * @config stylistic
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-includes}
             */
            // '@typescript-eslint/prefer-includes': 'off',

            /**
             * Require all enum members to be literal values.
             * @config strict
             * @see {@link https://typescript-eslint.io/rules/prefer-literal-enum-member}
             */
            // '@typescript-eslint/prefer-literal-enum-member': 'off',

            /**
             * Require using.
             * @config recommended
             * @fixable
             * @see {@link https://typescript-eslint.io/rules/prefer-namespace-keyword}
             */
            // '@typescript-eslint/prefer-namespace-keyword': 'off',

            /**
             * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
             * @config stylistic
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-nullish-coalescing}
             */
            // '@typescript-eslint/prefer-nullish-coalescing': 'off',

            /**
             * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
             * @config stylistic
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-optional-chain}
             */
            // '@typescript-eslint/prefer-optional-chain': 'off',

            /**
             * Require using Error objects as Promise rejection reasons.
             * @config recommended
             * @typeChecked
             * @extension
             * @see {@link https://typescript-eslint.io/rules/prefer-promise-reject-errors}
             */
            // '@typescript-eslint/prefer-promise-reject-errors': 'off',

            /**
             * Enforce using type parameter when calling.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-reduce-type-parameter}
             */
            // '@typescript-eslint/prefer-reduce-type-parameter': 'off',

            /**
             * Enforce RegExp#exec over String#match if no global flag is provided.
             * @config stylistic
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-regexp-exec}
             */
            // '@typescript-eslint/prefer-regexp-exec': 'off',

            /**
             * Enforce that this is used when only this type is returned.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-return-this-type}
             */
            // '@typescript-eslint/prefer-return-this-type': 'off',

            /**
             * Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
             * @config stylistic
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/prefer-string-starts-ends-with}
             */
            // '@typescript-eslint/prefer-string-starts-ends-with': 'off',

            /**
             * Enforce that get() types should be assignable to their equivalent set() type.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/related-getter-setter-pairs}
             */
            // '@typescript-eslint/related-getter-setter-pairs': 'off',

            /**
             * Disallow async functions which do not return promises and have no await expression.
             * @config recommended
             * @typeChecked
             * @extension
             * @see {@link https://typescript-eslint.io/rules/require-await}
             */
            // '@typescript-eslint/require-await': 'off',

            /**
             * Require both operands of addition to be the same type and be bigint, number, or string.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/restrict-plus-operands}
             */
            // '@typescript-eslint/restrict-plus-operands': 'off',

            /**
             * Enforce template literal expressions to be of string type.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/restrict-template-expressions}
             */
            '@typescript-eslint/restrict-template-expressions': 'off',

            /**
             * Enforce consistent awaiting of returned promises.
             * @config strict
             * @fixable
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/return-await}
             */
            // '@typescript-eslint/return-await': 'off',

            /**
             * Disallow certain triple slash directives in favor of ES6-style import declarations.
             * @config recommended
             * @see {@link https://typescript-eslint.io/rules/triple-slash-reference}
             */
            // '@typescript-eslint/triple-slash-reference': 'off',

            /**
             * Enforce unbound methods are called with their expected scope.
             * @config recommended
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/unbound-method}
             */
            '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

            /**
             * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
             * @config strict
             * @see {@link https://typescript-eslint.io/rules/unified-signatures}
             */
            // '@typescript-eslint/unified-signatures': 'off',

            /**
             * Enforce typing arguments in Promise rejection callbacks as unknown.
             * @config strict
             * @typeChecked
             * @see {@link https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable}
             */
            // '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
        },
    },
    {
        name: 'typescript-config-dts',
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/naming-convention': 'off',
        },
    },
]);
