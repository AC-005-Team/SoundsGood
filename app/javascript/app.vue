<template>
  <div id="app">
    <header-component />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/shared/header';
import FooterComponent from './components/shared/footer';

export default {
  components: {
  HeaderComponent,
  FooterComponent,
},
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: rgb(124, 107, 231);
}
</style>
