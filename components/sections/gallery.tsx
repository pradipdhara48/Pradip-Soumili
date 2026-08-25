import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { wedding } from '@/lib/wedding-data'

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-foreground">
            Moments
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-balance sm:text-5xl">
            A Glimpse of Us
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A few of our favorite frames — with many more to come after the big
            day.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {wedding.gallery.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 0.1}
              className={i === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <div
                className={`group relative overflow-hidden rounded-lg shadow-md ${
                  i === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'
                }`}
              >
                <Image
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}

          {/* Coming soon — Google Drive placeholder */}
          <Reveal delay={0.3}>
            <div className="flex aspect-square flex-col items-center justify-center rounded-lg border border-dashed border-accent/60 bg-secondary/60 p-5 text-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="mb-3 h-7 w-7 text-accent-foreground"
                aria-hidden="true"
              >
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
              <p className="font-serif text-lg italic text-foreground">
                Coming Soon
              </p>
              <p className="mt-1 text-[0.7rem] leading-relaxed text-muted-foreground">
                {wedding.driveNote}
              </p>
              <span className="mt-3 cursor-not-allowed rounded-full border border-border px-4 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                Google Drive link
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
