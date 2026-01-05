import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CardProvider } from "./_contexts/CardContext";
import Header from "@/components/shared/header/Header";
import Container from "@/components/shared/Container";
import { Toaster } from "sonner";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CardProvider>
          <Container>
            <Header />
            {children}
          </Container>
        </CardProvider>
        <Toaster
          position="top-left"
          richColors
          expand={true}
          toastOptions={{
            style: {
              fontSize: "16px",
              borderRadius: "999px",
              padding: "10px",
              border: "1px solid #2e1401",
              boxShadow: "0px 3px 8px 0px #2e1401, 2px 2px 0px 0px #2e1401",
            },
            closeButton: true,
          }}
        />
      </body>
    </html>
  );
}
