<template>
  <nav>
    <h1>The Standard Book of Spells by Miranda Goshawk: Year 1</h1>
    <!-- <img src='' class='header-logo' alt='Hogwarts spell book' /> -->
    <div class='button-holder'>
      <router-link to='/createspell'>
        <button>Create a New Spell</button>
      </router-link>
      <router-link to='/spellindex' >
        <button>Spell Index</button>
      </router-link>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  nav {
    border-bottom: black solid 2px;
  }

  .button-holder {
    padding: 13px;
  }

  .router-link-active {
    box-shadow: inset #000000 0 0 60px;
    text-shadow: 0px -2px 4px #fff, 
  }
</style>