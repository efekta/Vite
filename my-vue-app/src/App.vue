<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

body {
  color: #2c3e50;
  font-family: 'Merienda', Helvetica, Arial, sans-serif;
  margin: 0;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 100%;
  padding: 0 20px;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
</style>
