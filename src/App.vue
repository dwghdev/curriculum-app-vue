<template>
  <v-app>
    <TopNav />
    <v-content>
      <v-container>
        <router-view :key="$route.fullPath"/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav.vue"

export default {
  components: {
    TopNav,
  }
}
</script>
