import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Waves } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kushroom.links",
  description: "Conecte-se com o ecossistema Kushroom",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-zinc-950`}
      >
        <div className="fixed inset-0 -z-10 bg-dots pointer-events-none" />
        <Waves
          lineColor="rgba(144, 238, 144, 0.15)"
          lineWidth={1}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={0}
          waveAmpY={60}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={20}
          yGap={80}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 1,
          }}
        />
        {children}
      </body>
    </html>
  );
}
