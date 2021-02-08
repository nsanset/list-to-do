<template>
    <div class="taskHeader">
        <div class="taskHeader--iconList">
            <font-awesome-icon icon="th-list"/>
        </div>
        <div class="taskHeader--title">
            <h1>New List</h1>
        </div>
        <div class="taskHeader--buttons">
            <ul>
                <li>
                    <div class="taskHeader--buttons--pencil">
                        <font-awesome-icon icon="pencil-alt"/>
                    </div>
                </li>
                <li>
                    <div class="taskHeader--buttons--trash">
                        <font-awesome-icon icon="trash-alt"/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.taskHeader--buttons {
  display: inline-block;
}
.taskHeader--buttons > ul {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.taskHeader:hover > ul {
  visibility: visible;
  opacity: 1;
}
ul li {
  display: inline;
}
.taskHeader {
    position: relative;
    height: 52px;
    background: linear-gradient(0deg, rgba(58,91,155,1) 0%, rgba(82,129,182,1) 100%);
    border: 1px solid #315589;
}
.taskHeader--iconList {
    position: absolute;
    width: 20px;
    height: 90px;
    left: 8px;
    top: 17px;
    height: 30px;
}
.taskHeader--title {
    text-align: left;
    position: absolute;
    width: 300px;
    height: 90px;
    left: 27px;
    height: 30px;
}
.taskHeader--iconPencil {
    position: absolute;
    width: 20px;
    height: 90px;
    right: 30px;
    top: 17px;
    height: 30px;
}
.taskHeader--iconTrash {
    position: absolute;
    width: 20px;
    height: 90px;
    right: 8px;
    top: 17px;
    height: 30px;
}
h1 {
  position: relative;
  top: 13px;
  margin: 0px;
  padding: 0px 0px 0px 10px;
  color: #fff;
  font-size: 20px;
}
.taskHeader--buttons {
  position: absolute;
  right: 15px;
  top: 0px;
  height: 50px;
  color: #999999;
}
.taskHeader--buttons--pencil {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0px 5px 0px 5px;
}
.taskHeader--buttons--trash {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0px 5px 0px 5px;
}
.taskHeader--buttons > ul {
  list-style: none;
  visibility: hidden;
  padding: 1px 1px 1px 1px;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.taskHeader:hover ul {
  visibility: visible;
  opacity: 1;
  cursor: pointer;
}
ul li{
  display: inline;
}
</style>
