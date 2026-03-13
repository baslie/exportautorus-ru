import * as React from "react"
import { cn } from "@/lib/utils"
import { TELEGRAM_LINK } from "@/lib/constants"
import { Send, ArrowRight } from "lucide-react"
import { PulsatingButton } from "@/components/ui/pulsating-button"

declare global {
  interface Window {
    trackTelegramClick: () => void;
  }
}

interface CTAButtonProps {
  href?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export function CTAButton({
  href = TELEGRAM_LINK,
  children = "Смотреть кейсы и цены в Телеграме",
  icon,
  className,
}: CTAButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.trackTelegramClick && href.includes("t.me/")) {
      window.trackTelegramClick();
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-block w-full md:w-auto"
    >
      <PulsatingButton
        pulseColor="rgba(0, 136, 204, 0.4)"
      duration="2s"
      className={cn(
        "group w-full md:w-auto rounded-xl",
        "bg-[#0088cc] text-white font-semibold text-base md:text-lg",
        "px-8 py-4",
        "shadow-lg hover:shadow-xl hover:shadow-[#0088cc]/30",
        className
      )}
    >
      <div className="relative overflow-hidden w-full h-full">
        <div className="flex items-center justify-center gap-3">
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {icon !== undefined ? icon : <Send className="w-5 h-5" />}
          </span>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>

        <div className="absolute top-0 left-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </PulsatingButton>
    </a>
  )
}
