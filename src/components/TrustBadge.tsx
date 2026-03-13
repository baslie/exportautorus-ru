import * as React from "react"
import { cn } from "@/lib/utils"
import { typograf } from "@/lib/typograf"
import { TELEGRAM_LINK } from "@/lib/constants"

interface TrustBadgeProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name?: string
  role?: string
  description?: string
  avatarSrc?: string
  href?: string
}

export function TrustBadge({
  name = typograf("Евгений Дума"),
  role = typograf("директор «Korea Motors»"),
  description = typograf("Лично отвечаю за ваше авто."),
  avatarSrc = "/zhenya.jpg",
  href = TELEGRAM_LINK,
  className,
  ...props
}: TrustBadgeProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.trackTelegramClick && href.includes("t.me/")) {
      window.trackTelegramClick()
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "bg-white/85 backdrop-blur-sm rounded-xl shadow-2xl",
        "p-2 md:p-4",
        "max-w-[280px] md:max-w-sm",
        "cursor-pointer transition-all duration-200 hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <div className="shrink-0">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-gray-700">
            <img
              src={avatarSrc}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 text-left space-y-0.5 md:space-y-1">
          <h4 className="text-sm md:text-xl font-bold text-gray-900 leading-tight">
            {name}
          </h4>
          <p className="text-xs md:text-sm text-gray-600 leading-tight">
            {role}
          </p>
          <p className="text-xs md:text-base text-gray-700 italic">
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}
