import Index from '../pages/index';
import Message from '../pages/message';

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
  }
];

export default routes;