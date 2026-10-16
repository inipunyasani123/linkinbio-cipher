import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"cipher","jobTitle":"Security Researcher","url":"https://linkinbio-cipher.pintuweb.id","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-cipher.pintuweb.id"),
  title: { default: "c1ph3r — Security Researcher & Pemain CTF", template: "%s — c1ph3r" },
  description: "Tautan c1ph3r, peneliti keamanan dan pemain CTF: writeup soal CTF, kebijakan pengungkapan 90 hari, jadwal seminar dan workshop, dan formulir kontak.",
  applicationName: "cipher",
  keywords: ["security researcher", "writeup ctf", "responsible disclosure", "workshop keamanan siber", "link in bio hacker"],
  authors: [{ name: "cipher" }],
  creator: "cipher",
  publisher: "cipher",
  alternates: { canonical: "https://linkinbio-cipher.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-cipher.pintuweb.id",
    siteName: "cipher",
    title: "c1ph3r — Security Researcher & Pemain CTF",
    description: "Tautan c1ph3r, peneliti keamanan dan pemain CTF: writeup soal CTF, kebijakan pengungkapan 90 hari, jadwal seminar dan workshop, dan formulir kontak.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "c1ph3r — Security Researcher & Pemain CTF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "c1ph3r — Security Researcher & Pemain CTF",
    description: "Tautan c1ph3r, peneliti keamanan dan pemain CTF: writeup soal CTF, kebijakan pengungkapan 90 hari, jadwal seminar dan workshop, dan formulir kontak.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jbmono.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=cipher" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
