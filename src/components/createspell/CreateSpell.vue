<template>
  <form>
    <Header />
    <input v-model="spellName" placeholder="Name of Your Spell" />
    <div>
      <button class='spell-type' @click='this.pickType'>Curse</button>
      <button class='spell-type' @click='this.pickType'>Spell</button>
      <button class='spell-type' @click='this.pickType'>Charm</button>
    </div>
    <div>
    <button class='spell-type' @click='this.pickType'>Hex</button>
    <button class='spell-type' @click='this.pickType'>Enchantment</button>
    <button class='spell-type' @click='this.pickType'>Jinx</button>
    </div>
    <input v-model="effect"  placeholder="Effect of Your Spell" />
    <br>
    <button>Submit!</button>
 
  </form>
</template>

<script>
import Header from '../header/Header.vue'
export default {

    name: 'CreateSpell',
    components: {
        Header
    },
    data() {
      return {
        spellName: '',
        effect: ''
      }
    },
    methods: {
      pickType(e) {
        e.preventDefault()
        this.removeActive()
        console.log(document.querySelectorAll('.spell-type'), 'IAMTARGET')
      e.target.classList.add('active')
      },
      removeActive() {
        let spellButtons = document.querySelectorAll('.spell-type')
        spellButtons.forEach(spell => {
          spell.classList.remove('active')
        })
      }
    }
}
</script>