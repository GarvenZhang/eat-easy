import Index from '../pages/index';
import Message from '../pages/message';
import Discovery from '../pages/discovery';

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
    name: 'discovery',
    path: '/discovery',
    component: Discovery,
    props: true
  }
];

export default routes;