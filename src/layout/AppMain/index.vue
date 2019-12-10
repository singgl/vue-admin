<style lang="scss" scoped>
.main{
  min-width: 800px;
}
</style>
<template>
  <div class="main">
    <el-scrollbar>
      <router-view :key="path"></router-view>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  watch: {

  },
  computed: {
    path () {
      return this.$route.path
    }
  },
  created () {
    console.log(this.$route, '--------------')
  }
}
</script>
