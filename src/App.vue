<template>
  <div id="app">
    <div class="header"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss">
body {
  background-image: url("./img/bacground.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  z-index: 1;
}
.header{
  position: absolute;
  display:block;
  position:fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 6px;
  background: #333333;
  z-index: 10;
  background-attachment: fixed;
}
.footer{
  position: absolute;
  display:block;
  position:fixed;
  width: 100%;
  left: 0px;
  bottom: 0px;
  height: 6px;
  background: #333333;
  z-index: 10;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
