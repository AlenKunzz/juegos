import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
    { path: '/', component: () => import('../components/Login') },
    { path: '/games', component: () => import('../components/PrincipalP') },
    { path: '/games/ppt', component: () => import('../components/juegos/PiedraPapel') },
    { path: '/games/memorama', component: () => import('../components/juegos/MemoRama') },
    { path: '/games/ahorcado', component: () => import('../components/juegos/AhorCado') },
    { path: '/games/adivina', component: () => import('../components/juegos/AdiVina') },
    



  ]


  const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })

  export default router