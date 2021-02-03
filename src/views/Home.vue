<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <taskForm v-for="task in taskLists" :key="task"/> {{task}}
    <addToDo :text="buttonText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import addToDo from '@/components/addToDo.vue'
import taskForm from '@/components/taskForm.vue'
import { mapState } from 'vuex'
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
  },
  computed: {
    ...mapState([
      'taskLists'
    ])
  }
}
</script>
