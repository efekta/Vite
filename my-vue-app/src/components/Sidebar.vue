<template>
  <div class="aside">
    <ul class="nav-list">
      <li class="nav-list__item">
        <i class="el-icon-menu"></i>
        <span class="nav-list__text">Navigator 1</span>
      </li>
      <li class="nav-list__item">
        <i class="el-icon-s-custom"></i>
        <span class="nav-list__text">Navigator 2</span>
      </li>
      <li class="nav-list__item">
        <i class="el-icon-document"></i>
        <span class="nav-list__text">Navigator 3</span>
      </li>
      <li class="nav-list__item">
        <i class="el-icon-setting"></i>
        <span class="nav-list__text">Navigator 4</span>
      </li>
      <li class="nav-list__item">
        <i class="el-icon-s-grid"></i>
        <span class="nav-list__text">Navigator 5</span>
      </li>
    </ul>
<!--    <el-radio-group v-model="isCollapse">-->
<!--      <el-radio-button :label="false">exp</el-radio-button>-->
<!--      <el-radio-button :label="true">col</el-radio-button>-->
<!--    </el-radio-group>-->
<!--    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">-->
<!--      <el-submenu index="1">-->
<!--        <el-menu-item slot="title">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span slot="title">Navigator One</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item-group>-->
<!--          <span slot="title">Group One</span>-->
<!--          <el-menu-item index="1-1">item one</el-menu-item>-->
<!--          <el-menu-item index="1-2">item two</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="Group Two">-->
<!--          <el-menu-item index="1-3">item three</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-submenu index="1-4">-->
<!--          <span slot="title">item four</span>-->
<!--          <el-menu-item index="1-4-1">item one</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->

<!--      <el-menu-item index="2">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span slot="title">Navigator Two</span>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="3" disabled>-->
<!--        <i class="el-icon-document"></i>-->
<!--        <span slot="title">Navigator Three</span>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="4">-->
<!--        <i class="el-icon-setting"></i>-->
<!--        <span slot="title">Navigator Four</span>-->
<!--      </el-menu-item>-->
<!--    </el-menu>-->
<!--  -->
  </div>
</template>

<script>
export default {

  data () {
    return {
      // isCollapse: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.aside {*/
/*  align-items: flex-start;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*}*/

.nav-list__item {
  display: flex;
  cursor: pointer;
  max-width: 64px;
  min-width: 64px;
  padding: 15px;
  position: relative;
}

.nav-list__text {
  background: #000;
  border-radius: 4px;
  bottom: 0;
  color: #fff;
  display: block;
  left: 0;
  margin-left: 40px;
  opacity: 0;
  padding: 5px;
  position: absolute;
  visibility: hidden;
  z-index: 2;
  width: 0;
}

.nav-list__item:hover {
  max-width: 300px;
}
.nav-list__item:hover .nav-list__text {
  opacity: 1;
  visibility: visible;
  width: auto;
}

@media (min-width: 1200px) {
  .nav-list__item {
    align-items: center;
    min-width: 300px;
  }

  .nav-list__text {
    background: transparent;
    border-radius: 0;
    color: #000;
    margin-left: 0;
    opacity: 1;
    position: static;
    visibility: visible;
    width: auto;
  }
}
  /*.el-menu {*/
/*  border: 0;*/
/*}*/

.el-menu--collapse {
  /*min-width: 64px;*/
}

@media (min-width: 1200px) {
  .el-menu--collapse {
    /*min-width: 300px;*/
  }
}

/*@media (min-width: 1200px) {*/
/*  .el-menu--collapse>.el-menu-item span, .el-menu--collapse>.el-submenu>.el-submenu__title span {*/
/*    height: auto;*/
/*    width: auto;*/
/*    overflow: hidden;*/
/*    visibility: visible;*/
/*    display: inline-block;*/
/*  }*/
/*}*/
</style>
