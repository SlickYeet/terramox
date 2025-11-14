import { resolve } from "path"
import dotenv from "dotenv"

dotenv.config({ path: resolve(__dirname, "../../.env") })

export { baseEnv } from "./env"
export const env = process.env
