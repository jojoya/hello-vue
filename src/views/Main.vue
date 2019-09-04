<template>
<!--    <div>首页</div>-->
  <el-container direction="vertical">
    <el-header style="height: 60px">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Header  from "../components/Header";
    export default {
        name: "Main",
        components:{Header}
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #283647;
    color: honeydew;
    text-align: center;
    position: absolute;
    top: 0;   /* 置顶 */
    bottom: 0;
    width: 100%;
  }

  .el-aside {
    background-color: #3D464F; /* #545E6A */
    color: honeydew;
    text-align: center;
    line-height: 160px;
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow: hidden;
    width: 1px;
  }

  .el-main {
    background-color: snow;
    color: black;
    text-align: center;
    line-height: 160px;
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
