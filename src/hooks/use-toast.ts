import * as React from "react"

export type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
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

const toast = (t: Toast) => {
  const id = genId()
  const update = (message?: string) => toast({ ...t, id, message })

  update(t.message)

  return {
    id,
    dismiss: () => toast.dismiss(id),
    update,
  }
}

export const useToast = () => {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  return {
    toasts,
    setToasts,
  }
}
