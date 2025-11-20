import type { Config } from "prettier";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const config: Config = {
    /**
     * Use curious ternaries, with the question mark after the condition.
     * @see {@link https://prettier.io/docs/options#experimental-ternaries}
     */
    experimentalTernaries: true,

    /**
     * When binary expressions wrap lines, print operators at the start of new lines.
     * @see {@link https://prettier.io/docs/options#experimental-operator-position}
     */
    experimentalOperatorPosition: "start",

    /**
     * Specify the line length that the printer will wrap on.
     * @see {@link https://prettier.io/docs/options#print-width}
     */
    printWidth: 100,

    /**
     * Specify the number of spaces per indentation-level.
     * @see {@link https://prettier.io/docs/options#tab-width}
     */
    tabWidth: 4,

    /**
     * Indent lines with spaces instead of tabs.
     * @see {@link https://prettier.io/docs/options#tabs}
     */
    useTabs: false,

    /**
     * Add a semicolon at the end of every statement.
     * @see {@link https://prettier.io/docs/options#semicolons}
     */
    semi: true,

    /**
     * Use single quotes instead of double quotes.
     * @see {@link https://prettier.io/docs/options#quotes}
     */
    singleQuote: true,

    /**
     * If at least one property in an object requires quotes, quote all properties.
     * @see {@link https://prettier.io/docs/options#quote-props}
     */
    quoteProps: "consistent",

    /**
     * Use double quotes instead of single quotes in JSX.
     * @see {@link https://prettier.io/docs/options#jsx-quotes}
     */
    jsxSingleQuote: false,

    /**
     * Trailing commas wherever possible.
     * @see {@link https://prettier.io/docs/options#trailing-commas}
     */
    trailingComma: "all",

    /**
     * Print spaces between brackets in object literals.
     * @see {@link https://prettier.io/docs/options#bracket-spacing}
     */
    bracketSpacing: true,

    /**
     * Keep as multi-line, if there is a newline between the opening brace and first property.
     * @see {@link https://prettier.io/docs/options#object-wrap}
     */
    objectWrap: "preserve",

    /**
     * Put the `>` of a multi-line JSX element alone on the next line.
     * @see {@link https://prettier.io/docs/options#bracket-line}
     */
    bracketSameLine: false,

    /**
     * Always include parens.
     * @see {@link https://prettier.io/docs/options#arrow-function-parentheses}
     */
    arrowParens: "always",

    /**
     * Line Feed only (\n), common on Linux and macOS as well as inside git repos.
     * @see {@link https://prettier.io/docs/options#end-of-line}
     */
    endOfLine: "lf",

    /**
     * Do not enforce single attribute per line.
     * @see {@link https://prettier.io/docs/options#single-attribute-per-line}
     */
    singleAttributePerLine: false,

    /**
     * Plugins to use with Prettier.
     * @see {@link https://prettier.io/docs/en/plugins.html}
     */
    plugins: [require.resolve("@jpp/prettier-plugin-packagejson")],
};

export default config;
