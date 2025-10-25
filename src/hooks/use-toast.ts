import * as React from "react"

export type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  message?: string // Yeh add kiya for toast function
  dismiss?: () => void // Yeh add kiya
}

type Toaster = {
  toasts: Toast[]
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

// Toast function fix kiya
const toast = (t: Toast) => {
  const id = genId()
  const update = (message?: string) => {
    // Dummy toast call (Sonner se integrate kar if needed)
    console.log(`Toast: ${message || t.message}`)
  }

  update(t.message)

  return {
    id,
    dismiss: () => console.log('Dismiss toast', id),
    update,
  }
}

export function useToast(): Toaster {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  return {
    toasts,
    setToasts,
  }
}
