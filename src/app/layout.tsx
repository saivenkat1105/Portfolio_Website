import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { CommandMenu } from "@/components/layout/CommandMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Venkat Gunda - Portfolio",
  description: "Portfolio of Sai Venkat Gunda, Advanced Controls and ML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <CommandMenu />
          <div className="container mx-auto flex flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] max-w-screen-2xl">
            <Sidebar />
            <main className="flex-1 w-full px-4 md:px-8 py-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
