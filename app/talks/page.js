import { PROFIL, SITE } from '@/lib/cipher';
import { hariIniWIB } from '@/lib/waktu';
import Terminal from '../components/Terminal';
import FormKontak from '../components/FormKontak';
import DaftarTalks from '../components/DaftarTalks';

export const metadata = {
  title: 'Talks & Kontak',
  description: 'Jadwal seminar dan workshop c1ph3r tentang race condition, metadata, dan menulis laporan bug, plus formulir kontak untuk laporan dan undangan bicara.',
  alternates: { canonical: `${SITE}/talks` },
};

export default function Talks() {
  return (
    <Terminal perintah="cat talks.md">
      <h1 className="mt-4 text-2xl font-bold text-fosfor"># talks.md</h1>
      <DaftarTalks hari={hariIniWIB()} />

      <section id="kontak" aria-labelledby="kontak-h" className="mt-10 scroll-mt-6">
        <p><span className="text-dim">c1ph3r@links</span><span className="text-fosfor/70">:~$</span> ./contact --encrypt</p>
        <h2 id="kontak-h" className="mt-3 text-xl font-bold text-fosfor"># Kontak</h2>
        <p className="mt-1 text-fosfor/80">Untuk laporan kerentanan, undangan bicara, atau pertanyaan CTF. Sidik jari kunci: {PROFIL.kunci}</p>
        <FormKontak />
      </section>
      <p className="mt-8 text-[11px] text-fosfor/75"># acara di halaman ini fiktif — contoh purwarupa desain</p>
    </Terminal>
  );
}
