import * as React from "react"

// Toast type – properties define karta hai
export type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  message?: string
  dismiss?: () => void
}

// Toaster type – hook return karta hai
type Toaster = {
  toasts: Toast[]
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>
}

// Global ID counter
let count = 0

// Unique ID generate karta hai
function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

// Toast function – toast create karta hai (demo, Sonner integrate kar sakte ho)
const createToast = (t: Toast) => {
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

// Main hook – toasts manage karta hai (no unused 'toast' variable)
export function useToast(): Toaster {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  // Effect – load pe demo toast (optional, comment out if not needed)
  React.useEffect(() => {
    // createToast({ id: 'demo', message: 'Hook loaded' })  // Uncomment for test
  }, [])

  return {
    toasts,
    setToasts,
  }
}
