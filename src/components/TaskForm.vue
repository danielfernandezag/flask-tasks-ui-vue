<template>
  <div>TaskForm</div>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    name: String,
    date: String,
    done: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
