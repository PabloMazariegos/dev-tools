<template>
  <v-main>
    <Navigation />
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
  import Navigation from '@/components/navigation/Navigation.vue'
  import Alert from '@/components/alert/Alert.vue';
</script>
