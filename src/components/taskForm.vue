<template>
    <div class="form">
        <form action="#">
            <div class="form--iconPlus">
              <font-awesome-icon icon="plus"/>
            </div>
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

<style lang="scss">
.form {
  position: relative;
  background: #A9A9A9;
  height: 50px;
}
.form--iconPlus {
  position: absolute;
  font-size: 25px;
  left: 15px;
  top: 10px;
  color: #5a9172;
}
input[type=text], select {
  position: relative;
  top: 8px;
  left: 20px;
  width: 530px;
  padding: 6px 3px;
  margin: 1px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}
.form button {
  position: relative;
  top: 8px;
  left: 20px;
  background: linear-gradient(180deg, rgba(148,203,173,1) 0%, rgba(82,137,106,1) 100%);
  color: white;
  width: 108px;
  height: 30px;
  border-radius: 3px;
  border: 2px solid #626764;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

</style>
