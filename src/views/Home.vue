<template>
<div>
<h1 class="title">Hogwarts Spellbook ed.XVLVIIIXV</h1>

<div class='button-holder'>
<router-link to='/createspell'><button>Create a Spell!</button></router-link>
<router-link to='/spellindex'><button>View Spells!</button></router-link>
</div>
</div>
</template>

<script>
// @ is an alias to /src
// import CreateSpell from '../components/createspell/CreateSpell.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
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