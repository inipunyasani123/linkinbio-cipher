const SITE = "https://linkinbio-cipher.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/writeups", "/talks"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
