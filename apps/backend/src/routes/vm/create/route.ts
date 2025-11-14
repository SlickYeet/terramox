import { exec } from "child_process"
import fs from "fs/promises"
import { Router } from "express"

import { TERRAFORM_DIR } from "@/constants"
import type { CreateResourceRequest } from "@/validators/requests"

const router = Router()

router.post("/", async (req, res) => {
  const { name, cpu, memory } = req.body as CreateResourceRequest

  await fs.writeFile(
    `${TERRAFORM_DIR}/vars.auto.tfvars.json`,
    JSON.stringify({ vm_name: name, cpu, memory }, null, 2)
  )

  exec(
    `cd ${TERRAFORM_DIR} && terraform apply -auto-approve`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing terraform apply: ${error.message}`)
        return res.status(500).json({ error: stderr })
      }
      console.log(`Terraform apply stdout: ${stdout}`)
      res.status(200).json({ output: stdout })
    }
  )

  console.log(`Creating VM: ${name} with ${cpu} CPU and ${memory} MB memory`)
})

export default router
