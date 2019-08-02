<template>
	<div>
		<el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click="home">3DDX | <span style="font-size : 20px;"><strong class="blue-text">Q</strong>uiz</span></el-menu-item>
		<!-- <el-menu-item index="1">Processing Center</el-menu-item>
		<el-menu-item index="3" disabled>Info</el-menu-item>
		<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item> -->
    <el-menu-item index="4" class="right blue lighten-5" @click="manage">Manage | <span style="font-size : 20px;"><strong class="blue-text">Q</strong>uizs</span></el-menu-item>
        </el-menu>
	</div>
</template>

<script>
export default {

  name: 'Navbar',

  data() {
    return {

    };
  },
  methods :{
    home(){
      this.$router.push('/')
     },
     manage(){
      this.$router.push('/quiz/manage')
     }
  }
};
</script>

<style lang="css" scoped>
</style>
