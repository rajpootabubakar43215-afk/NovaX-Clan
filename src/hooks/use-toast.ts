import * as React from "react"

export type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  message?: string
  dismiss?: () => void
}

type Toaster = {
  toasts: Toast[]
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>
}

export function useToast(): Toaster {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  return {
    toasts,
    setToasts,
  }
}
