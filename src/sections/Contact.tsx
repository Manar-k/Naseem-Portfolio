import { IconBrandLinkedin, IconMapPin } from '@tabler/icons-react'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { Reveal } from '../components/Reveal'
import { RoleCycler } from '../components/RoleCycler'
import { WordReveal } from '../components/WordReveal'

const PHONE_HREF = '+966509145682'
const EMAIL = 'Naseemfilfilan@gmail.com'
const LINKEDIN = 'linkedin.com/in/naseem-filfilan'

export function Contact() {
  const { lang } = useLang()
  const content = profile[lang]
  const lastWord = content.finale.signature.trim().split(' ').slice(-1)[0].replace(/\.$/, '')

  return (
    <footer id="contact" className="bg-surface-2 px-6 pb-10 pt-24 sm:px-10 sm:pt-32 lg:px-[72px]">
      <div className="mx-auto max-w-[1280px]">
        <WordReveal
          as="h2"
          text={content.finale.signature}
          className="m-0 mb-6 block font-display text-[clamp(32px,5.2vw,80px)] font-black leading-[1.35] text-ink"
          wordClassName="text-ink"
          highlightWord={(word) => word.replace(/\.$/, '') === lastWord}
          highlightClassName="text-accent"
          stagger={0.05}
        />

                  <Reveal>
  <RoleCycler
    roles={content.meta.roles}
    className="mb-5 text-[15px] font-light text-ink/75 sm:text-lg"
  />
</Reveal>

        {/* <Reveal delay={0.06}>
          <div className="mb-14 flex flex-col gap-1.5 text-[clamp(14px,1.2vw,17px)] font-light leading-[1.9] text-ink/85 sm:mb-16">
            {content.meta.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </Reveal> */}

        <Reveal delay={0.12}>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className=" bg-accent px-8 py-4 font-display text-[17px] font-extrabold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              {content.contact.emailLabel}
            </a>
            <a
              href={`https://${LINKEDIN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2  border border-ink/35 px-8 py-4 text-[16px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <IconBrandLinkedin className="h-4 w-4" stroke={1.75} />
              {content.contact.linkedinLabel}
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              dir="ltr"
              className=" border border-ink/35 px-8 py-4 text-[16px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              +966 50 914 5682
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
