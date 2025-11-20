import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

/**
 * Stylistic configuration.
 * @see {@link https://eslint.style/rules}
 */
export const stylisticConfig = defineConfig({
    name: 'stylistic-config',
    plugins: { '@stylistic': stylistic },
    rules: {
        /**
         * Enforce linebreaks after opening and before closing array brackets.
         * @fixable
         * @see {@link https://eslint.style/rules/array-bracket-newline}
         */
        // '@stylistic/array-bracket-newline': 'error',

        /**
         * Enforce consistent spacing inside array brackets.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/array-bracket-spacing}
         */
        // '@stylistic/array-bracket-spacing': 'error',

        /**
         * Enforce line breaks after each array element.
         * @fixable
         * @see {@link https://eslint.style/rules/array-element-newline}
         */
        // '@stylistic/array-element-newline': 'error',

        /**
         * Require parentheses around arrow function arguments.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/arrow-parens}
         */
        // '@stylistic/arrow-parens': 'error',

        /**
         * Enforce consistent spacing before and after the arrow in arrow functions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/arrow-spacing}
         */
        // '@stylistic/arrow-spacing': 'error',

        /**
         * Disallow or enforce spaces inside of blocks after opening block and before closing block.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/block-spacing}
         */
        // '@stylistic/block-spacing': 'error',

        /**
         * Enforce consistent brace style for blocks.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/brace-style}
         */
        // '@stylistic/brace-style': 'error',

        /**
         * Require or disallow trailing commas.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/comma-dangle}
         */
        // '@stylistic/comma-dangle': 'error',

        /**
         * Enforce consistent spacing before and after commas.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/comma-spacing}
         */
        // '@stylistic/comma-spacing': 'error',

        /**
         * Enforce consistent comma style.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/comma-style}
         */
        // '@stylistic/comma-style': 'error',

        /**
         * Enforce consistent spacing inside computed property brackets.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/computed-property-spacing}
         */
        // '@stylistic/computed-property-spacing': 'error',

        /**
         * Enforce consistent line breaks after opening and before closing braces.
         * @fixable
         * @see {@link https://eslint.style/rules/curly-newline}
         */
        // '@stylistic/curly-newline': 'error',

        /**
         * Enforce consistent newlines before and after dots.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/dot-location}
         */
        // '@stylistic/dot-location': 'error',

        /**
         * Require or disallow newline at the end of files.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/eol-last}
         */
        // '@stylistic/eol-last': 'error',

        /**
         * Enforce line breaks between arguments of a function call.
         * @fixable
         * @see {@link https://eslint.style/rules/function-call-argument-newline}
         */
        // '@stylistic/function-call-argument-newline': 'error',

        /**
         * Require or disallow spacing between function identifiers and their invocations.
         * @fixable
         * @see {@link https://eslint.style/rules/function-call-spacing}
         */
        // '@stylistic/function-call-spacing': 'error',

        /**
         * Enforce consistent line breaks inside function parentheses.
         * @fixable
         * @see {@link https://eslint.style/rules/function-paren-newline}
         */
        // '@stylistic/function-paren-newline': 'error',

        /**
         * Enforce consistent spacing around `*` operators in generator functions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/generator-star-spacing}
         */
        // '@stylistic/generator-star-spacing': 'error',

        /**
         * Enforce the location of arrow function bodies.
         * @fixable
         * @see {@link https://eslint.style/rules/implicit-arrow-linebreak}
         */
        // '@stylistic/implicit-arrow-linebreak': 'error',

        /**
         * Enforce consistent indentation.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/indent}
         */
        // '@stylistic/indent': 'error',

        /**
         * Indentation for binary operators.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/indent-binary-ops}
         */
        // '@stylistic/indent-binary-ops': 'error',

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
         * @see {@link https://eslint.style/rules/jsx-child-element-spacing}
         */
        // '@stylistic/jsx-child-element-spacing': 'error',

        /**
         * Enforce closing bracket location in JSX.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-closing-bracket-location}
         */
        // '@stylistic/jsx-closing-bracket-location': 'error',

        /**
         * Enforce closing tag location for multiline JSX.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-closing-tag-location}
         */
        // '@stylistic/jsx-closing-tag-location': 'error',

        /**
         * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-curly-brace-presence}
         */
        // '@stylistic/jsx-curly-brace-presence': 'error',

        /**
         * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-curly-newline}
         */
        // '@stylistic/jsx-curly-newline': 'error',

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-curly-spacing}
         */
        // '@stylistic/jsx-curly-spacing': 'error',

        /**
         * Enforce or disallow spaces around equal signs in JSX attributes.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-equals-spacing}
         */
        // '@stylistic/jsx-equals-spacing': 'error',

        /**
         * Enforce proper position of the first property in JSX.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-first-prop-new-line}
         */
        // '@stylistic/jsx-first-prop-new-line': 'error',

        /**
         * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-function-call-newline}
         */
        // '@stylistic/jsx-function-call-newline': 'error',

        /**
         * Enforce JSX indentation. Deprecated, use `indent` rule instead.
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-indent}
         */
        // '@stylistic/jsx-indent': 'error',

        /**
         * Enforce props indentation in JSX.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-indent-props}
         */
        // '@stylistic/jsx-indent-props': 'error',

        /**
         * Enforce maximum of props on a single line in JSX.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-max-props-per-line}
         */
        // '@stylistic/jsx-max-props-per-line': 'error',

        /**
         * Require or prevent a new line after jsx elements and expressions.
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-newline}
         */
        // '@stylistic/jsx-newline': 'error',

        /**
         * Require one JSX element per line.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-one-expression-per-line}
         */
        // '@stylistic/jsx-one-expression-per-line': 'error',

        /**
         * Enforce PascalCase for user-defined JSX components.
         * @see {@link https://eslint.style/rules/jsx-pascal-case}
         */
        // '@stylistic/jsx-pascal-case': 'error',

        /**
         * Disallow multiple spaces between inline JSX props. Deprecated, use `no-multi-spaces` rule instead.
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-props-no-multi-spaces}
         */
        // '@stylistic/jsx-props-no-multi-spaces': 'error',

        /**
         * Enforce the consistent use of either double or single quotes in JSX attributes.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-quotes}
         */
        // '@stylistic/jsx-quotes': 'error',

        /**
         * Disallow extra closing tags for components without children.
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-self-closing-comp}
         */
        // '@stylistic/jsx-self-closing-comp': 'error',

        /**
         * Enforce props alphabetical sorting.
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-sort-props}
         */
        // '@stylistic/jsx-sort-props': 'error',

        /**
         * Enforce whitespace in and around the JSX opening and closing brackets.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-tag-spacing}
         */
        // '@stylistic/jsx-tag-spacing': 'error',

        /**
         * Disallow missing parentheses around multiline JSX.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/jsx-wrap-multilines}
         */
        // '@stylistic/jsx-wrap-multilines': 'error',

        /**
         * Enforce consistent spacing between property names and type annotations in types and interfaces.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/key-spacing}
         */
        // '@stylistic/key-spacing': 'error',

        /**
         * Enforce consistent spacing before and after keywords.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/keyword-spacing}
         */
        // '@stylistic/keyword-spacing': 'error',

        /**
         * Enforce position of line comments.
         * @see {@link https://eslint.style/rules/line-comment-position}
         */
        // '@stylistic/line-comment-position': 'error',

        /**
         * Enforce consistent linebreak style.
         * @fixable
         * @see {@link https://eslint.style/rules/linebreak-style}
         */
        // '@stylistic/linebreak-style': 'error',

        /**
         * Require empty lines around comments.
         * @fixable
         * @see {@link https://eslint.style/rules/lines-around-comment}
         */
        // '@stylistic/lines-around-comment': 'error',

        /**
         * Require or disallow an empty line between class members.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/lines-between-class-members}
         */
        // '@stylistic/lines-between-class-members': 'error',

        /**
         * Enforce consistent spacing and line break styles inside brackets.
         * @fixable
         * @experimental
         * @see {@link https://eslint.style/rules/list-style}
         */
        // '@stylistic/list-style': 'error',

        /**
         * Enforce a maximum line length.
         * @see {@link https://eslint.style/rules/max-len}
         */
        // '@stylistic/max-len': 'error',

        /**
         * Enforce a maximum number of statements allowed per line.
         * @config recommended
         * @see {@link https://eslint.style/rules/max-statements-per-line}
         */
        // '@stylistic/max-statements-per-line': 'error',

        /**
         * Require a specific member delimiter style for interfaces and type literals.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/member-delimiter-style}
         */
        // '@stylistic/member-delimiter-style': 'error',

        /**
         * Enforce a particular style for multiline comments.
         * @fixable
         * @see {@link https://eslint.style/rules/multiline-comment-style}
         */
        // '@stylistic/multiline-comment-style': 'error',

        /**
         * Enforce newlines between operands of ternary expressions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/multiline-ternary}
         */
        // '@stylistic/multiline-ternary': 'error',

        /**
         * Enforce or disallow parentheses when invoking a constructor with no arguments.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/new-parens}
         */
        // '@stylistic/new-parens': 'error',

        /**
         * Require a newline after each call in a method chain.
         * @fixable
         * @see {@link https://eslint.style/rules/newline-per-chained-call}
         */
        // '@stylistic/newline-per-chained-call': 'error',

        /**
         * Disallow arrow functions where they could be confused with comparisons.
         * @fixable
         * @see {@link https://eslint.style/rules/no-confusing-arrow}
         */
        // '@stylistic/no-confusing-arrow': 'error',

        /**
         * Disallow unnecessary parentheses.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/no-extra-parens}
         */
        // '@stylistic/no-extra-parens': 'error',

        /**
         * Disallow unnecessary semicolons.
         * @fixable
         * @see {@link https://eslint.style/rules/no-extra-semi}
         */
        // '@stylistic/no-extra-semi': 'error',

        /**
         * Disallow leading or trailing decimal points in numeric literals.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/no-floating-decimal}
         */
        // '@stylistic/no-floating-decimal': 'error',

        /**
         * Disallow mixed binary operators.
         * @config recommended
         * @see {@link https://eslint.style/rules/no-mixed-operators}
         */
        // '@stylistic/no-mixed-operators': 'error',

        /**
         * Disallow mixed spaces and tabs for indentation.
         * @config recommended
         * @see {@link https://eslint.style/rules/no-mixed-spaces-and-tabs}
         */
        // '@stylistic/no-mixed-spaces-and-tabs': 'error',

        /**
         * Disallow multiple spaces.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/no-multi-spaces}
         */
        // '@stylistic/no-multi-spaces': 'error',

        /**
         * Disallow multiple empty lines.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/no-multiple-empty-lines}
         */
        // '@stylistic/no-multiple-empty-lines': 'error',

        /**
         * Disallow all tabs.
         * @config recommended
         * @see {@link https://eslint.style/rules/no-tabs}
         */
        // '@stylistic/no-tabs': 'error',

        /**
         * Disallow trailing whitespace at the end of lines.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/no-trailing-spaces}
         */
        // '@stylistic/no-trailing-spaces': 'error',

        /**
         * Disallow whitespace before properties.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/no-whitespace-before-property}
         */
        // '@stylistic/no-whitespace-before-property': 'error',

        /**
         * Enforce the location of single-line statements.
         * @fixable
         * @see {@link https://eslint.style/rules/nonblock-statement-body-position}
         */
        // '@stylistic/nonblock-statement-body-position': 'error',

        /**
         * Enforce consistent line breaks after opening and before closing braces.
         * @fixable
         * @see {@link https://eslint.style/rules/object-curly-newline}
         */
        // '@stylistic/object-curly-newline': 'error',

        /**
         * Enforce consistent spacing inside braces.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/object-curly-spacing}
         */
        // '@stylistic/object-curly-spacing': 'error',

        /**
         * Enforce placing object properties on separate lines.
         * @fixable
         * @see {@link https://eslint.style/rules/object-property-newline}
         */
        // '@stylistic/object-property-newline': 'error',

        /**
         * Require or disallow newlines around variable declarations.
         * @fixable
         * @see {@link https://eslint.style/rules/one-var-declaration-per-line}
         */
        // '@stylistic/one-var-declaration-per-line': 'error',

        /**
         * Enforce consistent linebreak style for operators.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/operator-linebreak}
         */
        // '@stylistic/operator-linebreak': 'error',

        /**
         * Require or disallow padding within blocks.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/padded-blocks}
         */
        // '@stylistic/padded-blocks': 'error',

        /**
         * Require or disallow padding lines between statements.
         * @fixable
         * @see {@link https://eslint.style/rules/padding-line-between-statements}
         */
        // '@stylistic/padding-line-between-statements': 'error',

        /**
         * Require quotes around object literal, type literal, interfaces and enums property names.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/quote-props}
         */
        // '@stylistic/quote-props': 'error',

        /**
         * Enforce the consistent use of either backticks, double, or single quotes.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/quotes}
         */
        '@stylistic/quotes': [
            'error',
            'single',
            { avoidEscape: true, allowTemplateLiterals: false },
        ],

        /**
         * Enforce spacing between rest and spread operators and their expressions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/rest-spread-spacing}
         */
        // '@stylistic/rest-spread-spacing': 'error',

        /**
         * Require or disallow semicolons instead of ASI.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/semi}
         */
        // '@stylistic/semi': 'error',

        /**
         * Enforce consistent spacing before and after semicolons.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/semi-spacing}
         */
        // '@stylistic/semi-spacing': 'error',

        /**
         * Enforce location of semicolons.
         * @fixable
         * @see {@link https://eslint.style/rules/semi-style}
         */
        // '@stylistic/semi-style': 'error',

        /**
         * Enforce consistent spacing before blocks.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/space-before-blocks}
         */
        // '@stylistic/space-before-blocks': 'error',

        /**
         * Enforce consistent spacing before function parenthesis.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/space-before-function-paren}
         */
        // '@stylistic/space-before-function-paren': 'error',

        /**
         * Enforce consistent spacing inside parentheses.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/space-in-parens}
         */
        // '@stylistic/space-in-parens': 'error',

        /**
         * Require spacing around infix operators.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/space-infix-ops}
         */
        // '@stylistic/space-infix-ops': 'error',

        /**
         * Enforce consistent spacing before or after unary operators.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/space-unary-ops}
         */
        // '@stylistic/space-unary-ops': 'error',

        /**
         * Enforce consistent spacing after the `//` or `/*` in a comment.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/spaced-comment}
         */
        // '@stylistic/spaced-comment': 'error',

        /**
         * Enforce spacing around colons of switch statements.
         * @fixable
         * @see {@link https://eslint.style/rules/switch-colon-spacing}
         */
        // '@stylistic/switch-colon-spacing': 'error',

        /**
         * Require or disallow spacing around embedded expressions of template strings.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/template-curly-spacing}
         */
        // '@stylistic/template-curly-spacing': 'error',

        /**
         * Require or disallow spacing between template tags and their literals.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/template-tag-spacing}
         */
        // '@stylistic/template-tag-spacing': 'error',

        /**
         * Require consistent spacing around type annotations.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/type-annotation-spacing}
         */
        // '@stylistic/type-annotation-spacing': 'error',

        /**
         * Enforces consistent spacing inside TypeScript type generics.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/type-generic-spacing}
         */
        // '@stylistic/type-generic-spacing': 'error',

        /**
         * Expect space before the type declaration in the named tuple.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/type-named-tuple-spacing}
         */
        // '@stylistic/type-named-tuple-spacing': 'error',

        /**
         * Require parentheses around immediate `function` invocations.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/wrap-iife}
         */
        // '@stylistic/wrap-iife': 'error',

        /**
         * Require parenthesis around regex literals.
         * @fixable
         * @see {@link https://eslint.style/rules/wrap-regex}
         */
        // '@stylistic/wrap-regex': 'error',

        /**
         * Require or disallow spacing around the `*` in `yield*` expressions.
         * @config recommended
         * @fixable
         * @see {@link https://eslint.style/rules/yield-star-spacing}
         */
        // '@stylistic/yield-star-spacing': 'error',
    },
});
