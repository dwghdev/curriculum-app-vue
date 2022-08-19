<template>
  <v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" exact text>
        Home
      </v-btn>
      <v-btn to="/curricula" exact text>
        View All
      </v-btn>
      <v-btn to="/curricula/create" text>
        Create
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
