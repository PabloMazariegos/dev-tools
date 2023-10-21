<template>
  <v-snackbar
    v-model="app.alert.show"
    color="transparent"
    location="bottom right"
    transition="fade-transition"
    max-width="600px"
    :timeout="app.alert.timeout || 5000"
  >
    <v-alert
      :title="app.alert.title"
      :text="app.alert.message"
      :type="app.alert.type"
    ></v-alert>
  </v-snackbar>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store/app'

  const app = useAppStore()
</script>
