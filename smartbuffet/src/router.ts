import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from './components/Layout.vue'



import HelloWorld from './components/HelloWorld.vue'
import WelcomePage from './views/WelcomePage.vue'
import Cart from './views/Cart.vue'
import ListMenu from './views/ListMenu.vue'

import AddMeatOrder from './views/AddMeatOrder.vue'
import OrdersHistory from './views/OrdersHistory.vue'


import DashBoard from './views/admin/DashBoard.vue'
import ManageMeat from './views/admin/ManageMeat.vue'
import AddMeatView from './views/admin/AddMeatView.vue'
import OpenTableView from './views/admin/OpenTableView.vue'
import ListTable from './views/ListTable.vue'
import EditMeatView from './views/admin/EditMeatView.vue'
import AddTypes from './views/admin/AddTypes.vue'
import MeatInNeed from './views/admin/MeatInNeed.vue'

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
      name: 'welcomepage',
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
    },
    {
      path: 'welcome/:id/historyorder',
      name: 'orderhistory',
      component: OrdersHistory
    },
    {
      path: 'admin/addmeat',
      name: 'addmeat',
      component: AddMeatView
    },
    {
      path: 'admin/graph',
      name: 'graph',
      component: DashBoard
    },
    {
      path: 'admin/meatmanage',
      name: 'จัดการเนื้อ',
      component: ManageMeat
    },
    {
      path: 'admin/addmeat',
      name: 'addMeat',
      component: AddMeatView
    },
    {
      path: 'admin/editmeat/:id',
      name: 'editMeat',
      component: EditMeatView
    },
    {
      path: 'admin/opentable',
      name: 'OpenTable',
      component: ListTable
    },
    {
      path: 'admin/addtype',
      name: 'addTypes',
      component: AddTypes
    },
    {
      path: 'admin/listmeat',
      name: 'ListMeats',
      component: MeatInNeed
    }
    // Page for Stock man to Manage All Meat in needed
    

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