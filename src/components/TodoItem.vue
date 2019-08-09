<template>
  <div class="item-container">
    <div class="item-name">{{name}}</div>
    <div class="item-date">{{date}}</div>
    <div class="item-check">
      <input type="checkbox" v-bind:value="name" v-bind:checked="done"> done
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    name: String,
    date: String,
    done: Boolean
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
  width: 50%;
}
div.item-date {
  width: 35%;
}
div.item-check {
  width: 15%;
}
</style>
