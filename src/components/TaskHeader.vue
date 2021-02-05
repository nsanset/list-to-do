<template>
    <div class="taskHeader">
        <div class="taskHeader--iconList">
            <font-awesome-icon icon="th-list"/>
        </div>
        <div class="taskHeader--title">
            <h1>New List</h1>
        </div>
        <div class="taskHeader--iconPencil">
            <font-awesome-icon icon="pencil-alt"/>
        </div>
        <div class="taskHeader--iconCircle">
            <font-awesome-icon icon="minus-circle"/>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.taskHeader {
    position: relative;
    height: 52px;
    background: rgb(82,129,182);
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
.taskHeader--iconCircle {
    position: absolute;
    width: 20px;
    height: 90px;
    right: 8px;
    top: 17px;
    height: 30px;
}
h1 {
    margin: 0px;
    padding: 8px;
    color: #fff;
}
</style>
