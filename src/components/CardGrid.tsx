import { Reveal } from './Reveal'

export interface CardGridItem {
  image: string
  alt: string
  description: string
  boldPrefix?: string
}

interface CardGridProps {
  items: CardGridItem[]
  className?: string
}

/** Grid of image + description cards (same card look as Projects.tsx), each revealed on scroll. */
export function CardGrid({ items, className = '' }: CardGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {items.map((item, index) => (
        <Reveal key={index} delay={(index % 3) * 0.08}>
          <div className="group h-full overflow-hidden border border-ink/20 transition-colors duration-300 hover:border-accent hover:bg-accent">
            <img src={item.image} alt={item.alt} className="block w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="p-6 sm:p-8">
              <p className="m-0 text-[clamp(11px,1.4vw,15px)] leading-[1.9] text-ink/75 group-hover:text-white/90">
  {item.boldPrefix && <span className="font-body font-bold text-ink group-hover:text-white">{item.boldPrefix} </span>}
  {item.description}
</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}