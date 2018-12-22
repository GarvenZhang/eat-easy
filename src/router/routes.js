import Index from '../pages/index'
import Message from '../pages/message'
import FirstChioce from '../pages/firstChoice'
import Discovery from '../pages/discovery'
import List from '../pages/list';
import Category from '../pages/category';


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
  }
]

export default routes
