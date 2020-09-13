<template>
  <form>
    <Header />
    <input v-model="spellName" class='inputEntry1' placeholder="Name of Your Spell" />
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
    <input v-model="effect" class='inputEntry'  placeholder="Effect of Your Spell" />
    <br>
    <h3 class='error-message'></h3>
    <button  @click='this.submitHandler'>Submit!</button>

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
        keyVal: 0,
        id: Date.now(),
        spellName: '',
        effect: '',
        type: '',
        error: 'Please fill out all fields!'
      }
    },
  methods: {
    pickType(e) {
      e.preventDefault()
      this.removeActive()
      console.log(document.querySelectorAll('.spell-type'), 'IAMTARGET')
      e.target.classList.add('active')
      this.addType(e)
     },
    removeActive() {
      let spellButtons = document.querySelectorAll('.spell-type')
      spellButtons.forEach(spell => {
        spell.classList.remove('active')
      })
    },
    addType (e) {
      this.type = e.target.innerText
      console.log(this.type, 'IAMTHETYPE')
    },
    submitHandler(e) {
      e.preventDefault()
     let result = this.checkInputs()
     if(result){
     
      this.keyVal = localStorage.length
      let newSpell = {
        id: this.id,
        spellName: this.spellName,
        effect: this.effect,
        type: this.type
      }
      localStorage.setItem(`newEntry${this.keyVal}`, JSON.stringify(newSpell))
      console.log(localStorage.length, 'IAMTHESTORAGE')
      this.clearFields()
    }},
    clearFields () {
      this.removeActive()
      this.effect = ''
      this.spellName = ''
    },
    checkInputs() {
     let errMessage = document.querySelector('.error-message')
      let spellButtons = document.querySelectorAll('.spell-type')
      spellButtons.forEach(spell => {
        if(!spell.classList.contains('active')){
          errMessage.innerText = "Select a Spell Type!"
          return false
        }
      })
     if(this.effect === '' || this.spellName === ''){
       errMessage.innerText = this.error
       return false
       }
    }
  }
}
</script>

<style>
.active {
  box-shadow: inset #000000 0 0 60px;
  text-shadow: 0px -2px 4px #fff;
}

</style>