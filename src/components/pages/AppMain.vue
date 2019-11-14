<template>

<div>
 <!-- <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main> -->


    <p>你好</p>

    <router-view></router-view>

</div>

</template>

<script>
import store from '@/store'

export default {

   name: 'AppMain',
   computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      console.log(store)
      return '/foo'
    }
  }

}
</script>

<style>

</style>
