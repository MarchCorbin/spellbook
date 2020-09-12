import Header from '@/components/header/Header.vue'
import { shallowMount, createLocalVue, mount, waitFor } from '@vue/test-utils'
import VueRouter from 'vue-router'

describe('Header.vue', () => {
  let wrapper, picture
  
  beforeEach(() => {
   
    // const localVue = createLocalVue()
    // const router = new VueRouter()
    // localVue.use(VueRouter)
    wrapper = mount(Header)
    
  })
  it('renders on load', () => {
expect(wrapper.text()).toContain('The Standard Book of Spells by Miranda Goshawk: Year 1')
  })
  it('should have two buttons', () => {
expect(wrapper.text()).toContain('Create a New Spell')
expect(wrapper.text()).toContain('Spell Index')
  })
  // it('should have an image', async() => {
  //   picture = wrapper.find('header-logo')
  //   console.log(picture, 'IAMPICTURE') 
  //  expect(picture.is('.header-logo')).toBe(true)
  // })
})