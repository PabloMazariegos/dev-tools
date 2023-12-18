<template>
  <v-row>
    <v-col cols="12">
      <h1>All Tools</h1>
      <v-divider></v-divider>
    </v-col>
  </v-row>
  <v-row>
    <v-col
      cols="6"
      md="3"
      v-for="(item, index) in filteredNavigationItems"
      :key="index"
    >
      <template v-if="!item.type">
        <v-card
          rounded="lg"
          height="80px"
          flat
          :to="item.props?.to"
        >
          <v-card-title>
            <p class="text-body-1">{{ item.title }}</p>
          </v-card-title>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { navigationItems } from '@/config/navigation-items'

  const filteredNavigationItems = computed(() => {
    return navigationItems.filter((item) => typeof item.type === 'undefined')
  })

  const generateRandomColor = () => {
    const colors = ['primary', 'secondary', 'accent', 'error', 'warning', 'info', 'success']
    return colors[Math.floor(Math.random() * colors.length)]
  }
</script>
