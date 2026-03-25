import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "New Bee University",
    template: "%s | New Bee University",
  },
  description: "In New Bee We Trust. 欧洲顶级虚空学术殿堂。",
  keywords: [
    "nbu",
    "new bee university",
    "New Bee",
    "牛逼大学",
    "新蜜蜂大学",
    "纽必大学",
    "虚空大学",
  ],
  openGraph: {
    title: "New Bee University",
    description: "In New Bee We Trust. 欧洲顶级虚空学术殿堂。",
    url: "https://nb.edu.pl",
    images: [
      {
        url: "https://nb.edu.pl/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "New Bee University",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://nb.edu.pl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <main className="grow">
              <Navbar />
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
