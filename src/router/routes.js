import Index from '../pages/index'
import Message from '../pages/message'
import FirstChioce from '../pages/firstChoice'
import Discovery from '../pages/discovery'
import List from '../pages/list';
import Category from '../pages/category';
import Me from "../pages/me";
import Login from "../pages/login"


const routes = [{
    path: '/',
    component: Index,
    name: 'index'
  },
  {
    name: 'message',
    path: '/message/:id',
    component: Message,
    props: true
  },
  {
    name: 'firstChioce',
    path: '/firstChioce',
    component: FirstChioce
  },
  {
    name: 'discovery',
    path: '/discovery',
    component: Discovery,
    props: true
  },
  {
    name: 'list',
    path: '/list',
    component: List,
    props: true
  },
  {
    name: 'category',
    path: '/category/:id',
    component: Category,
    props: true
  },
  {
    name: 'me',
    path: '/me',
    component: Me,
    props: true
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    props: true
  }
]

export default routes
