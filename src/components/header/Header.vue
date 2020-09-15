<template>
  <nav>
    <div >
      <router-link class='header-title' to='/'>
          <img src='/assets/illuminati.png' class='header-logo' alt='Hogwarts spell book' />
          <button class='header-title'>The Standard Book of Spells by Miranda Goshawk: Year 1</button>
          <img src='/assets/illuminati.png' class='header-logo' alt='Hogwarts spell book' />
      </router-link>  
      
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

  img {
    width: 16em
  }
  .button-holder {
    padding: 13px;
  }

  button {
        min-width: 9em;
  }
  .header-title {
    text-decoration: none;
    border: none;
    display: flex;
  }

  .router-link-active {
    box-shadow: inset #000000 0 0 60px;
    text-shadow: 0px -2px 4px #fff;
  }

  @media screen and (max-width: 670px) {
    .header-title {
          flex-direction: column;
    align-items: center;
    margin: -36px;
    }
  }

</style>