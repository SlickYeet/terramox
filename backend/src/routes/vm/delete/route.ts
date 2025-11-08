import { exec } from "child_process"
import { Router } from "express"

import { TERRAFORM_DIR } from "@/constants"

const router = Router()

router.post("/", async (req, res) => {
  const { name } = req.body as { name: string }

  exec(
    `cd ${TERRAFORM_DIR} && terraform destroy -auto-approve -var="vm_name=${name}`,
    (error, stdout, stderr) => {
      if (error) return res.status(500).json({ error: stderr })
      res.json({ output: stdout })
    }
  )
})

export default router
