<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);

    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
