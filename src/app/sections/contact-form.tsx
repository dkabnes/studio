"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

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
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSending(true);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };
    
    emailjs.send(
      'service_kg29y03', 
      'template_yq8ggtb', 
      templateParams, 
      '_qne4GtLqRoxmHJ4C'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I will get back to you shortly.",
        });
        form.reset();
      }, (err) => {
        console.log('FAILED...', err);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request. Please try again.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <Card className="relative border-t-4 border-purple-400 shadow-lg">
      <CardHeader className="items-center text-center">
        <div className="p-4 bg-purple-100 rounded-full mb-2">
            <Send className="h-8 w-8 text-purple-600 -rotate-45 translate-x-1" />
        </div>
        <h3 className="text-2xl font-bold">Send a Message</h3>
        <p className="text-muted-foreground">I'd love to hear from you. Let's start a conversation.</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} disabled={isSending} />
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
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@company.com" {...field} disabled={isSending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject *</FormLabel>
                  <FormControl>
                    <Input placeholder="What would you like to discuss?" {...field} disabled={isSending} />
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
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project, opportunity, or any questions you have..."
                      className="min-h-[120px]"
                      {...field}
                      disabled={isSending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSending}>
              {isSending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
