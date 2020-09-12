import Home from '@/views/Home.vue'
import { mount } from '@vue/test-utils'


describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper=mount(Home)
  })
  it('should render a title', async() => {
    const title = wrapper.find('.title')
   await expect(title.text()).toContain('The Standard Book of Spells by Miranda Goshawk: Year 5 edition', {exact: false})
  })
  it('should render two buttons', () => {
    const button1 = wrapper.find('.view-spells')
    const button2 = wrapper.find('.create-a-spell')
    expect(button1.exists()).toBe(true)
    expect(button2.exists()).toBe(true)
  })
})