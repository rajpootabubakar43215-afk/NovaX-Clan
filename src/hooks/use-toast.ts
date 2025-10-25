import * as React from "react"

// Toast type definition – yeh sab toast properties define karta hai (id, title etc.)
export type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  message?: string  // Toast message ke liye, optional
  dismiss?: () => void  // Dismiss function ke liye, optional
}

// Toaster type – yeh hook return karta hai (toasts array aur setToasts function)
type Toaster = {
  toasts: Toast[]
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>
}

// Global counter for unique IDs generate karne ke liye
let count = 0

// genId function – unique ID banata hai har toast ke liye
function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

// Toast function – ek toast create karta hai (demo ke liye, Sonner integrate kar sakte ho)
const toast = (t: Toast) => {
  const id = genId()
  const update = (message?: string) => {
    // Dummy log – real mein toast.show() call kar sakte ho Sonner se
    console.log(`Toast: ${message || t.message || ''}`)
  }

  update(t.message)
  return {
    id,
    dismiss: () => console.log('Dismiss toast', id),  // Dismiss log
    update,
  }
}

// Main hook – toasts state manage karta hai
export function useToast(): Toaster {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  // Effect – hook load hone pe demo toast add kar sakte ho (optional, remove kar sakte ho)
  React.useEffect(() => {
    // toast({ id: 'demo', message: 'Hook loaded' })  // Uncomment if demo chahiye
  }, [])

  return {
    toasts,
    setToasts,
  }
}
