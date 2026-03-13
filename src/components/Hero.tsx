import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { typograf } from "@/lib/typograf"
import { BenefitsList } from "@/components/BenefitsList"
import { CTAButton } from "@/components/CTAButton"
import { BrandLogos } from "@/components/BrandLogos"
import { TrustBadge } from "@/components/TrustBadge"
import { PointerHighlight } from "@/components/ui/pointer-highlight"

interface HeroProps extends React.ComponentProps<"section"> {
  title?: string
  ctaHref?: string
  ctaText?: string
}

export default function Hero({
  title = "Импортируем авто из Южной Кореи под ключ — от Genesis до Kia",
  ctaHref = "https://t.me/exportautorus",
  ctaText = "Смотреть кейсы и цены",
  className,
  ...props
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen",
        "py-6 md:py-20 px-4 md:px-8",
        className
      )}
      {...props}
    >
      {/* Content layer */}
      <div className="relative max-w-7xl mx-auto">
        {/* Двухколоночный layout (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-start">

          {/* Левая колонка: Контент */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 relative z-10 flex flex-col items-center lg:items-start"
          >
            {/* H1 Заголовок */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-tight text-center lg:text-left">
              {typograf("Импортируем авто из Южной Кореи")}{" "}
              <span className="inline-flex items-baseline gap-4">
                <PointerHighlight
                  rectangleClassName="border-[oklch(0.15_0_0)]"
                  pointerClassName="text-[oklch(55%_0.22_25)]"
                >
                  за 7 дней
                </PointerHighlight>
                <img
                  src="/car.svg"
                  alt="Korea Motors"
                  width={502}
                  height={176}
                  className="h-7 md:h-9 w-auto"
                />
              </span>
            </h1>

            {/* Список преимуществ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="sr-only">Наши преимущества</h2>
              <BenefitsList />
            </motion.div>

            {/* CTA кнопка */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CTAButton href={ctaHref}>
                {ctaText}
              </CTAButton>
            </motion.div>

            {/* Логотипы брендов */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 w-full"
            >
              <h2 className="sr-only">Бренды автомобилей</h2>
              <p className="text-sm text-muted-foreground mb-4 font-medium text-center lg:text-left">
                {typograf("Работаем с премиум-сегментом и брендами среднего класса:")}
              </p>
              <BrandLogos variant="marquee" />
            </motion.div>
          </motion.div>

          {/* Правая колонка: Визуал */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* CarImage inline — now pure HTML */}
            <div className="relative w-full h-full">
              <div className="relative w-full lg:w-[130%] lg:-ml-[15%] aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <img src="/bg.svg" alt="" width={301} height={301} className="h-full w-auto" />
                </div>
                <img
                  src="/genesis-hero.png"
                  alt="Автомобиль из Южной Кореи"
                  loading="eager"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
              </div>

              {/* TrustBadge floating — скрыт на lg+ */}
              <div className="absolute bottom-12 right-0 md:bottom-24 md:right-0 hidden md:block lg:hidden z-20">
                <TrustBadge />
              </div>

              {/* TrustBadge под изображением на мобильных */}
              <div className="flex justify-center md:hidden -mt-8 relative z-10">
                <TrustBadge />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed TrustBadge только для десктопа (lg+) */}
      <TrustBadge className="hidden lg:block lg:fixed lg:bottom-6 lg:right-6 lg:z-50" />
    </section>
  )
}
