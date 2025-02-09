"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest investment insights and portfolio updates.",
    })
    form.reset()
  }

  return (
    <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
      <CardHeader className="text-white">
        <CardTitle>Investment Newsletter</CardTitle>
        <CardDescription className="text-gray-300">
          Get exclusive insights on our portfolio companies and investment opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter your email" 
                        {...field} 
                        className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <Button 
                        type="submit"
                        className="bg-white text-purple-900 hover:bg-gray-100"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
