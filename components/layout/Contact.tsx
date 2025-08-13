"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast, Toaster } from "sonner";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .email({
      message: "Please enter a valid email address",
    })
    .min(2),
  message: z.string().min(2, {
    message: "Write you text here.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit() {
    return toast.success("Message send successfully ");
  }
  return (
    <main className="my-40">
      <h2 className="text-5xl font-bold text-zinc-800 leading-14 text-center w-fit m-auto">
        Get in touch
      </h2>
      <div className="m-auto mt-10 md:w-lg w-96">
        <Toaster richColors/>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 grid"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your message" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={"default"}
              size={"lg"}
              type="submit"
              className="hover:cursor-pointer"
            >
              Send message
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
