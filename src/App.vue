<template>
  <div id="app">
    <div v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem v-bind:name="todo.name" v-bind:date="todo.date" v-bind:done="todo.done"/>
    </div>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem";
export default {
  name: "app",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [
        { id: 1, name: "uno", done: true, date: "03/03/19" },
        { id: 2, name: "dos", done: false, date: "04/04/19" },
        { id: 3, name: "tres", done: false, date: "05/05/19" }
      ]
    };
  },
  methods: {}
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
