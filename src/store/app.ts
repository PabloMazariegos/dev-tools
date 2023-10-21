import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    alert: {} as Alert
  }),
  actions: {
    showAlert(type:AlertType, message:string, title?:string, timeout?:number ) {
      this.alert.show = true
      this.alert.message = message
      this.alert.timeout = timeout
      this.alert.title = title
      this.alert.type = type
    }
  }
})
