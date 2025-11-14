import baseConfig from "../prettier.config.mjs"

/**
 * @type {import('prettier').Config &
 *        import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const config = {
  ...baseConfig,
  arrowParens: "always",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  trailingComma: "es5",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "",
    "@terramox/(.*)",
    "",
    "^@/",
    "",
    "^[.][.]/",
    "^[.]/",
  ],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
}

export default config
