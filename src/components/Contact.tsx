"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useContact } from "@/app/context/ContactContext";

export default function Contact() {
  const { open, setOpen } = useContact();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <div className="mt-16 max-w-2xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl text-yellow-600">Get In Touch</h1>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-yellow-600">
                  Name
                </Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-yellow-600">
                  Name
                </Label>
                <Label htmlFor="email" className="text-yellow-600">
                  Email
                </Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-yellow-600">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="bg-yellow-600/80 hover:bg-yellow-600/60"
              >
                Send
              </Button>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
