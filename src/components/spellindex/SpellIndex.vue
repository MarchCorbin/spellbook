<template>
  <ul>
    <li v-bind:key='spell._id' v-for='spell in allSpells'>
     <h3 v-bind:spell='spell'>{{spell._id}}</h3>
    </li>
  </ul>
</template>



<script>
// import Home from '../../views/Home.vue'
export default {
  props: {

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