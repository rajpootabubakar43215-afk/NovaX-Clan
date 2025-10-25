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

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

// Toast function (used for demo, Sonner integrate if needed)
const toast = (t: Toast) => {
  const id = genId()
  const update = (message?: string) => {
    console.log(`Toast: ${message || t.message || ''}`)
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

  // Use toast function to add demo toast if needed
  React.useEffect(() => {
    toast({ id: 'demo', message: 'Hook loaded' })
  }, [])

  return {
    toasts,
    setToasts,
  }
}
