import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Subscript from '@/views/Subscript.vue'
import BasicShape from '@/views/BasicShape.vue'
import BackgroundClip from '@/views/BackgroundClip.vue'
import Animation from '@/views/Animation.vue'
import Overflow from '@/views/Overflow.vue'
import ZIndex from '@/views/ZIndex.vue'
import WritingModeCenterBox from '@/views/WritingModeCenterBox.vue'
import WordWrap from '@/views/WordWrap.vue'
import ContainingBlock from '@/views/ContainingBlock.vue'

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
    }, {
      path: '/background-clip',
      name: 'BackgroundClip',
      component: BackgroundClip
    }, {
      path: '/animation',
      name: 'Animation',
      component: Animation
    }, {
      path: '/overflow',
      name: 'Overflow',
      component: Overflow
    }, {
      path: '/z-index',
      name: 'ZIndex',
      component: ZIndex
    }, {
      path: '/writing-mode-center-box',
      name: 'WritingModeCenterBox',
      component: WritingModeCenterBox
  }, {
      path: '/word-wrap',
      name: 'WordWrap',
      component: WordWrap
    }, {
      path: '/containing-block',
      name: 'ContainingBlock',
      component: ContainingBlock
    }
  ]
})
