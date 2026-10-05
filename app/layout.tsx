import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movement — Student Transportation Operations",
  description: "Manage student journeys, control routes and understand operating costs with Movement, the platform for transportation companies, universities and schools.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
