import react from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

/**
 * React configuration.
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-react}
 */
export const reactConfig = defineConfig({
    name: 'react-config',
    extends: [react.configs.flat['recommended']!, react.configs.flat['jsx-runtime']!],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        /**
         * Enforces consistent naming for boolean props.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md}
         */
        'react/boolean-prop-naming': [
            'error',
            { rule: '^(is|has|can|should)[A-Z][A-Za-z0-9]*', validateNested: true },
        ],

        /**
         * Disallow usage of button elements without an explicit type attribute.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md}
         */
        'react/button-has-type': 'error',

        /**
         * Enforce using onChange or readonly attribute when checked is used.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md}
         */
        'react/checked-requires-onchange-or-readonly': 'error',

        /**
         * Enforce all defaultProps have a corresponding non-required PropType.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md}
         */
        // 'react/default-props-match-prop-types': 'error',

        /**
         * Enforce consistent usage of destructuring assignment of props, state, and context.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md}
         */
        'react/destructuring-assignment': 'error',

        /**
         * Disallow certain props on components.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md}
         */
        // 'react/forbid-component-props': 'error',

        /**
         * Disallow certain props on DOM Nodes.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md}
         */
        // 'react/forbid-dom-props': 'error',

        /**
         * Disallow certain elements.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md}
         */
        // 'react/forbid-elements': 'error',

        /**
         * Disallow using another component's propTypes.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md}
         */
        // 'react/forbid-foreign-prop-types': 'error',

        /**
         * Disallow certain propTypes.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md}
         */
        // 'react/forbid-prop-types': 'error',

        /**
         * Require all forwardRef components include a ref parameter.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md}
         */
        'react/forward-ref-uses-ref': 'error',

        /**
         * Enforce a specific function type for function components.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md}
         */
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],

        /**
         * Ensure destructuring and symmetric naming of useState hook value and setter variables.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md}
         */
        'react/hook-use-state': 'error',

        /**
         * Enforce sandbox attribute on iframe elements.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md}
         */
        'react/iframe-missing-sandbox': 'error',

        /**
         * Enforce boolean attributes notation in JSX.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md}
         */
        'react/jsx-boolean-value': ['error', 'never'],

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md}
         */
        'react/jsx-child-element-spacing': 'error',

        /**
         * Enforce closing bracket location in JSX.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md}
         */
        'react/jsx-closing-bracket-location': 'error',

        /**
         * Enforce closing tag location for multiline JSX.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md}
         */
        'react/jsx-closing-tag-location': 'error',

        /**
         * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md}
         */
        'react/jsx-curly-brace-presence': ['error', 'never'],

        /**
         * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md}
         */
        'react/jsx-curly-newline': 'error',

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md}
         */
        'react/jsx-curly-spacing': 'error',

        /**
         * Enforce or disallow spaces around equal signs in JSX attributes.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md}
         */
        'react/jsx-equals-spacing': 'error',

        /**
         * Disallow file extensions that may contain JSX.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
         */
        // 'react/jsx-filename-extension': 'error',

        /**
         * Enforce proper position of the first property in JSX.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md}
         */
        'react/jsx-first-prop-new-line': 'error',

        /**
         * Enforce shorthand or standard form for React fragments.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md}
         */
        'react/jsx-fragments': 'error',

        /**
         * Enforce event handler naming conventions in JSX.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md}
         */
        'react/jsx-handler-names': 'error',

        /**
         * Enforce JSX indentation.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md}
         */
        'react/jsx-indent': 'error',

        /**
         * Enforce props indentation in JSX.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md}
         */
        'react/jsx-indent-props': 'error',

        /**
         * Enforce JSX maximum depth.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md}
         */
        // 'react/jsx-max-depth': 'error',

        /**
         * Enforce maximum of props on a single line in JSX.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md}
         */
        // 'react/jsx-max-props-per-line': 'error',

        /**
         * Require or prevent a new line after jsx elements and expressions.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md}
         */
        // 'react/jsx-newline': 'error',

        /**
         * Disallow .bind() or arrow functions in JSX props.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
         */
        'react/jsx-no-bind': 'error',

        /**
         * Disallows JSX context provider values from taking values that will cause needless rerenders.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md}
         */
        'react/jsx-no-constructed-context-values': 'error',

        /**
         * Disallow problematic leaked values from being rendered.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md}
         */
        'react/jsx-no-leaked-render': 'error',

        /**
         * Disallow usage of string literals in JSX.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md}
         */
        // 'react/jsx-no-literals': 'error',

        /**
         * Disallow usage of javascript: URLs.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md}
         */
        'react/jsx-no-script-url': 'error',

        /**
         * Disallow unnecessary fragments.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md}
         */
        'react/jsx-no-useless-fragment': 'error',

        /**
         * Require one JSX element per line.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md}
         */
        'react/jsx-one-expression-per-line': 'error',

        /**
         * Enforce PascalCase for user-defined JSX components.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md}
         */
        'react/jsx-pascal-case': 'error',

        /**
         * Disallow multiple spaces between inline JSX props.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md}
         */
        'react/jsx-props-no-multi-spaces': 'error',

        /**
         * Disallow JSX prop spreading the same identifier multiple times.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md}
         */
        'react/jsx-props-no-spread-multi': 'error',

        /**
         * Disallow JSX prop spreading.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md}
         */
        // 'react/jsx-props-no-spreading': 'error',

        /**
         * Enforce defaultProps declarations alphabetical sorting.
         * @deprecated
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md}
         */
        // 'react/jsx-sort-default-props': 'error',

        /**
         * Enforce props alphabetical sorting.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md}
         */
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandLast: true,
                multiline: 'last',
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],

        /**
         * Enforce spacing before closing bracket in JSX.
         * @fixable
         * @deprecated
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md}
         */
        // 'react/jsx-space-before-closing': 'error',

        /**
         * Enforce whitespace in and around the JSX opening and closing brackets.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md}
         */
        'react/jsx-tag-spacing': 'error',

        /**
         * Disallow missing parentheses around multiline JSX.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md}
         */
        'react/jsx-wrap-multilines': 'error',

        /**
         * Disallow when this.state is accessed within setState.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md}
         */
        'react/no-access-state-in-setstate': 'error',

        /**
         * Disallow adjacent inline elements not separated by whitespace.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md}
         */
        'react/no-adjacent-inline-elements': 'error',

        /**
         * Disallow usage of Array index in keys.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md}
         */
        'react/no-array-index-key': 'error',

        /**
         * Lifecycle methods should be methods on the prototype, not class fields.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md}
         */
        'react/no-arrow-function-lifecycle': 'error',

        /**
         * Disallow usage of dangerous JSX properties.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md}
         */
        'react/no-danger': 'error',

        /**
         * Disallow usage of setState in componentDidMount.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md}
         */
        'react/no-did-mount-set-state': 'error',

        /**
         * Disallow usage of setState in componentDidUpdate.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md}
         */
        'react/no-did-update-set-state': 'error',

        /**
         * Disallow usage of invalid attributes.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md}
         */
        'react/no-invalid-html-attribute': 'error',

        /**
         * Disallow multiple component definition per file.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md}
         */
        // 'react/no-multi-comp': 'error',

        /**
         * Enforce that namespaces are not used in React elements.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md}
         */
        'react/no-namespace': 'error',

        /**
         * Disallow usage of referential-type variables as default param in functional component.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md}
         */
        'react/no-object-type-as-default-prop': 'error',

        /**
         * Disallow usage of shouldComponentUpdate when extending React.PureComponent.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md}
         */
        'react/no-redundant-should-component-update': 'error',

        /**
         * Disallow usage of setState.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md}
         */
        'react/no-set-state': 'error',

        /**
         * Disallow this from being used in stateless functional components.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md}
         */
        'react/no-this-in-sfc': 'error',

        /**
         * Disallow common typos.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md}
         */
        'react/no-typos': 'error',

        /**
         * Disallow creating unstable components inside components.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md}
         */
        'react/no-unstable-nested-components': 'error',

        /**
         * Disallow declaring unused methods of component class.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md}
         */
        'react/no-unused-class-component-methods': 'error',

        /**
         * Disallow definitions of unused propTypes.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md}
         */
        'react/no-unused-prop-types': 'error',

        /**
         * Disallow definitions of unused state.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md}
         */
        'react/no-unused-state': 'error',

        /**
         * Disallow usage of setState in componentWillUpdate.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md}
         */
        'react/no-will-update-set-state': 'error',

        /**
         * Enforce ES5 or ES6 class for React Components.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md}
         */
        'react/prefer-es6-class': 'error',

        /**
         * Prefer exact proptype definitions.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md}
         */
        'react/prefer-exact-props': 'error',

        /**
         * Enforce that props are read-only.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md}
         */
        'react/prefer-read-only-props': 'error',

        /**
         * Enforce stateless components to be written as a pure function.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md}
         */
        'react/prefer-stateless-function': 'error',

        /**
         * Enforce a defaultProps definition for every prop that is not a required prop.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md}
         */
        // 'react/require-default-props': 'error',

        /**
         * Enforce React components to have a shouldComponentUpdate method.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md}
         */
        'react/require-optimization': 'error',

        /**
         * Disallow extra closing tags for components without children.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md}
         */
        'react/self-closing-comp': 'error',

        /**
         * Enforce component methods order.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md}
         */
        'react/sort-comp': 'error',

        /**
         * Enforce defaultProps declarations alphabetical sorting.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md}
         */
        'react/sort-default-props': 'error',

        /**
         * Enforce propTypes declarations alphabetical sorting.
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md}
         */
        'react/sort-prop-types': 'error',

        /**
         * Enforce class component state initialization style.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md}
         */
        'react/state-in-constructor': 'error',

        /**
         * Enforces where React component static properties should be positioned.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md}
         */
        'react/static-property-placement': 'error',

        /**
         * Enforce style prop value is an object.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md}
         */
        // 'react/style-prop-object': 'error',

        /**
         * Disallow void DOM elements (e.g. <img />, <br />) from receiving children.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md}
         */
        'react/void-dom-elements-no-children': 'error',

        /**
         * Disallow missing displayName in a React component definition.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md}
         */
        // 'react/display-name': 'off',

        /**
         * Disallow missing key props in iterators/collection literals.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md}
         */
        // 'react/jsx-key': 'off',

        /**
         * Disallow comments from being inserted as text nodes.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md}
         */
        // 'react/jsx-no-comment-textnodes': 'off',

        /**
         * Disallow duplicate properties in JSX.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md}
         */
        // 'react/jsx-no-duplicate-props': 'off',

        /**
         * Disallow target="_blank" attribute without rel="noreferrer".
         * @config recommended
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md}
         */
        // 'react/jsx-no-target-blank': 'off',

        /**
         * Disallow undeclared variables in JSX.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md}
         */
        // 'react/jsx-no-undef': 'off',

        /**
         * Disallow React to be incorrectly marked as unused.
         * @config recommended
         * @config jsx-runtime
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md}
         */
        // 'react/jsx-uses-react': 'off',

        /**
         * Disallow variables used in JSX to be incorrectly marked as unused.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md}
         */
        // 'react/jsx-uses-vars': 'off',

        /**
         * Disallow passing of children as props.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md}
         */
        // 'react/no-children-prop': 'off',

        /**
         * Disallow when a DOM element is using both children and dangerouslySetInnerHTML.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md}
         */
        // 'react/no-danger-with-children': 'off',

        /**
         * Disallow usage of deprecated methods.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md}
         */
        // 'react/no-deprecated': 'off',

        /**
         * Disallow direct mutation of this.state.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md}
         */
        // 'react/no-direct-mutation-state': 'off',

        /**
         * Disallow usage of findDOMNode.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md}
         */
        // 'react/no-find-dom-node': 'off',

        /**
         * Disallow usage of isMounted.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md}
         */
        // 'react/no-is-mounted': 'off',

        /**
         * Disallow usage of the return value of ReactDOM.render.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md}
         */
        // 'react/no-render-return-value': 'off',

        /**
         * Disallow using string references.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md}
         */
        // 'react/no-string-refs': 'off',

        /**
         * Disallow unescaped HTML entities from appearing in markup.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md}
         */
        // 'react/no-unescaped-entities': 'off',

        /**
         * Disallow usage of unknown DOM property.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md}
         */
        // 'react/no-unknown-property': 'off',

        /**
         * Disallow usage of unsafe lifecycle methods.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md}
         */
        // 'react/no-unsafe': 'off',

        /**
         * Disallow missing props validation in a React component definition.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md}
         */
        // 'react/prop-types': 'off',

        /**
         * Disallow missing React when using JSX.
         * @config recommended
         * @config jsx-runtime
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md}
         */
        // 'react/react-in-jsx-scope': 'off',

        /**
         * Enforce ES5 or ES6 class for returning value in render function.
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md}
         */
        // 'react/require-render-return': 'off',
    },
});
