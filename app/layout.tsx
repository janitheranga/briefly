import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Briefly - AI-Powered Note Summarization",
  description:
    "Transform your lengthy notes into concise, actionable summaries with advanced AI. Perfect for students, professionals, and busy individuals.",
  keywords: [
    "note summarization",
    "AI",
    "productivity",
    "note-taking",
    "summary",
  ],
  authors: [{ name: "Briefly Team" }],
  openGraph: {
    title: "Briefly - AI-Powered Note Summarization",
    description:
      "Transform your lengthy notes into concise, actionable summaries with advanced AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ff5e00" />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
