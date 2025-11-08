import express from "express"

import createVMRouter from "@/routes/vm/create/route"

const app = express()
app.use(express.json())

app.use("/vm/create", createVMRouter)

app.listen(3000, () => console.log("Terraform API listening on port 3000"))
