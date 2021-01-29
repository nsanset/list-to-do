<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <taskForm/>
    <addToDo :text="buttonText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import addToDo from '@/components/addToDo.vue'
import taskForm from '@/components/taskForm.vue'

export default {
  name: 'Home',
  components: {
    addToDo,
    taskForm
  },
  data () {
    return {
      buttonText: 'Add TODO List'
    }
  }
}
</script>
