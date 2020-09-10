<template>
  <div>
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

<style scoped>
.button-holder {
  display: flex;
  justify-content: space-around;
}

.title {
    margin-top: 4em;
    margin-bottom: 5em;
}

</style>