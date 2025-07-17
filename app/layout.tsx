import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['300','400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Shakil Portfolio",
  description: "A sleek personal portfolio website powered by Next.js and Tailwind CSS, built to highlight my skills, projects, and developer journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
