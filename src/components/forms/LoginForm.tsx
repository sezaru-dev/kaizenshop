"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
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
import { useModalStore } from "@/store/modal-store"
import { useUserStore } from "@/store/user-store"

const formSchema = z.object({
  email: z
  .string()
  .nonempty("Email is required")
  .email("Invalid Email Address"),

  password: z
  .string()
  .nonempty("Password is required"),

})

export function LoginForm() {
  const closeLoginModal = useModalStore((state) => state.closeLoginModal)
  const setUser = useUserStore((state) => state.setUser)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "user@email.com",
      password: "thisisatest",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const mockEmail = "user@email.com"
    const mockPassword = "thisisatest"
    if (values.email === mockEmail && values.password === mockPassword) {
      setUser({
        id:'81h3498h',
        email: "user@email.com",
        role: "user"
      })
      toast.success("Sign-In success")
      closeLoginModal()
    }else{
      toast.error('Sign-In failed')
    }
    /* console.log(values) */
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="sample@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button className="w-full bg-purple-500 hover:bg-purple-400" type="submit">Login</Button>
      </form>
    </Form>
  )
}
