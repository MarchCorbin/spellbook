import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateSpell from '../components/createspell/CreateSpell.vue'
import SpellIndex from '../components/spellindex/SpellIndex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createspell',
    name: 'CreateSpell',
    component: CreateSpell
  },
  {
    path: '/spellindex',
    name: 'SpellIndex',
    component: SpellIndex
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
