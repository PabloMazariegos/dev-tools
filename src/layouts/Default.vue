<template>
  <v-main>
    <Navigation />
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
  import Navigation from '@/components/navigation/Navigation.vue'
</script>
