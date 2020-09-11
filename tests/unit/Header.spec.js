import Header from '@/components/header/Header.vue'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'

describe('Header.vue', () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue()
    // const router = new VueRouter()
    localVue.use(VueRouter)
    wrapper = mount(Header, {
localVue,

    })
  })
  it('render on load', () => {
{
  console.log('IAMWORKIGN')
}
expect(wrapper.text()).toContain('The Standard Book of Spells by Miranda Goshawk: Year 1')
  })
})