<style lang="scss" scoped>

</style>
<template>
  <el-container>
    <Menubar />
    <el-container>
      <el-header>Header</el-header>
      <AppMain />
    </el-container>
  </el-container>
</template>

<script>
import { AppMain, Menubar } from './index.js'
export default {
  components: {
    AppMain,
    Menubar
  },
  created () {
    console.log(AppMain, '--------------')
  }
}
</script>
