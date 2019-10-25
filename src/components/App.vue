<template>
  <div id="app">
    <NavBar />
    <TaskForm />
    <TaskList v-bind:tasks="tasks" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./NavBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default {
  name: "app",
  components: {
    NavBar,
    TaskList,
    TaskForm
  },
  data: {
    algo: false
  },
  computed: mapState(["tasks", "filter", "keyword", "loading", "selectedTask"]),
  methods: {}
};
</script>

<style>
html,
body,
#root {
  height: 100%;
  padding: 0;
  background: #343a40; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #343a40
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #343a40
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #232526;
  font-weight: 600;
}

.nav-item {
  cursor: pointer;
}
</style>
