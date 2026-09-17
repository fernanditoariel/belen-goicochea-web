import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://belen-goicochea-web.vercel.app"),
  title: {
    default: "Belén Goicochea | Educación Física, Pilates y Natación",
    template: "%s | Belén Goicochea",
  },
  description:
    "Clases de Personal Training, Pilates Reformer y natación con Belén Goicochea en Bahía Blanca. Consultá disponibilidad por WhatsApp.",
  applicationName: "Belén Goicochea",
  keywords: [
    "Belén Goicochea",
    "profesora de educación física Bahía Blanca",
    "Pilates Reformer Bahía Blanca",
    "personal trainer Bahía Blanca",
    "natación Bahía Blanca",
  ],
  authors: [{ name: "Belén Goicochea" }],
  creator: "Belén Goicochea",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Belén Goicochea",
    title: "Belén Goicochea | Movimiento, confianza y bienestar",
    description:
      "Personal Training, Pilates Reformer y natación en Bahía Blanca.",
  },
  twitter: {
    card: "summary",
    title: "Belén Goicochea | Movimiento, confianza y bienestar",
    description:
      "Personal Training, Pilates Reformer y natación en Bahía Blanca.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123c43",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
