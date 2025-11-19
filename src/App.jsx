import React from 'react'
import { motion } from 'framer-motion'
import FloatingShapes from './components/FloatingShapes'
import Section from './components/Section'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const styles = {
    primary: 'bg-[#6B8C7A] text-white hover:brightness-110 hover:shadow-[0_8px_24px_rgba(107,140,122,0.35)] focus-visible:ring-[#6B8C7A]',
    secondary: 'bg-transparent text-[#4a4742] hover:text-[#2e2b27] underline underline-offset-4'
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

function Wave({ flip = false, color = '#F5F0E9' }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`absolute left-0 right-0 ${flip ? 'top-0 rotate-180' : 'bottom-0'} w-full h-20`}>
      <path d="M0,32 C240,96 480,0 720,32 C960,64 1200,64 1440,32 L1440,80 L0,80 Z" fill={color} />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E9] text-[#3d3a35]">
      {/* Soft background shapes */}
      <div className="fixed inset-0 -z-10">
        <FloatingShapes />
      </div>

      {/* HERO */}
      <header className="relative">
        <Section id="home" className="pt-28 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-none"
            >
              <div className="relative mx-auto aspect-[4/5] max-w-md rounded-[28px] overflow-hidden shadow-xl bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E9] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 text-sm text-[#5a5650] bg-[#F5F0E9]/80 backdrop-blur rounded-full px-4 py-2">
                  Photo of Monir goes here
                </div>
              </div>
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#2f2c27]">
                Come home to your calm, your worth, your self.
              </h1>
              <p className="text-lg text-[#5a5650]">
                I’m Monir. I guide sensitive, self-aware people through EFT tapping, gentle spiritual coaching, and honest self-inquiry — so your nervous system can exhale and old patterns can finally loosen their grip.
              </p>
              <ul className="space-y-2 text-[#524e47]">
                <li>• Feel steadier and more present in daily life</li>
                <li>• Release old emotional baggage and self-judgment</li>
                <li>• Build real self-worth and inner safety</li>
                <li>• Move forward with what actually matters</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button onClick={() => document.getElementById('free-call').scrollIntoView({ behavior: 'smooth' })}>
                  Book a Free Clarity Call
                </Button>
                <button onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth' })} className="text-[#4a4742] hover:text-[#2f2c27] underline underline-offset-4">
                  Learn more about EFT and my approach
                </button>
              </div>
              <p className="text-sm text-[#6a655e]">A 20-minute online call to explore what you need right now.</p>
            </motion.div>
          </div>
        </Section>
        <Wave />
      </header>

      {/* IS THIS YOU */}
      <main>
        <Section id="pain" className="bg-white rounded-t-[32px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Is this you?</h2>
          <p className="text-[#5a5650] max-w-3xl">You feel deeply. You notice everything. Your brain runs like 30 tabs at once. You’ve read the books and tried to “be positive,” yet the same patterns keep looping. If that’s you, you’re not broken — you’re sensitive in a noisy world.</p>
          <ul className="grid sm:grid-cols-2 gap-3 mt-8 text-[#524e47]">
            <li>• You wake up already tense, mind buzzing.</li>
            <li>• You’re kind to others but hard on yourself.</li>
            <li>• You swing between overthinking and checking out.</li>
            <li>• You’ve done lots of self-help but still feel stuck.</li>
            <li>• Noise, crowds, or messy plans drain you fast.</li>
            <li>• Part of you knows you’re meant for more peace.</li>
          </ul>
        </Section>
        <div className="relative"><Wave flip color="#FFFFFF" /></div>

        {/* WHAT I OFFER */}
        <Section id="offer" className="bg-[#F5F0E9]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What I offer</h2>
            <p className="text-[#5a5650]">We combine three threads: EFT tapping to release emotional charge, nervous system regulation so your body feels safe again, and a simple spiritual lens — your patterns are invitations, not punishments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: '1:1 EFT & Healing Session (online)',
                desc: 'A focused 60-minute session to meet what’s here, tap with care, and leave with a calmer body and a clearer next step.',
                cta: 'Book now'
              },
              {
                title: 'Deep-Dive Transformation (6 weeks)',
                desc: 'Weekly sessions + gentle practices between calls. We untangle core patterns and grow steady self-worth from the inside out.',
                cta: 'Explore'
              },
              {
                title: 'ADHD/Overwhelm Reset',
                desc: 'A special session for busy minds: calm the noise, ground your body, and set up a simple daily tapping ritual.',
                cta: 'Learn more'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className="rounded-3xl bg-white/80 backdrop-blur shadow-sm border border-[#e8e2d9] p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-[#2f2c27]">{card.title}</h3>
                <p className="text-[#5a5650] mt-2 flex-1">{card.desc}</p>
                <Button className="mt-4 self-start">{card.cta}</Button>
              </motion.div>
            ))}
          </div>
        </Section>
        <div className="relative"><Wave /></div>

        {/* HOW IT WORKS */}
        <Section id="how" className="bg-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">How a session works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '1', t: 'We clarify', d: 'We name what feels heavy or loud right now, simply and honestly.' },
              { n: '2', t: 'We tap', d: 'Gentle EFT to release emotional charge while staying grounded.' },
              { n: '3', t: 'We integrate', d: 'We anchor new beliefs, inner safety, and kinder self-talk.' },
              { n: '4', t: 'Next steps', d: 'You get simple practices or a tiny homework ritual you can actually do.' }
            ].map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 * i }} className="rounded-3xl border border-[#eee6db] p-6 bg-[#F9F6F1]">
                <div className="w-10 h-10 rounded-full bg-[#6B8C7A] text-white flex items-center justify-center font-semibold">{s.n}</div>
                <h3 className="mt-3 font-semibold text-lg text-[#2f2c27]">{s.t}</h3>
                <p className="text-[#5a5650]">{s.d}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-[#6a655e] mt-6">We go at your pace. You stay in control at all times.</p>
        </Section>
        <div className="relative"><Wave flip color="#FFFFFF" /></div>

        {/* ABOUT */}
        <Section id="about" className="bg-[#F5F0E9]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative mx-auto aspect-square max-w-sm rounded-[28px] overflow-hidden shadow bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">About Monir</h2>
              <p className="text-[#5a5650] mt-4">I’m a sensitive man who spent years trying to “fix” myself. I know the ache of not-enough, the fast brain, the tired heart. Over time, through tapping, spiritual practice, and a lot of gentleness, I found steadier ground. Now I help others find theirs.</p>
              <ul className="mt-4 space-y-2 text-[#524e47]">
                <li>• Empathy first. No judgment, ever.</li>
                <li>• Humor and lightness when it helps.</li>
                <li>• Deep respect for your pace and your path.</li>
              </ul>
              <p className="mt-4 italic text-[#4a4742]">I don’t fix you. I walk with you while you remember who you are.</p>
            </div>
          </div>
        </Section>
        <div className="relative"><Wave /></div>

        {/* TESTIMONIALS */}
        <Section id="testimonials" className="bg-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Client words</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sofia, 31', quote: 'I feel calm in situations that used to spiral me. I finally sleep.' },
              { name: 'Armin, 38', quote: 'For the first time I felt seen and safe with my emotions.' },
              { name: 'Leah, 27', quote: 'Small daily shifts added up. Less anxiety. More choice. More me.' }
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 * i }} className="rounded-3xl border border-[#eee6db] p-6 bg-[#F9F6F1]">
                <p className="text-[#2f2c27]">“{t.quote}”</p>
                <p className="mt-3 text-sm text-[#6a655e]">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </Section>
        <div className="relative"><Wave flip color="#FFFFFF" /></div>

        {/* FREE RESOURCE */}
        <Section id="free-call" className="bg-[#F5F0E9]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Free resource • Start here</h2>
              <p className="text-[#5a5650] mt-3">Get my 5-minute EFT ritual to calm your nervous system. A simple audio you can tap along with when life gets loud.</p>
              <p className="text-sm text-[#6a655e] mt-2">I’ll send occasional helpful emails. No spam. Unsubscribe anytime.</p>
            </div>
            <form className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-[#e8e2d9] shadow-sm">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label className="text-sm text-[#6a655e] mb-1">Name</label>
                  <input type="text" placeholder="Your name" className="rounded-xl border border-[#e8e2d9] px-4 py-3 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#6B8C7A]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-[#6a655e] mb-1">Email</label>
                  <input type="email" placeholder="you@example.com" className="rounded-xl border border-[#e8e2d9] px-4 py-3 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#6B8C7A]" />
                </div>
              </div>
              <Button className="mt-4 w-full">Send me the ritual</Button>
              <p className="text-xs text-[#6a655e] mt-2">By subscribing you agree to a friendly privacy policy.</p>
            </form>
          </div>
        </Section>
        <div className="relative"><Wave /></div>

        {/* FAQ */}
        <Section id="faq" className="bg-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Practical info & FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'What is EFT tapping?', a: 'It’s a gentle technique where we tap on acupressure points while naming how we feel. It helps the body release stress and old emotional charge.' },
              { q: 'Do I need experience with spirituality?', a: 'No. We keep things simple and grounded. If spiritual language helps you, we use it. If not, we use plain words.' },
              { q: 'Can I work with you if I have ADHD?', a: 'Yes. We work with your nervous system, not against it. We keep sessions structured and kind.' },
              { q: 'Are sessions online or in‑person?', a: 'Sessions are online for now, so you can join from anywhere.' },
              { q: 'What if I get emotional during a session?', a: 'You stay in control. We go slowly, we ground often, and we stop anytime you want.' },
              { q: 'How many sessions do I need?', a: 'Some people feel a shift in one session. Deeper patterns usually need a short series. We decide together.' }
            ].map((f, i) => (
              <motion.div key={f.q} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.04 * i }} className="rounded-3xl border border-[#eee6db] p-6 bg-[#F9F6F1]">
                <h3 className="font-semibold text-lg text-[#2f2c27]">{f.q}</h3>
                <p className="text-[#5a5650] mt-2">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#F5F0E9] pt-10 pb-16">
        <Section className="py-0">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div>
              <h4 className="font-semibold text-[#2f2c27]">Contact</h4>
              <p className="text-[#5a5650]">hello@monirheals.com · Based in EU (online worldwide)</p>
            </div>
            <div className="text-sm text-[#6a655e] flex gap-4 md:justify-center">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
            <div className="text-sm text-[#6a655e] md:text-right">
              <p>In case nobody told you today: you are already enough.</p>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  )
}
