<template>
  <button @click="showForm">
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
      const
      this.$store.dispatch('showForm', task list)
    }
  }
}
</script>
