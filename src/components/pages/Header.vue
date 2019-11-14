<template>

<div>
<el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看博客</el-dropdown-item>
          <el-dropdown-item>Github</el-dropdown-item>
          <el-dropdown-item>
            <span style="display:block;" @click="Logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

</div>

</template>

<script>
export default {
  name:'',
  data(){
    return {
      a:''
    }

  },
  methods: {
    Logout(){
      console.log('777');
      
      this.$router.push(`/login`);
    }
  }

}
</script>

<style>

</style>
