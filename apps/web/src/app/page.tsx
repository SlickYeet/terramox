import { CreateVM } from "@/components/forms/create-vm"

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Welcome to Terramox!</h1>

      <CreateVM />
    </div>
  )
}
