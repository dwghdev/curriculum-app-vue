<template>
  <v-row no-gutters>
    <v-col
      md="6"
      sm="8"
      offset-md="3"
      offset-sm="2"
    >
      <div class="page-header">
        <h1>All Curricula</h1>
        <v-btn >Create New</v-btn>
      </div>

      <div class="curricula-list">
        <v-card outlined>
          <v-card-title class="headline">My Curriculum #1</v-card-title>
          <v-card-subtitle>
            This is a description... 
          </v-card-subtitle>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home"
}
</script>
