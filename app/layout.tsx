import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SplashScreen from "@/components/ui/SplashScreen";

export const metadata: Metadata = {
  title: "KUA Kecamatan Parung Panjang",
  description: "Portal Informasi & Layanan Pernikahan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        {/* <Footer /> */} 
      </body>
    </html>
  );
}