<template>
  <div>
    <Header />
    <ul>
      <div class='spell-card' v-bind:key='spell._id' v-for='spell in allSpells'>
        <h1>{{spell.spell}}</h1>

        <img src="../../assets/charm.png" :alt="`${spell.type}`" />

        <h3 >{{spell.type}}</h3>
        <h3 >{{spell.effect}}</h3>
      </div>
    </ul>
  </div>
</template>



<script>
import Header from '../header/Header.vue'
import '../../assets/charm.png'
import '../../assets/spell.png'
import '../../assets/curse.png'
import '../../assets/hex.png'

export default {
  props: {
    // allSpells : String
  },
  name: 'SpellIndex',
  components: {
    Header
  },
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
    },

    determineSpellType(type) {
      return `../../assets/${type}.png`
    }
  }
}




</script>

<style scoped>

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }

  img {
    width: 16em
  }

  .spell-card {
    border-color: black;
    border: 5px solid;
    margin: 1em;
    width: 17em;
    height: fit-content;
  }

@media screen and (max-width: 750px) {
  ul {
    grid-template-columns: 1fr 1fr
  }
}


</style>
