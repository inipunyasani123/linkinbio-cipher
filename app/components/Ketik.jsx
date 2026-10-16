'use client';

import { useEffect, useState } from 'react';

// Perintah yang "diketik" di prompt pertama — murni hiasan. Teks lengkap sudah ada
// di HTML (dan untuk pembaca layar); bila gerak dikurangi, tidak ada animasi.
export default function Ketik({ teks }) {
  const [n, setN] = useState(teks.length);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let i = 0;
    setN(0);
    const t = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= teks.length) clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, [teks]);
  return (
    <>
      <span aria-hidden="true">{teks.slice(0, n)}</span>
      <span className="sr-only">{teks}</span>
    </>
  );
}
