<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul class="list">
      <li class="list-item" v-for="task in taskList" :key="task">
        {{ task }}
      </li>
    </ul>
    <taskForm v-for="showTaskForm"/>
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
      'showTaskForm',
      'taskList'
    ])
  }
}
</script>
