import { Reveal } from '@/components/reveal'
import { wedding } from '@/lib/wedding-data'

const events = [wedding.ceremony, wedding.reception]

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function Details() {
  return (
    <section
      id="details"
      className="relative overflow-hidden bg-secondary/50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-foreground">
            When &amp; Where
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-balance sm:text-5xl">
            The Celebration
          </h2>
          <p className="mt-5 font-serif text-xl italic text-muted-foreground">
            {wedding.dateLabel}, {wedding.yearLabel}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 0.15}>
              <div className="group h-full rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg md:p-10">
                <span className="font-serif text-sm italic text-accent-foreground">
                  {i === 0 ? 'First' : 'Then'}
                </span>
                <h3 className="mt-2 font-serif text-3xl font-light">
                  {ev.title}
                </h3>
                <div className="my-6 h-px w-16 bg-accent/60" />
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-accent-foreground">
                      <ClockIcon />
                    </span>
                    <span className="leading-relaxed">{ev.time}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-accent-foreground">
                      <PinIcon />
                    </span>
                    <span className="leading-relaxed">
                      <span className="block font-medium text-foreground">
                        {ev.venue}
                      </span>
                      {ev.address}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/ZyzQKJZRsjBA1M326"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View on Map
          </a>
        </Reveal>
      </div>
    </section>
  )
}
