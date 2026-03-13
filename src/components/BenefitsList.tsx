import * as React from "react"
import { cn } from "@/lib/utils"
import { typograf } from "@/lib/typograf"
import { Car, Banknote, ListChecks, Wallet, BadgePercent } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"

function getDisplayYear(): number {
  const now = new Date()
  const currentYear = now.getFullYear()
  const month = now.getMonth()

  return month < 6 ? currentYear - 1 : currentYear
}

interface BenefitItem {
  text: React.ReactNode
  icon?: React.ReactNode
}

interface BenefitsListProps extends React.ComponentProps<"ul"> {
  benefits?: BenefitItem[]
}

const defaultBenefits: BenefitItem[] = [
  {
    text: (
      <>
        <strong><NumberTicker value={100} />{typograf("+ машин")}</strong> {typograf("доставили в Россию за")}&nbsp;{getDisplayYear()}&nbsp;{typograf("год")}
      </>
    ),
    icon: <Car className="w-4 h-4" />,
  },
  {
    text: (
      <>
        {typograf("Авто")} <strong><span className="whitespace-nowrap">{typograf("от")} <NumberTicker value={1000000} startValue={500000} step={10000} useGrouping={false} />&nbsp;₽</span></strong>{typograf(", до 160 л.с. —")} <span className="underline">{typograf("без переплаты за утильсбор")}</span>!
      </>
    ),
    icon: <BadgePercent className="w-4 h-4" />,
  },
  {
    text: (
      <>
        {typograf("Фиксированная комиссия")} <strong><span className="whitespace-nowrap">{typograf("от")} <NumberTicker value={35000} startValue={15000} step={100} />&nbsp;₽</span></strong>
      </>
    ),
    icon: <Banknote className="w-4 h-4" />,
  },
  {
    text: (
      <>
        {typograf("Оплата")} <strong>{typograf("в")} <NumberTicker value={5} /> {typograf("этапов")}</strong>{typograf(", без посредников")}
      </>
    ),
    icon: <ListChecks className="w-4 h-4" />,
  },
  {
    text: (
      <>
        {typograf("Подбираем авто строго")} <strong>{typograf("под ваш бюджет")}</strong>
      </>
    ),
    icon: <Wallet className="w-4 h-4" />,
  },
]

export function BenefitsList({
  benefits = defaultBenefits,
  className,
  ...props
}: BenefitsListProps) {
  return (
    <ul className={cn("space-y-2 flex flex-col items-start mx-auto lg:mx-0 w-fit", className)} {...props}>
      {benefits.map((benefit, index) => (
        <li key={index} className="group">
          <div className="flex items-start gap-3 px-4 py-3 rounded-md transition-all duration-300 group-hover:bg-[oklch(0.99_0.02_96.71)] active:bg-[oklch(0.97_0.02_96.71)] active:scale-[0.98] w-fit">
            <span className="flex-shrink-0 bg-[var(--korea-red)] text-white rounded-full w-7 h-7 flex items-center justify-center mt-0.5">
              {benefit.icon || <span className="text-xl">•</span>}
            </span>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              {benefit.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
