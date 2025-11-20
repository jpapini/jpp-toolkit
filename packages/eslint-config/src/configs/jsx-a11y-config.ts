import jsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'eslint/config';

/**
 * JSX a11y configuration.
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y}
 */
export const jsxA11yConfig = defineConfig({
    name: 'jsx-a11y-config',
    extends: [jsxA11y.flatConfigs.recommended],
    rules: {
        /**
         * Enforce emojis are wrapped in <span> and provide screen reader access.
         * @deprecated
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/accessible-emoji.md}
         */
        // 'jsx-a11y/accessible-emoji': 'error',
        /**
         * Enforce lang attribute has a valid value.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md}
         */
        // 'jsx-a11y/lang': 'error',
        /**
         * Disallow aria-hidden="true" from being set on focusable elements.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md}
         */
        // 'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        /**
         * Enforce usage of onBlur over onChange on select menus for accessibility.
         * @deprecated
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-onchange.md}
         */
        // 'jsx-a11y/no-onchange': 'error',
        /**
         * Enforces using semantic DOM elements over the ARIA role property.
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md}
         */
        // 'jsx-a11y/prefer-tag-over-role': 'error',
        /**
         * Enforce all elements that require alternative text have meaningful information to relay back to end user.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md}
         */
        // 'jsx-a11y/alt-text': 'off',
        /**
         * Enforce <a> text to not exactly match "click here", "here", "link", or "a link".
         * @config recommended
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md}
         */
        // 'jsx-a11y/anchor-ambiguous-text': 'off',
        /**
         * Enforce all anchors to contain accessible content.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md}
         */
        // 'jsx-a11y/anchor-has-content': 'off',
        /**
         * Enforce all anchors are valid, navigable elements.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md}
         */
        // 'jsx-a11y/anchor-is-valid': 'off',
        /**
         * Enforce elements with aria-activedescendant are tabbable.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md}
         */
        // 'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
        /**
         * Enforce all aria-* props are valid.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md}
         */
        // 'jsx-a11y/aria-props': 'off',
        /**
         * Enforce ARIA state and property values are valid.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md}
         */
        // 'jsx-a11y/aria-proptypes': 'off',
        /**
         * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md}
         */
        // 'jsx-a11y/aria-role': 'off',
        /**
         * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md}
         */
        // 'jsx-a11y/aria-unsupported-elements': 'off',
        /**
         * Enforce that autocomplete attributes are used correctly.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md}
         */
        // 'jsx-a11y/autocomplete-valid': 'off',
        /**
         * Enforce a clickable non-interactive element has at least one keyboard event listener.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md}
         */
        // 'jsx-a11y/click-events-have-key-events': 'off',
        /**
         * Enforce that a control (an interactive element) has a text label.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md}
         */
        // 'jsx-a11y/control-has-associated-label': 'off',
        /**
         * Enforce heading (h1, h2, etc) elements contain accessible content.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md}
         */
        // 'jsx-a11y/heading-has-content': 'off',
        /**
         * Enforce <html> element has lang prop.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md}
         */
        // 'jsx-a11y/html-has-lang': 'off',
        /**
         * Enforce iframe elements have a title attribute.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md}
         */
        // 'jsx-a11y/iframe-has-title': 'off',
        /**
         * Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md}
         */
        // 'jsx-a11y/img-redundant-alt': 'off',
        /**
         * Enforce that elements with interactive handlers like onClick must be focusable.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md}
         */
        // 'jsx-a11y/interactive-supports-focus': 'off',
        /**
         * Enforce that a label tag has a text label and an associated control.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md}
         */
        // 'jsx-a11y/label-has-associated-control': 'off',
        /**
         * Enforce that <label> elements have the htmlFor prop.
         * @config recommended
         * @config strict
         * @deprecated
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-for.md}
         */
        // 'jsx-a11y/label-has-for': 'off',
        /**
         * Enforces that <audio> and <video> elements must have a <track> for captions.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md}
         */
        // 'jsx-a11y/media-has-caption': 'off',
        /**
         * Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md}
         */
        // 'jsx-a11y/mouse-events-have-key-events': 'off',
        /**
         * Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md}
         */
        // 'jsx-a11y/no-access-key': 'off',
        /**
         * Enforce autoFocus prop is not enabled.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md}
         */
        // 'jsx-a11y/no-autofocus': 'off',
        /**
         * Enforce distracting elements are not used.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md}
         */
        // 'jsx-a11y/no-distracting-elements': 'off',
        /**
         * Interactive elements should not be assigned non-interactive roles.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md}
         */
        // 'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
        /**
         * Non-interactive elements should not be assigned mouse or keyboard event listeners.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md}
         */
        // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
        /**
         * Non-interactive elements should not be assigned interactive roles.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md}
         */
        // 'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
        /**
         * TabIndex should only be declared on interactive elements.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md}
         */
        // 'jsx-a11y/no-noninteractive-tabindex': 'off',
        /**
         * Enforce explicit role property is not the same as implicit/default role property on element.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md}
         */
        // 'jsx-a11y/no-redundant-roles': 'off',
        /**
         * Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md}
         */
        // 'jsx-a11y/no-static-element-interactions': 'off',
        /**
         * Enforce that elements with ARIA roles must have all required attributes for that role.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md}
         */
        // 'jsx-a11y/role-has-required-aria-props': 'off',
        /**
         * Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md}
         */
        // 'jsx-a11y/role-supports-aria-props': 'off',
        /**
         * Enforce scope prop is only used on <th> elements.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md}
         */
        // 'jsx-a11y/scope': 'off',
        /**
         * Enforce tabIndex value is not greater than zero.
         * @config recommended
         * @config strict
         * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md}
         */
        // 'jsx-a11y/tabindex-no-positive': 'off',
    },
});
