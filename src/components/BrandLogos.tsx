import * as React from "react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

interface Logo {
  name: string
  src?: string
  alt: string
  type?: "horizontal" | "square"
}

interface BrandLogosProps extends React.ComponentProps<"div"> {
  logos?: Logo[]
  variant?: "grid" | "marquee"
}

const defaultLogos: Logo[] = [
  { name: "Genesis", src: "/car-brands/genesis.svg", alt: "Genesis", type: "horizontal" },
  { name: "Porsche", src: "/car-brands/porsche.svg", alt: "Porsche", type: "horizontal" },
  { name: "BMW", src: "/car-brands/bmw.svg", alt: "BMW", type: "square" },
  { name: "Mercedes", src: "/car-brands/mercedes.svg", alt: "Mercedes-Benz", type: "horizontal" },
  { name: "Audi", src: "/car-brands/audi.svg", alt: "Audi", type: "horizontal" },
  { name: "Hyundai", src: "/car-brands/hyundai.svg", alt: "Hyundai", type: "horizontal" },
  { name: "Kia", src: "/car-brands/kia.svg", alt: "Kia", type: "horizontal" },
  { name: "Volkswagen", src: "/car-brands/volkswagen.svg", alt: "Volkswagen", type: "square" },
]

export function BrandLogos({
  logos = defaultLogos,
  variant = "grid",
  className,
  ...props
}: BrandLogosProps) {
  const LogoItem = ({ logo }: { logo: Logo }) => {
    const logoSize = logo.type === "square" ? "h-12 w-12" : "h-8 w-24"

    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-1",
          "px-2 py-1 rounded-lg",
          "transition-all duration-300",
          "group",
          "min-w-[100px]"
        )}
      >
        <div className="h-12 flex items-center justify-center">
          {logo.src ? (
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.type === "square" ? 48 : 96}
              height={logo.type === "square" ? 48 : 32}
              className={cn(
                logoSize,
                "object-contain",
                "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100",
                "transition-all duration-300"
              )}
            />
          ) : (
            <div className={cn(logoSize, "flex items-center justify-center")}>
              <span className="text-2xl">🚗</span>
            </div>
          )}
        </div>
        <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          {logo.name}
        </span>
      </div>
    )
  }

  if (variant === "marquee") {
    const displayLogos = logos

    return (
      <div className={cn("w-full", className)} {...props}>
        <Marquee pauseOnHover className="[--duration:30s]">
          {displayLogos.map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </Marquee>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
        className
      )}
      {...props}
    >
      {logos.map((logo, index) => (
        <LogoItem key={`${logo.name}-${index}`} logo={logo} />
      ))}
    </div>
  )
}
