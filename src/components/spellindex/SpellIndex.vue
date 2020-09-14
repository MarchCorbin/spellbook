<template>
  <div>
    <Header />
    <div>
    <button @click='this.clickHandler'>Personal</button>
    <button @click='this.clickHandler'>Curse</button>
    <button @click='this.clickHandler'>Charm</button>
    <button @click='this.clickHandler'>Hex</button>
    <button @click='this.clickHandler'>Enchantment</button>
    <button @click='this.clickHandler'>Jinx</button>
    <button @click='this.clickHandler'>Spell</button>
    <!-- <button @click='this.clickHandler'>All Spells</button> -->

    </div>
    <ul class="spell-section">
      <div class='spell-card'  v-bind:key='spell._id' v-for='spell in allSpells'>
        <h1>{{spell.spell}}</h1>
        <img :src="`/assets/${spell.type}.png`" :alt="`${spell.type}`" />
        <h3 >{{spell.type}}</h3>
        <h3 >{{spell.effect}}</h3>
      </div>
    </ul>
    <ul class="spell-section-filtered hidden">
      <div class='spell-card'  v-bind:key='spell._id' v-for='spell in filtered'>
        <h1>{{spell.spell}}</h1>
        <img :src="`/assets/${spell.type}.png`" :alt="`${spell.type}`" />
        <h3 >{{spell.type}}</h3>
        <h3 >{{spell.effect}}</h3>
      </div>
    </ul>
  </div>
</template>



<script>
import Header from '../header/Header.vue'

export default {
  props: {

  },
  name: 'SpellIndex',
  components: {
    Header
  },
  data() {
    return {
      allSpells: [],
      filtered : []
    }
  },
  created() {
    this.fetchUserSpells()
    this.getAllSpells()
  },
  methods: {

    clickHandler(e) {
      const filtered = document.querySelector('.spell-section-filtered')
      const nonfiltered = document.querySelector('.spell-section')
      let currentType = e.target.innerText
      this.filtered = this.allSpells.filter(spell => spell.type === `${currentType}`)
      // console.log(filtered, 'filtered')
      // console.log(nonfiltered, 'nonfiltered')
      filtered.classList.remove('hidden')
      nonfiltered.classList.add('hidden')
      console.log('IMWORKING')
    },
    getAllSpells () {
      fetch('https://www.potterapi.com/v1/spells?key=$2a$10$m4giiYReoHdY5vLc5OsvxOPchfJHMDP0afjPdh/CN03cv/vc0SAl2')
      .then(response => response.json())
      .then(data => this.allSpells = [...this.allSpells, ...data])
    },
    fetchUserSpells () {
      let values = []
      let keys = Object.keys(localStorage)
      let i = keys.length
      while(i--){
      
        values.push(localStorage.getItem(keys[i]))
      }
          values.forEach(value => {
          let parsedItem = JSON.parse(value)
          this.convertToSpell(parsedItem)
          })
      console.log(values, 'IAMValues')
      
  },
  convertToSpell(parsedItem) {
    let newSpell = {
        "_id": parsedItem.id,
        "spell": parsedItem.spellName,
        "type": parsedItem.type,
        "effect": parsedItem.effect,
        "personal": true
    }
    this.allSpells.push(newSpell)
  }
  }   
}




</script>

<style scoped>

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .hidden {
    display: none;
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