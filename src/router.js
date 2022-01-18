import DummyControl from "@/components/DummyControl.vue"
import CScene from "@/components/ConstructorControl/CScene.vue"
import VueRouter from 'vue-router'
const routes = [
  {
    path: "/",
    component: DummyControl,
  },
  {
    path: "/newsc",
    component: CScene,
  },
];
const router = new VueRouter({
  routes
})
export default router;