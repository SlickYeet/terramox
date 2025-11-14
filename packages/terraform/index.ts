import { exec } from "child_process"
import fs from "fs/promises"
import path from "path"
import { promisify } from "util"

const execAsync = promisify(exec)

export async function applyTerraform(vars: Record<string, unknown>) {
  const tempDir = path.join("./terraform-runs", `run-${Date.now()}`)
  await fs.mkdir(tempDir, { recursive: true })

  await fs.cp("./terraform", tempDir, { recursive: true })

  await fs.writeFile(
    path.join(tempDir, "terraform.auto.tfvars.json"),
    JSON.stringify(vars, null, 2)
  )

  const { stdout, stderr } = await execAsync(
    `cd ${tempDir} && terraform init && terraform apply -auto-approve`,
    { env: process.env }
  )

  if (stderr) console.error(stderr)

  await fs.rm(tempDir, { recursive: true, force: true })
  return stdout
}
