# TODOs

- [ ] Per request `tmp` directories
- [ ] Run `terraform plan` and `terraform apply`
- [ ] Move to `tRPC` from `express`
- [ ] Create Terraform worker in place of backend
  - [ ] Terraform locking/state
  - [ ] VM status tracking
  - [ ] Templates
- [ ] Security
  - Requiring an API key or simple JWT
  - Role-based limits
  - CORS restrictions
- [ ] Error handling + async jobs
  - Wrap Terraform calls in `try/catch` blocks for typed errors
  - Async job tracking via `BullMQ`, or a JSON file/db that stores job status
- [ ] Global typed env
