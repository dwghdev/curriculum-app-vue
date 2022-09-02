<template>
  <v-app>
    <TopNav />
    <v-main>
      <v-container>
        <router-view :key="$route.fullPath"/>
      </v-container>
    </v-main>
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
