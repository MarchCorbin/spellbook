<template>
  <form>
    <Header />
    <input v-model="inputValue" />
    <button>Submit!</button>

 
  <h1>Create a Spell Page</h1>
 
  </form>
</template>

<script>
import Header from '../header/Header.vue'
export default {

    name: 'CreateSpell',
    components: {
        Header
    },
    data() {
      return {
        inputValue: ''
      }
    }
}
</script>