import Header from '@/components/header/Header.vue'
import { mount, waitFor } from '@vue/test-utils'
import VueRouter from 'vue-router'

describe('Header.vue', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = mount(Header)
    
  })
  it('renders on load', () => {
expect(wrapper.text()).toContain('The Standard Book of Spells by Miranda Goshawk: Year 1')
  })
  it('should have two buttons', () => {
expect(wrapper.text()).toContain('Create a New Spell')
expect(wrapper.text()).toContain('Spell Index')
  })
  it('should have an image', () => {
   let picture =  wrapper.findAll('.header-logo')
   expect(picture.length).toBe(2)
  })
})