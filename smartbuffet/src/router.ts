import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NotFound from './views/NotFound.vue'
const routes: RouteRecordRaw[] = [
{
  path: '/',
  name: 'home',
  component: HelloWorld
},
{
    path: "/:catchAll(.*)",
    component: NotFound,
},

]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router