'use client';

import { talks } from '@/lib/cipher';
import useHariIni from './useHariIni';

export default function DaftarTalks({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ol className="mt-6 space-y-5">
      {talks(hari).map((t) => (
        <li key={t.judul} className="border-l-2 border-fosfor/30 pl-4">
          <p className="text-xs text-fosfor/75">{t.tanggal} · {t.durasi}</p>
          <h2 className="mt-1 text-lg font-bold text-fosfor">{t.judul}</h2>
          <p className="text-fosfor/80">{t.acara}</p>
          <p className="mt-1 text-fosfor/90">&gt; {t.ringkas}</p>
        </li>
      ))}
    </ol>
  );
}
