import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CardProvider } from "./_contexts/CardContext";

export const metadata: Metadata = {
  title: {
    template: "%s | Flashcards",
    default: "Flashcards",
  },

  description:
    "A simple flashcard app to create, organize, and study cards efficiently. Designed to help you memorize concepts faster through focused review and repetition.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CardProvider>{children}</CardProvider>
      </body>
    </html>
  );
}
