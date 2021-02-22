<template>
  <div class="home">
    <TaskList v-for="taskList in taskLists" :key="taskList._id"/>
    <addToDo :text="buttonText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import addToDo from '@/components/addToDo.vue'
import TaskList from '@/components/TaskList.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    addToDo,
    TaskList
  },
  data () {
    return {
      buttonText: 'Add TODO List'
    }
  },
  computed: {
    ...mapState([
      'taskLists',
      'todos'
    ])
  }
}
</script>
