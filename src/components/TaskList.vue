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

export default {
  components: {
    TaskHeader,
    taskForm,
    Task
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
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 7px 8px -7px #000000;
    margin-bottom: 40px;
}
</style>
