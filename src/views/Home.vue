<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul class="list">
      <li class="list-item" v-for="task in taskList" :key="task">
        {{ task }}
      </li>
    </ul>
    <div class="form" v-show="!showForm">
      <form action="#">
        <input type="text" :value="inputValue">
        <button @click="addTask">Add Task</button>
      </form>
      <h1> {{inputValue}} </h1>
    </div>
<!--     <taskForm v-show="!showForm"/> -->
<!--     <addToDo :text="buttonText"/> -->
    <button @click="showForm = !showForm">{{buttonText}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import addToDo from '@/components/addToDo.vue'
// import taskForm from '@/components/taskForm.vue'
export default {
  name: 'Home',
  components: {
    // addToDo,
    // taskForm
  },
  data () {
    return {
      buttonText: 'Add TODO List',
      showForm: true,
      inputValue: '',
      taskList: ['task1', 'task2']
    }
  },
  methods: {
    addTask () {
      console.log(this.inputValue)
      this.taskList.push(this.inputValue)
    }
  }
}
</script>
