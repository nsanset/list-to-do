<template>
    <div class="TaskList">
        <TaskHeader/>
        <taskForm/>
        <Task/>
    </div>
</template>

<script>
import TaskHeader from '@/components/TaskHeader.vue'
import taskForm from '@/components/taskForm.vue'
import Task from '@/components/Task.vue'
import { mapState } from 'vuex'
export default {
  components: {
    TaskHeader,
    taskForm,
    Task
  },
  computed: {
    ...mapState([
      'taskLists',
      'todos'
    ])
  }
}
</script>

<style lang="scss">
.TaskList {
    width: 702px;
    background: #ffffff;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #abafa2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 7px 8px -7px #000000;
    margin-bottom: 40px;
}
</style>
