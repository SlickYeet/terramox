import { db, user } from "@terramox/db"

import { CreateVM } from "@/components/forms/create-vm"

export default async function HomePage() {
  await db.insert(user).values({
    id: "test",
    name: "Test User",
    email: "test@example.com",
  })

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Welcome to Terramox!</h1>

      <CreateVM />
    </div>
  )
}
