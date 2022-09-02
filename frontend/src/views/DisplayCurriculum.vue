<template>
  <v-row no-gutters class="display-curricula-page">
    <v-col md="6" offset-md="3" sm="8" >
      <v-row>
        <v-col>
          <h1>{{ selectedCurriculum.name }}</h1>
          <p>{{ selectedCurriculum.description }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels multiple>
            <v-expansion-panel
              v-for="(section, i) in selectedCurriculum.sections"
              :key="i"
            > <v-expansion-panel-header>
                Section {{ i++ }} - {{ section.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list subheader two-line flat>
                  <v-subheader>Resources</v-subheader>
                  <v-list-item-group multiple>
                    <v-list-item
                      v-for="(resource, j) in section.resources"
                      :key="resource.name + j"
                    >
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            v-model="active"
                            color="primary"
                            @click="toggle"
                          />
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title>{{ resource }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
                <v-list>
                  <v-subheader>Projects</v-subheader>
                  <v-list-item-group multiple>
                    <v-list-item
                      v-for="(project, k) in section.projects"
                      :key="project + k"
                    >
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            v-model="active"
                            color="primary"
                            @click="toggle"
                          />
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title>{{ project }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item> 
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Section 2</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectur adipiscing elit, sed
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Section 3</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectur adipiscing elit, sed
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "DisplayCurriculum",
  data() {
    return {
      selectedCurriculum: { }
    }
  },
  computed: {
    ...mapState(["curricula"]) 
  },
  mounted() {
    this.seletedCurriculum = this.curricula.find(curriculum => curriculum._id === this.$route.params.id)
  }
}
</script>
