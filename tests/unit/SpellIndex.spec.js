import SpellIndex from '@/components/spellindex/SpellIndex.vue'
import { mount } from '@vue/test-utils'
import { getAllSpells } from '@/components/spellIndex/SpellIndex.vue'


describe('SpellIndex', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SpellIndex, {
      methods: getAllSpells.mockResolvedValue(() => [{
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
    })
  })

  it('should render all of the spells', () => {
    
    const spellCards = wrapper.find('.spell-card')
    expect(spellCards).toHaveLength(2)

  })
})