import dotenv from "dotenv"

dotenv.config({ path: require.resolve("../../.env") })

export const env = process.env
export { baseEnv } from "./env"
