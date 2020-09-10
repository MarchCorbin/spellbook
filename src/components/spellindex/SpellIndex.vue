<template>
  <h1>This is the Spell Index Page!</h1>
</template>



<script>
// import Home from '../../views/Home.vue'
export default {
  name: 'SpellIndex',
  data() {
    return {
     allspells: {}
    }
  },
  created() {
    this.getAllSpells()
  },

  methods: {
    getAllSpells() {
      fetch('https://www.potterapi.com/v1/spells?key=$2a$10$m4giiYReoHdY5vLc5OsvxOPchfJHMDP0afjPdh/CN03cv/vc0SAl2')
      .then(response => response.json())
      .then(response => console.log('aksdfjakljf', response))
      .then(data => this.allspells = data)
    }
  }
}

</script>