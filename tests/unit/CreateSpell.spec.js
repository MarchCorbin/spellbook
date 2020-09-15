import CreateSpell from '@/components/createspell/CreateSpell.vue'
import { shallowMount, mount } from '@vue/test-utils'

describe('CreateSpell.vue', () => {
  let wrapper;
  beforeEach(() =>{
    wrapper = mount(CreateSpell)
  })
  it('should contain 2 inputs', () => {
  expect(wrapper.find('.inputEntry1').exists()).toBe(true)
  expect(wrapper.find('.inputEntry2').exists()).toBe(true)
  })
  it('should have 6 spell buttons', () => {
    expect(wrapper.text()).toContain('Curse')
    expect(wrapper.text()).toContain('Spell')
    expect(wrapper.text()).toContain('Charm')
    expect(wrapper.text()).toContain('Hex')
    expect(wrapper.text()).toContain('Enchantment')
    expect(wrapper.text()).toContain('Jinx')
  })
  it('should have a submit button', () => {
    expect(wrapper.text()).toContain('Submit!')
  })
  it('should render 2 navigation buttons', () => {
    expect(wrapper.text()).toContain('Create a New Spell')
    expect(wrapper.text()).toContain('Spell Index')
  })
  it('should render an app title', () => {
    expect(wrapper.text()).toContain('The Standard Book of Spells by Miranda Goshawk: Year 1')
  })
  it('should have 10 buttons on the page!', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(10)
  })
})