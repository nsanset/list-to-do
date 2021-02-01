<template>
  <div class="form">
    <form action="#">
      <input type="text">
      <button @:click="addTask">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
	methods: {
		addTask () {
			this.taskList.push(this.inputValue)
		}
	}
}
</script>
