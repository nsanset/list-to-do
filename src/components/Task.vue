<template>
    <ul class="tasks-list">
      <li v-for="(todo, index) in todos" :key="index">
        <div class="task">
          <div class="task--checkbox">
            <input type="checkbox">
        </div>
        <div class="task--text">
            <input
                v-if="todo.edit"
                v-model="todo.title"
                @blur="todo.edit = false; $emit('update')"
                @keyup.enter="todo.edit=false; $emit('update')"
                v-focus
            >
            <div v-else>
                <label> {{todo.title}} </label>
            </div>
        </div>
        <div class="task--buttons">
            <div class="task--buttons--sort">
                <font-awesome-icon icon="sort"/>
            </div>
            <div class="task--buttons--pencil" @click="todo.edit = true;">
              <font-awesome-icon icon="pencil-alt"/>
            </div>
            <div class="task--buttons--trash" @click="removeTask(index)">
                  <font-awesome-icon icon="trash-alt"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    editTodo: function (todo) {
      this.editedTodo = todo
    },
    presskey (event) {
      console.log(event)
    },
    removeTask (index) {
      console.log(index)
      this.$store.dispatch('removeTodos')
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
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
.tasks-list {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
}
.task {
  position: relative;
  height: 50px;
  cursor: pointer;
  border-top: 2px solid #e7ebea;
}
.task--checkbox {
  position: relative;
  left: 0px;
  top: 0px;
  text-align: left;
  width: 46px;
  height: 50px;
  margin-right: 0px;
}
.task--checkbox::before {
  content: "";
  border-left: 2px solid #efdadf;
  height: 100%;
  position: absolute;
  right: 0px;
  margin-left: 1px;
  top: 0;
}
.task--checkbox::after {
  content: "";
  border-left: 2px solid #efdadf;
  height: 100%;
  position: absolute;
  right: 4px;
  margin-left: 1px;
  top: 0;
}
.task--checkbox input {
  position: relative;
  left: 10px;
  top: 15px;
}
.task--text {
  position: absolute;
  padding-top: 15px;
  left: 45px;
  padding-left: 17px;
  top: 0px;
  text-align: left;
  width: 520px;
  height: 35px;
  color: #999999;
  border-right: 2px solid #e7ebea;
}
.task--buttons {
  position: absolute;
  right: 15px;
  top: 15px;
  height: 50px;
  color: #999999;
}
.task--buttons--sort {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0px 5px 0px 5px;
}
.task--buttons--pencil {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-left: 2px solid #e7ebea;
  border-right: 2px solid #e7ebea;
  margin: 0px 5px 0px 5px;
}
.task--buttons--trash {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0px 5px 0px 5px;
}
.task--buttons {
  padding: 1px 1px 1px 1px;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.task:hover .task--buttons {
  visibility: visible;
  opacity: 1;
}
</style>
