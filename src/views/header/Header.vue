<template>
  <nav>
    <h1>The Standard Book of Spells by Miranda Goshawk: Year 1</h1>
    <!-- <img src='' class='header-logo' alt='Hogwarts spell book' /> -->
    <div class='button-holder'>
      <router-link to='/createspell'>
        <button>Create a New Spell</button>
      </router-link>
      <router-link to='/' >
        <button>Search</button>
      </router-link>
    </div>
  </nav>
</template>


<script>
export default {
  
}
</script>

<style scoped>
  nav {
    border: black solid 1px;
  }
</style>