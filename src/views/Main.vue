<template>
<!--    <div>首页</div>-->
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #545E6A;
    color: honeydew;
    text-align: center;
    line-height: 60px;
    position: absolute; /* 置顶 */
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .el-aside {
    background-color: #3D464F;
    color: honeydew;
    text-align: center;
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow: hidden;
    width: 1px;
  }

  .el-main {
    background-color: #283647;
    color: honeydew;
    text-align: center;
    /*line-height: 160px;*/
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    left: 10%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
