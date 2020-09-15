<template>
  <form>
    <Header />
    <h1 class='welcome-text'>Discover a new Spell? Log it into book so you can save it for later!</h1>
    <input v-model="spellName" class='inputEntry1' placeholder="Name of Your Spell" />
    <div class='type-btn-holder'>
      <h2>Choose the type of spells below</h2>
      <button class='spell-type' @click='this.pickType'>
        <div class='spell-img'>
          <img class='spell-img' src='../../srcassets/Curse.png' />
          <h4>Curse</h4>
        </div>
      </button>
      <button class='spell-type' @click='this.pickType'>
        <div class='spell-img'>
          <img class='spell-img' src='../../srcassets/Spell.png' />
          <h4>Spell</h4>
        </div>
      </button>
      <button class='spell-type' @click='this.pickType'>
        <div class='spell-img'>
          <img class='spell-img' src='../../srcassets/Charm.png' />
          <h4>Charm</h4>
        </div>
      </button>
    </div>
    <div class='type-btn-holder'>
      <button class='spell-type' @click='this.pickType'>
        <div class='spell-img'>
          <img class='spell-img' src='../../srcassets/Hex.png' />
          <h4>Hex</h4>
        </div>
      </button>
      <button class='spell-type' @click='this.pickType'>
        <div class='spell-img'>
          <img class='spell-img' src='../../srcassets/Enchantment.png' />
          <h4>Enchantment</h4>
        </div>
      </button>
      <button class='spell-type' @click='this.pickType'>
        <div class='spell-img'>
          <img class='spell-img' src='../../srcassets/Jinx.png' />
          <h4>Jinx</h4>
        </div>
      </button>
    </div>
    <h1>What does your spell do?</h1>
    <input v-model="effect" class='inputEntry2'  placeholder="Effect of Your Spell" />
    <br>
    <h3 class='error-message'></h3>
    <button class='submit-btn' @click='this.submitHandler'>Submit!</button>
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
    },
    submitHandler(e) {
      e.preventDefault()
     let result = this.checkButtons()
     console.log(result, 'IAMRESULT')
     if(result){
      this.keyVal = localStorage.length
      let newSpell = {
        id: this.id,
        spellName: this.spellName,
        effect: this.effect,
        type: this.type
      }
      localStorage.setItem(`newEntry${this.keyVal}`, JSON.stringify(newSpell))
      this.clearFields()
    }},
    clearFields () {
      this.removeActive()
      this.effect = ''
      this.spellName = ''
    },
    checkButtons() {
      let count = 0
      let errMessage = document.querySelector('.error-message')
      let spellButtons = document.querySelectorAll('.spell-type')
      if(this.checkInputs()){
        spellButtons.forEach(spell => {
          if(spell.classList.contains('active')){
            count += 1
          }
        })
        if(count === 0){
          console.log(count)
          errMessage.innerText = "Select a Spell Type!"
          return false
        } else {
          return true
        }
      }
    },
    checkInputs() {
      let errMessage = document.querySelector('.error-message')
      if(this.effect === '' || this.spellName === ''){
        errMessage.innerText = this.error
        return false
        }
        errMessage.innerText = "Spell Submitted!"
        return true
    }
  }
}
</script>

<style scoped>
.active {
  box-shadow: inset #252422 0 0 60px;
  text-shadow: 0px -2px 4px #fff;
}

.submit-btn {
  box-shadow: inset #ed0101 0 0 60px
}
h4 {
  margin: 0px;
}

h1 h2 {
  margin-bottom: 0px;
}
.spell-img {
  height: 3em;
  pointer-events: none;
  margin-bottom: -0.5em;
  
}

.spell-type {
  margin: .5em;
  padding-top: 15px;
  height: 6.5em;
}

.inputEntry1 {
  font-size: 2em;
  margin-top: 0.5em;
}

.inputEntry2 {
  font-size: 2em;
}

@media screen and (max-width: 950px){
  .type-btn-holder {
    display:flex;
    flex-direction: column;
  }

  .spell-type {
    display: inline-flex;
    justify-content: center;
    height: 5em;
  }
}
</style>