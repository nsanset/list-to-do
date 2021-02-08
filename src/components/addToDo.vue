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
      this.$store.dispatch('addToDoLists', tasksList)
    }
  }
}
</script>

<style lang="scss">
button {
  position: relative;
  background: linear-gradient(0deg, rgba(58,91,155,1) 0%, rgba(82,129,182,1) 100%);
  color: white;
  width: 210px;
  height: 45px;
  border-radius: 3px;
  border: 2px solid #626764;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
}
</style>
