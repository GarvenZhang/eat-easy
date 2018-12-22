import Index from '../pages/index'
import Message from '../pages/message'
import FirstChioce from '../pages/firstChoice'

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
}
]

export default routes
