<template>
  <v-row no-gutters class="display-curricula-page">
    <v-col md="6" offset-md="3" sm="8" >
      <div class="page-header">
        <h1>All Curricula</h1>
        <v-btn @click="$router.push('/curricula/create')">Create New</v-btn>
      </div>
      <div class="curricula-list">
        <v-card 
          outlined
          class="curriculum-card"
          v-for="curriculum in curricula"
          :key="curriculum._id"
        >
          <v-card-title class="headline">
            <router-link :to="`/curricula/${curriculum._id}`">{{ curriculum.name }}</router-link>
          </v-card-title>
          <v-card-subtitle>
            {{ curriculum.description }}
          </v-card-subtitle>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "DisplayCurricula",
  data() {
    return { }
  },
  computed: {
    ...mapState(["curricula"])
  },
  methods: {
    ...mapActions(["getCurricula"])
  },
  mounted() {
    this.getCurricula()
  }
}
</script>
