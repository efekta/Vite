<template>
  <main class="main">
    <Sidebar/>
    <Content/>
  </main>
</template>

<style>
.main {
  display: flex;
  margin-top: 50px;
}
</style>

<script>
import Sidebar from './Sidebar'
import Content from './Content'

export default {
  components: {
    Sidebar,
    Content
  }
}
</script>
