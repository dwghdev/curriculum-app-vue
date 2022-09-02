import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home.vue"
import DisplayCurricula from "./views/DisplayCurricula.vue"
import DisplayCurriculum from "./views/DisplayCurriculum.vue"
import CreateCurriculum from "./views/CreateCurriculum.vue"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/curricula",
      name: "curricula",
      component: DisplayCurricula
    },
    {
      path: "/curricula/create",
      name: "create",
      component: CreateCurriculum
    },
    {
      path: "/curricula/:id",
      name: "curriculum",
      component: DisplayCurriculum
    },
  ]
})

export default router
