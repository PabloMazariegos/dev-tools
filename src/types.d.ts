interface Alert {
  type: AlertType
  timeout?: number | 5000
  title?: string
  message: string
  show: boolean
}

type AlertType = 'error' | 'success' | 'warning'
