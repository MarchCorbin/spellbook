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
    wrapper = mount(SpellIndex, {
      data() {
        return  {
          allSpells: [{
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
          }
        ]}
      }
    });
  })
  it('should render all of the spells', () => {
    const spellCards = wrapper.findAll('.spell-card')
    expect(spellCards.length).toBe(2)
  })
  it('should have 8 filter buttons', () => {
    expect(wrapper.text()).toContain("Curse");
    expect(wrapper.text()).toContain("Spell");
    expect(wrapper.text()).toContain("Charm");
    expect(wrapper.text()).toContain("Hex");
    expect(wrapper.text()).toContain("Enchantment");
    expect(wrapper.text()).toContain("Jinx");
    expect(wrapper.text()).toContain("All Spells");
    expect(wrapper.text()).toContain("Personal");
  })
  it('should render the title', () => {
    expect(wrapper.text()).toContain(
      "The Standard Book of Spells by Miranda Goshawk: Year 1"
    );
  })
  it('should render the navigation buttons', () => {
    expect(wrapper.text()).toContain("Create a New Spell");
    expect(wrapper.text()).toContain("Spell Index");
  })
  it('should have 10 buttons on the page!', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(11)
  })
})