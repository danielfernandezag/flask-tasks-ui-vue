<template>
  <div class="item-container">
    <div class="item-name">{{name}}</div>
    <div class="item-content">{{content}}</div>
    <div class="item-date">{{date}}</div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    name: String,
    content: String,
    date: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.item-container {
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  border: solid 1px #52b952;
  background: #7ae77a;
  color: #1f1e1e;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-radius: 8px;
}
div.item-name {
  width: 20%;
}
div.item-content {
  width: 50%;
}
div.item-date {
  width: 30%;
}
</style>
