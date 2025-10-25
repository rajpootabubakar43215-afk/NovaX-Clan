"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { toast, Toaster as Sonner } from "sonner"

import { useToast } from "@/hooks/use-toast" // Import sahi path se

const Toaster = ({ ...props }: React.ComponentProps<typeof Sonner>) => {
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
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Sonner key={id} {...props}>
            <div className="grid gap-1">
              {title && <div className="font-medium">{title}</div>}
              {description && <div>{description}</div>}
            </div>
            {action}
          </Sonner>
        )
      })}
    </Sonner>
  )
}

export { Toaster, toast }
