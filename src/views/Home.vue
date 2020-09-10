<template>
  <div class='parchment'>
    <h1 class="title">The Standard Book of Spells by Miranda Goshawk: Year 5 edition
    </h1>

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
  },
  
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
  background: url('../assets/parchment.jpg') no-repeat fixed;
   background-size: 100%;
}

.title {
    font-size: 3em;
    margin-bottom: 2em;
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