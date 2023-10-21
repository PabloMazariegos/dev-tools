<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="$display.mobile"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title
      @click="goToHome"
      class="cursor-pointer"
    >
      Dev Tools
    </v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="!$display.mobile"
    :absolute="!$display.mobile"
  >
    <v-list
      :lines="false"
      color="info"
      :items="navigationItems"
      nav
    >
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useDisplay } from 'vuetify'
  import { navigationItems } from '@/config/navigation-items'

  const $display = useDisplay()
  const $router = useRouter()

  const drawer = ref(!$display.mobile.value)

  const goToHome = () => {
    $router.push({ name: 'Home' })
  }
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
