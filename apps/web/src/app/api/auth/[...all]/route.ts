import { toNextJsHandler } from "better-auth/next-js"

import { auth } from "@terramox/auth"

export const { GET, POST } = toNextJsHandler(auth.handler)
