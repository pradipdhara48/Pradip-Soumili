'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { wedding } from '@/lib/wedding-data'

export function RsvpFooter() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <Image
        src="/images/cover-couple.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="relative z-10 mx-auto max-w-xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70">
            Share in our joy
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-balance sm:text-5xl">
            Bless us with your presence and prayers.
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/80">
            Your presence completes our joy, and we are grateful to share this celebration with the people we love most.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {sent ? (
            <p className="mt-10 font-serif text-2xl italic">
              Thank you for the warm wishes.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                required
                defaultValue="Congratulations ❤️"
                aria-label="Congratulations"
                className="w-full rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-2xl text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Send this now
              </button>
            </form>
          )}
        </Reveal>

        <div className="mt-16 border-t border-primary-foreground/20 pt-8">
          <p className="font-serif text-3xl italic">
            {wedding.bride} <span className="text-accent">&amp;</span>{' '}
            {wedding.groom}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
            {wedding.dateLabel} · {wedding.location}
          </p>
        </div>
      </div>
    </section>
  )
}
