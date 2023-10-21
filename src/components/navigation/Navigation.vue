<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="mobile"
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
    :permanent="!mobile"
    :absolute="!mobile"
  >
    <v-list
      nav
      color="info"
      :lines="false"
      :items="navigationItems"
    >
      <template v-slot:item="{ props }">
        <v-list-item
          nav
          v-bind="props"
          :active="props.to === route.path"
        ></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useDisplay } from 'vuetify'
  import { navigationItems } from '@/config/navigation-items'

  const { mobile } = useDisplay()
  const router = useRouter()
  const route = useRoute()

  const drawer = ref(!mobile.value)

  const goToHome = () => {
    router.push({ name: 'Home' })
  }
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
