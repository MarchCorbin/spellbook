import SpellIndex from '@/qdfqwfqwcomponents/spellindex/SpellIndex.vue'
import { mount } from '@vue/test-utils'
import { getAllSpells } from '@/components/spellIndex/SpellIndex.vue'


describe('SpellIndex', () => {
  let wrapper;

  beforeEach(() => {
    const spellData = getAllSpells.mockResolvedValueOnce([{
          "_id": "5b74ebd5fb6fc0739646754c",
          "spell": "Aberto",
          "type": "Charm",
          "effect": "opens objects"
        },
        {
          "_id": "5b74ecfa3228320021ab622b",
          "spell": "Accio",
          "type": "Charm",
          "effect": "Summons an object",
          "__v": 0
        }
      ])
    wrapper = mount(SpellIndex, {
      data() {
       return {
         allSpells: spellData
       }
      }
    })
  })
  it('should render all of the spells', () => {
    
    const spellCards = wrapper.findAll('.spell-card')
    console.log(wrapper)
    console.log(spellCards, 'IAMSPELLCARDS')
    expect(spellCards.length).toBe(2)
  })
})