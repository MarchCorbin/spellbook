<template>
  <h1>{spell.spell}</h1>
</template>

<script>
import SpellIndex from '../spellindex/SpellIndex.vue'

export default {
  name: 'Spell',
  props: [spell] 

}
</script>

<style scoped>

</style>