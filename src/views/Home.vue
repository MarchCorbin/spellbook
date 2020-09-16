<template>
  <div class='parchment'>
    <h1 class="title">The Standard Book of Spells by Miranda Goshawk: Year 5 edition</h1>
    <div class='button-holder'>
      <router-link class='nav-button' to='/createspell'>
        <button class='create-a-spell'>Create a Spell!</button>
      </router-link>
      <router-link class='nav-button' to='/spellindex'>
        <button class='view-spells'>View Spells!</button>
      </router-link>
    </div>
    <div class='icon-holder' >
      <img class='icon' src='../srcassets/Charm.png' />
      <img class='icon' src='../srcassets/Spell.png' />
    </div>
    <div class='icon-holder'>
    <img class='icon' src='../srcassets/Curse.png' />
      <img class='icon' src='../srcassets/Hex.png' />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
  },
}
</script>
<style>

* {
  font-family: 'IM Fell English', serif;
}

.button-holder {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

body {
  background: url('../srcassets/parchment.jpg') no-repeat center center fixed;
  background-size: 110%;
}

a {
  margin: .5em;
}

.title {
  font-size: 3em;
  margin-bottom: 1em;
}

.icon-holder {
  display: flex;
  justify-content: center;
}

.icon {
  width: 16em;
  height: 16em;
}

button {
  background: transparent;
  font-size: 36px;
  padding: 1em;
}

@media screen and (max-width: 950px){
  body {
    background-size: 60em;
  }

  button {
    margin: .3em;
    min-width: 8em;
  }

  .button-holder {
    justify-content: space-around;
    display: flex;
    flex-direction: column;
  }
}
</style>