<template>
  <button class="addToDo" v-on:click="showForm = !showForm">
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'addToDo',
  props: {
    text: String
  }
}
</script>
