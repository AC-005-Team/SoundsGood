<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "分離的components寫法"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: rgb(124, 107, 231);
}
</style>
