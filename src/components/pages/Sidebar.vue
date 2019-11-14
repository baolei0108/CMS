<template>
  <div style="text-align:left;"  class="Leftbar">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">

     <div  v-for="item in menuList"  :key="item.name">


      <el-submenu  index="1"  v-if="hasTwochild(item)">
        <template slot="title">
        <i class="el-icon-message"></i>
        <router-link v-bind:to="item.path"> {{item.name}} </router-link>
        </template>

        <ul >
          <Seclist   v-for="side in item.children" :key="side.name"  :title="side.name"  :path="resolvePath(item.path, side.path)"/>
        </ul>
      </el-submenu>



      <template v-else>
        <el-menu-item>
            <i class="el-icon-message"></i>
            <router-link v-bind:to="item.path"> {{item.name}} </router-link>
        </el-menu-item>
           
      </template>



      </div>



    </el-menu>


  </el-aside>
  </div>
</template>
<script>
import Seclist from './Seclist'
import store from '@/store'

export default {
   name: '',
   components:{
    Seclist

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      total: 0,
      num:2,
      childvalue: ''
    }
  },

   created() {

    this.menuList = store.getters.routes;

  },

  methods: {
    hasTwochild(item){
      if(item.children.length > 1) {
        return true;

      }else {
        return false;
      }

    },


    resolvePath(path1, path2) {
      return path1 + '/' + path2

    }


  }


}
</script>


<style>
.Leftbar{
  background-color: #304156;
  color:#fff;
}

a{
  color:#fff;
}

.el-menu{
  background-color: #304156;
}

.el-aside{
  color:white;
}

  
</style>
