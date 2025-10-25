"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { toast, Toaster as Sonner } from "sonner"

import { useToast } from "@/hooks/use-toast"

export type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  const { toasts } = useToast()

  return (
    <Sonner
      theme={theme as "system" | "dark" | "light"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    >
      {toasts.map((t: Toast) => (
        <Sonner key={t.id}>
          <div className="grid gap-1">
            {t.title && <div className="font-medium">{t.title}</div>}
            {t.description && <div>{t.description}</div>}
          </div>
          {t.action}
        </Sonner>
      ))}
    </Sonner>
  )
}

export { Toaster, toast }
