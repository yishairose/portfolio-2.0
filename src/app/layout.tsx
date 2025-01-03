import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto_Mono } from "next/font/google";
import { ContactProvider } from "./context/ContactContext";
import Contact from "@/components/Contact";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joshua Rose | Full Stack Web Developer",
  description: "Joshua Rose portfolio site",
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.className} flex min-h-screen flex-col antialiased`}
      >
        <Provider>
          <ContactProvider>
            <Header />
            <main className="grow">
              <section className="my-24">
                <div className="container h-full">{children}</div>
              </section>
            </main>
            <Contact />
            <Footer />
          </ContactProvider>
        </Provider>
      </body>
    </html>
  );
}
