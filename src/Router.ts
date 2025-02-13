import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LoginForm from './pages/LoginPage.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
          path:'',
          component: HomePage
      },
      {
          path:'/login',
          component: LoginForm
      },
    ]
  });

  export default router;