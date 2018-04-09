import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Subscript from '@/views/Subscript.vue'
import BasicShape from '@/views/BasicShape.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/subscript',
      name: 'Subscript',
      component: Subscript
    }, {
      path: '/basic-shape',
      name: 'BasicShape',
      component: BasicShape
    }
  ]
})
