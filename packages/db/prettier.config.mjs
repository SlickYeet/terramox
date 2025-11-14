import packageConfig from "../prettier.config.mjs"

/**
 * @type {import('prettier').Config &
 *        import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const config = {
  ...packageConfig,
}

export default config
