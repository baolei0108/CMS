<template>

  <el-container style="height: 700px; border: 1px solid #eee">

    <Sidebar />

    <div class="rightContent">

        <Header />

        <AppMain />

    </div>


</el-container>


</template>


<script>
import axios from 'axios'

import store from '@/store'

import router from '@/router'

import Header from './Header'
import Seclist from './Seclist'
import Sidebar from './Sidebar'

import AppMain from './AppMain'

export default {
  name: '',
  components:{
    Header,
    AppMain,
    Seclist,
    Sidebar
  },
  data() {
    return {
      menuList: []
    }
  },


  methods:{


  },


  created() {

    console.log('router:')
    console.log(router);

    console.log('home router')

    console.log(store.getters.routes);


    this.menuList = store.getters.routes;
    console.log(this.menuList);




  }
}
</script>


<style>

.home{
  border: 1px solid red;
}


.sidebar{

}

.rightContent{
  width:100%;
}

</style>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
