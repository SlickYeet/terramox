import { createEnv } from "@t3-oss/env-nextjs"

import { baseEnv } from "@terramox/env"

export const env = createEnv({
  extends: [baseEnv()],
  runtimeEnv: process.env,
})
