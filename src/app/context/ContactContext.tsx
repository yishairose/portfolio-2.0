"use client";

import React, { createContext, useContext, useState } from "react";

interface ContactContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactContext = createContext<ContactContext | null>(null);
export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ContactContext.Provider value={{ open, setOpen }}>
      {children}
    </ContactContext.Provider>
  );
}
export default ContactProvider;

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};
