"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import { createVM } from "@/actions/vm"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreateVMRequestSchema } from "@/validators"

export function CreateVM() {
  const form = useForm<z.infer<typeof CreateVMRequestSchema>>({
    resolver: zodResolver(CreateVMRequestSchema),
    defaultValues: {
      name: "",
      cpu: 1,
      memory: 1024,
    },
  })

  async function onSubmit(values: z.infer<typeof CreateVMRequestSchema>) {
    await createVM(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-xs space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>VM Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter VM name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Core Count</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="Enter CPU count" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="memory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Memory (MB)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="Enter memory size"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full cursor-pointer">
          Create VM
        </Button>
      </form>
    </Form>
  )
}
