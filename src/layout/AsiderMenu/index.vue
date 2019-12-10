<style lang="scss" scoped>
.left-main {
  min-width: 120px;
  height: 100vh;
  background-color: #545c64;
  color: #fff;
  .log {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  .menu {
    height: calc(100vh - 100px);
    width: 100%;
  }
  .Reversal {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #eee;
  }
}
</style>
<template>
  <div class="left-main">
    <div class="log">log
      <img :src="{}" >
    </div>
    <div class="menu" >
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航1</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航2</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航3</span>
      </el-menu-item>
    </el-menu>
    </div>
    <div class="Reversal">
      <i :class="isReversal ? 'el-icon-s-fold':'el-icon-s-unfold'"></i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isReversal: false
    }
  },
  computed: {

  }
}
</script>
