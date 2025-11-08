import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const srcPath = path.dirname(__filename)
export const TERRAFORM_DIR = path.join(srcPath, "../../terraform")
