import SpellIndex from '@/components/spellindex/SpellIndex.vue'
import { shallowMount, mount } from '@vue/test-utils'
import { getAllSpells } from '@/components/spellIndex/SpellIndex.vue'
window.fetch = jest.fn().mockResolvedValue(
  [{
    _id: "5b74ebd5fb6fc0739646754c",
    spell: "Aberto",
    type: "Charm",
    effect: "opens objects",
  },
  {
    _id: "5b74ecfa3228320021ab622b",
    spell: "Accio",
    type: "Charm",
    effect: "Summons an object",
    __v: 0,
  }]
);

describe('SpellIndex', () => {
  let wrapper;

  beforeEach(() => {
   
  })
  it('should render all of the spells', () => {
     wrapper = mount(SpellIndex, {
     });
    const spellCards = wrapper.findAll('.spell-card')
    console.log(wrapper)
    console.log(window.fetch.componentVM.allSpells, 'IAMFETCH')
    console.log(spellCards, 'IAMSPELLCARDS')
    expect(spellCards.length).toBe(2)
  })
})