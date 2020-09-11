<template>
  <nav>
    <div class='header-title'>
      <router-link  to='/'>
        <button class='header-title'>The Standard Book of Spells by Miranda Goshawk: Year 1</button>
      </router-link>
        <img src='../../assets/illuminati.png' class='header-logo' alt='Hogwarts spell book' />
    </div>
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

  .header-title {
    text-decoration: none;
    border: none
  }

  .router-link-active {
    box-shadow: inset #000000 0 0 60px;
    text-shadow: 0px -2px 4px #fff;
  }
</style>