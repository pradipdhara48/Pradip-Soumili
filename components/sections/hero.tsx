'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CountdownTimer } from '@/components/countdown-timer'
import { wedding } from '@/lib/wedding-data'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <Image
        src="/images\cover-couple.JPG"
        alt="The couple embracing in a sunlit garden"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center text-primary-foreground">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-xs font-medium uppercase tracking-[0.4em] text-primary-foreground/80"
        >
          {wedding.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-6xl font-light leading-none text-balance sm:text-7xl md:text-8xl italic"
        >
          Pradip
          <span className="mx-3 italic text-accent">&amp;</span>
          Soumili
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-7 h-px w-40 origin-center bg-primary-foreground/50"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: 'easeOut' }}
          className="font-serif text-lg italic tracking-wide sm:text-xl"
        >
          {wedding.dateLabel}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: 'easeOut' }}
          className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80"
        >
          {wedding.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: 'easeOut' }}
          className="mt-10"
        >
          <CountdownTimer date={wedding.date} />
        </motion.div>
      </div>

      <motion.a
        href="#story"
        aria-label="Scroll to our story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/80"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="block h-8 w-px bg-primary-foreground/60"
        />
      </motion.a>
    </section>
  )
}
