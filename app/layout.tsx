import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Forge",
  description:
    "Unlock your productivity potential with Note Forge, a powerful tool for organizing notes, tasks, and projects.",
  keywords:
    "Note Forge, productivity, organization, notes, tasks, projects, management",
  authors: { name: "Ayush Seth" },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-small.svg",
        href: "/logo-small.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-small-dark.svg",
        href: "/logo-small-dark.svg",
        sizes: "64x64",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="nf-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
