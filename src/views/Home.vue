<template>
  <div class='parchment'>
    <h1 class="title">Hogwarts Spellbook ed.XVLVIIIXV</h1>

    <div class='button-holder'>
      <router-link to='/createspell'>
        <button>Create a Spell!</button>
      </router-link>
      <router-link to='/spellindex'>
        <button>View Spells!</button>
      </router-link>
      <!-- <SpellIndex v-bind:allSpells=this.allSpells /> -->
    </div>
  </div>
</template>

<script>
import '../assets/parchment.jpg'
// @ is an alias to /src
// import CreateSpell from '../components/createspell/CreateSpell.vue'
// import SpellIndex from '../components/spellindex/SpellIndex'

export default {

  name: 'Home',
  components: {
  //  SpellIndex
  },
  // data() {
  //   return {
  //     allSpells: []
  //   }
  // },
  // created() {
  //   this.getAllSpells()
  // },
  // methods: {
  //   getAllSpells () {
  //     fetch('https://www.potterapi.com/v1/spells?key=$2a$10$m4giiYReoHdY5vLc5OsvxOPchfJHMDP0afjPdh/CN03cv/vc0SAl2')
  //     .then(response => response.json())
  //     .then(data => this.allSpells = data)
  //   }
  // }   
}
</script>

<style>
.button-holder {
  display: flex;
  justify-content: space-around;
}

* {
  font-family: 'IM Fell English', serif;
  
}

body {
  background-image: url('../assets/parchment.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}
/* .parchment {
  background-image: url('../assets/parchment.jpg');
  background-size: 100% */
/* } */

.title {
    margin-top: 4em;
    margin-bottom: 5em;
}

button {
  background: transparent;
  font-size: 36px;
  padding: 1em;
}

@media screen and (max-width: 950px){
  body {
    background-size: 60em;
    
  }

  button {
    margin: .3em;
    min-width: 8em;
  }

  .button-holder {
    justify-content: space-around;
    display: flex;
    flex-direction: column;
  }
}
</style>