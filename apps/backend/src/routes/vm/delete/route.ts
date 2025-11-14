import { exec } from "child_process"
import { Router } from "express"

import { TERRAFORM_DIR } from "@/constants"

const router: Router = Router()

router.post("/", async (req, res) => {
  const { name } = req.body as { name: string }

  exec(
    `cd ${TERRAFORM_DIR} && terraform destroy -auto-approve -var="vm_name=${name}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing terraform destroy: ${error.message}`)
        return res.status(500).json({ error: stderr })
      }
      console.log(`Terraform destroy stdout: ${stdout}`)
      return res.json({ output: stdout })
    }
  )

  console.log(`Deleting VM: ${name}`)
})

export default router
