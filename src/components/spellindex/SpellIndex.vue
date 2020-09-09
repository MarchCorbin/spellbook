<template>
  <h1>This is the Spell Index Page!</h1>
</template>



<script>
// import Home from '../../views/Home.vue'
export default {
  name: 'spellindex',
  data() {
    return {
     allspells: {}
    }
  },
  methods: {
    getAllSpells() {
      fetch('https://www.potterapi.com/v1/spells/')
      .then(response => response.json())
      .then(data => this.allspells = data)
    }
  }
}

</script>