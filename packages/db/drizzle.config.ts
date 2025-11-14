import { env } from "@terramox/env"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["frontend_*"],
})
