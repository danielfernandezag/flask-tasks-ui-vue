<template>
  <div>
    <div>TaskList</div>
    <div v-for="task in tasks" v-bind:key="task.id">
      <TaskItem v-bind:name="task.name" v-bind:content="task.content" v-bind:date="task.date" />
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  name: "TaskList",
  components: {
    TaskItem
  },
  props: {
    tasks: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
