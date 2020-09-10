<template>
  <div>
    <Header />
    <ul>

      <div class='spell-card' v-bind:key='spell._id' v-for='spell in allSpells'>
        <h1>{{spell.spell}}</h1>
        <h3 v-bind:spell='spell'>{{spell.type}}</h3>
        <h3 v-bind:spell='spell'>{{spell.effect}}</h3>
      </div>
    </ul>
  </div>
</template>



<script>
// import Home from '../../views/Home.vue'
import Header from '../../'
export default {
  props: {
    // allSpells : String 
  },
  name: 'SpellIndex',
  data() {
    return {
      allSpells: []
    }
  },
  created() {
    this.getAllSpells()
  },
  methods: {
    getAllSpells () {
      fetch('https://www.potterapi.com/v1/spells?key=$2a$10$m4giiYReoHdY5vLc5OsvxOPchfJHMDP0afjPdh/CN03cv/vc0SAl2')
      .then(response => response.json())
      .then(data => this.allSpells = data)
    }
  }   
}




</script>

<style scoped>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
  }

  .spell-card {
    border-color: black;
    border: 5px solid;
    margin: 1em;    
  }

@media screen and (max-width: 750px) {
  ul {
    grid-template-columns: 1fr 1fr
  }
}


</style>