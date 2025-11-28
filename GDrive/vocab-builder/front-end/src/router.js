import Vue from "vue";
import Routers from "vue-router";
import Words from "./views/Words.vue";
import New from "./views/New.vue";
import Edit from "./views/Edit.vue";
import Show from "./views/Show.vue";
import Test from "./views/Test.vue";
import History from "./views/History.vue";

Vue.use(Routers);

export default new Routers({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/words",
    },
    {
      path: "/words",
      name: "words",
      component: Words,
    },
    {
      path: "/words/new",
      name: "new-word",
      component: New,
    },
    {
      path: "/words/:id",
      name: "show",
      component: Show,
    },
    {
      path: "/words/:id/edit",
      name: "edit",
      component: Edit,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/history",
      name: "history",
      component: History,
    },
  ],
});
