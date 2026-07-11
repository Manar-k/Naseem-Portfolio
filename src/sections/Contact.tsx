import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconMapPin } from '@tabler/icons-react'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { Reveal } from '../components/Reveal'
import { RoleCycler } from '../components/RoleCycler'
// import { WordReveal } from '../components/WordReveal'

const WHATSAPP_URL = 'https://wa.me/966509145682'
const INSTAGRAM_URL = 'https://www.instagram.com/_abumais/'
const EMAIL = 'Naseemfilfilan@gmail.com'
const LINKEDIN = 'linkedin.com/in/naseem-filfilan'

export function Contact() {
  const { lang } = useLang()
  const content = profile[lang]
  // const lastWord = content.finale.signature.trim().split(' ').slice(-1)[0].replace(/\.$/, '')

  return (
    <footer id="contact" className="bg-surface-2 px-6 pb-10 pt-24 sm:px-10 sm:pt-32 lg:px-[72px]">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
        <h2 className="m-0 mb-2 font-display text-[clamp(24px,3vw,44px)] leading-[1.5] text-accent">
          {content.meta.name}
        </h2>
        </Reveal>
        <Reveal>
  <RoleCycler
    roles={content.meta.roles}
    className="mb-5 text-[15px] font-light font-display text-ink sm:text-lg"
  />
</Reveal>
        <Reveal>
        <h2 className="m-0 mb-6  text-[clamp(24px,3vw,44px)] leading-[1.5] text-ink/75">
          {content.finale.signature[0]} <br />
          {content.finale.signature[1]}
        </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex flex-wrap gap-2.5 sm:gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className=" bg-accent px-4 py-2.5 font-display text-[13px] font-extrabold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-[17px]"
            >
              {content.contact.emailLabel}
            </a>
            <a
              href={`https://${LINKEDIN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-display border border-ink/35 px-4 py-2.5 text-[12px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent sm:gap-2 sm:px-8 sm:py-4 sm:text-[16px]"
            >
              <IconBrandLinkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" stroke={1.75} />
              {content.contact.linkedinLabel}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-display border border-ink/35 px-4 py-2.5 text-[12px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent sm:gap-2 sm:px-8 sm:py-4 sm:text-[16px]"
            >
              <IconBrandWhatsapp className="h-3.5 w-3.5 sm:h-4 sm:w-4" stroke={1.75} />
              {content.contact.whatsappLabel}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-display border border-ink/35 px-4 py-2.5 text-[12px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent sm:gap-2 sm:px-8 sm:py-4 sm:text-[16px]"
            >
              <IconBrandInstagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" stroke={1.75} />
              {content.contact.instagramLabel}
            </a>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 text-[13px] tracking-[0.1em] text-ink/60 sm:mt-24">
          <span>
            {content.meta.name} © {new Date().getFullYear()}
          </span>
          <span className="flex items-center gap-1.5">
            <IconMapPin className="h-3.5 w-3.5" stroke={1.75} />
            {content.meta.location}
          </span>
        </div>
      </div>
    </footer>
  )
}
