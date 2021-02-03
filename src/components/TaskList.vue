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
