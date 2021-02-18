import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from './components/Layout.vue'



import HelloWorld from './components/HelloWorld.vue'
import WelcomePage from './views/WelcomePage.vue'
import Cart from './views/Cart.vue'
import ListMenu from './views/ListMenu.vue'

import NotFound from './views/NotFound.vue'




const routes: RouteRecordRaw[] = [
{
  path: '/',
  component: Layout,
  children: [
    {
      path: 'hello',
      component: HelloWorld
    },
    {
      path: 'welcome/:id',
      component: WelcomePage,
    },
    {
      path: 'listmenu',
      name: 'รายการ',
      component: ListMenu
    },
    {
      path: 'checkoutcart',
      name: 'เช็คเอาท์ตะกร้า',
      component: Cart,
      props: (route) => ({
        Cart: route.params
    })
    }
    

  ]
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