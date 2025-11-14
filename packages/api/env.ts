import { createEnv } from "@t3-oss/env-core"

import { baseEnv } from "@terramox/env"

export const env = createEnv({
  extends: [baseEnv()],
  server: {},
  runtimeEnv: process.env,
})
