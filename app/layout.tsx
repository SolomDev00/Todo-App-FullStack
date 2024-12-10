import { ClerkProvider, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Todo App with Next.js",
  description: "Create a full stack todo application with Next.js, TypeScript, Prisma, and MongoDB",
  keywords: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Server Actions", "Server Components"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider afterSignInUrl="/" afterSignUpUrl="/">
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <SignedOut>
              <RedirectToSignIn redirectUrl="/sign-in" />
            </SignedOut>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}