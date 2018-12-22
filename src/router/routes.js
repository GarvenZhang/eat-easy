import Index from '../pages/index'
import Detail from '../pages/detail'
import FirstChioce from '../pages/firstChoice'

const routes = [{
  path: '/',
  component: Index,
  name: 'index'
},
{
  name: 'detail',
  path: '/detail/:name/:id',
  component: Detail,
  props: true
},
{
  name: 'firstChioce',
  path: '/firstChioce',
  component: FirstChioce
}
]

export default routes
