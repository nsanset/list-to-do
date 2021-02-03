<template>
    <div class="form">
        <form action="#">
            <input type="text">
            <button @click="addTask">{{buttonText}}</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Add task'
    }
  }
}
</script>
