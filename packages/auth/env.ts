import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

import { baseEnv } from "@terramox/env"

export const env = createEnv({
  extends: [baseEnv()],
  server: {
    BETTER_AUTH_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: process.env,
})
