<template>
  <button @click="addTodo">
    {{text}}
  </button>
</template>

<script>

export default {
  name: 'addToDo',
  props: {
    text: String
  },
  methods: {
    addTodo () {
      const tasksList = {
        _id: Math.random(1000),
        title: 'New List'
      }
      this.$store.dispatch('addListTask', tasksList)
    }
  }
}
</script>
