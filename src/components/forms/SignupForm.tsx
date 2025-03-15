"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "../ui/checkbox"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Button } from "../ui/button"

const formSchema = z.object({
  username: z
  .string()
  .nonempty("Email is required")
  .email("Invalid email address"),

  password: z
  .string()
  .nonempty("Password is required") // Ensures the password is not empty
  .min(8, "Password must be at least 8 characters") // Minimum length
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // Uppercase
  .regex(/[a-z]/, "Password must contain at least one lowercase letter") // Lowercase
  .regex(/[0-9]/, "Password must contain at least one number") // Number
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"), // Special character
  acceptTerms: z.boolean().default(false).optional(),
})

export function SignupForm() {
  const [isHidden, setIsHidden] = useState(true)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      acceptTerms: false,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const showHidePwdHandler = () => {
    setIsHidden(!isHidden)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <div className="relative">
                <button type='button'
                  onClick={showHidePwdHandler}
                  className='absolute h-12 w-12 top-1/2 -translate-y-1/2 right-0 text-gray-600 grid place-content-center rounded-r-lg' tabIndex={-1}>{isHidden? <FaEye />:<FaEyeSlash />}</button>
                <FormControl>
                  <Input
                  type={`${isHidden? 'password': 'text'}`}
                  {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>
                Accept terms and conditions
              </FormLabel>
            </FormItem>
          )}
        />

        <Button className="w-full bg-purple-500 hover:bg-purple-400" type="submit">Sign In</Button>
          
      </form>
    </Form>
  )
}
