import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

import { baseEnv } from "@terramox/env"

export const env = createEnv({
  extends: [baseEnv()],
  server: {
    DATABASE_URL: z.url(),
  },
  runtimeEnv: process.env,
})
