import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "clsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header";
import { CookiesProvider } from "next-client-cookies/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChicoTech",
  description:
    "Sistema de Gerenciamento de Usuários desenvolvido para o Code Challenge do INDT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookiesProvider>
      <html lang="en">
        <body className={cn(inter.className, "h-full bg-white")}>
          <ToastContainer />
          <main className="h-full flex flex-col">
            <Header />
            <div className="px-6 py-12 lg:px-8">{children}</div>
          </main>
        </body>
      </html>
    </CookiesProvider>
  );
}
