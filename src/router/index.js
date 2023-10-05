import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Layout' ,
      component:()=>import('../layout/layout.vue'),
      redirect:'home',
      children:[
        {
          path:'home',
          name:'Text',
          component:()=>import('../views/text.vue')
        },
        {
          path:'photo',
          name:'Photo',
          component:()=>import('../views/photo.vue')
        },
        {
          path:'book',
          name:'Book',
          component:()=>import('../views/book.vue')
        },
        {
          path:'person',
          name:'Person',
          component:()=>import('../views/person.vue')
        },
        {
          path:'instructions',
          name:'Instructions',
          component:()=>import('../views/instructions.vue')
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('../views/login.vue')
    }
  ]
})

export default router
