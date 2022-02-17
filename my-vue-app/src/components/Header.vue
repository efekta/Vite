<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <img svg-inline class="logo" src="../assets/im.svg">
        <!--      <VueLogo />-->
      </div>
    </div>
  </header>
</template>

<style>
.header {
  box-shadow: #000 0.1px 0.2px 8px;
  min-height: 30px;
}
.header-wrapper {
  align-items: center;
  display: flex;
  padding: 20px 0;
}
.logo {
  max-width: 100%;
  width: 45px;
}
</style>

<script>
// import VueLogo from '../assets/im.svg'
export default {
  name: 'Header',
  components: {
    // VueLogo
  }
}
</script>
