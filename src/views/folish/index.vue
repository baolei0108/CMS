<template>
  <div>folish

  <button @click="showTkuan">显示弹框</button>

    <div>
        <!--
          Vue.js 提供了一个特殊的元素 <component> 用来动态地挂载不同的组件
          使用 is 特性来选择要挂载的组件
        -->
        <button @click="handleChangView('A')">切换到A</button>
        <button @click="handleChangView('B')">切换到B</button>
        <button @click="handleChangView('C')">切换到C</button>
        
        <!-- 失活的组件将会被缓存！ 会保留上一个组件的选择状态-->
        <keep-alive> 
           <component :is="currentView"></component>
        </keep-alive>
    </div>
  </div>

  
</template>


<script>

import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'Dashboard',
  components: {
            comA: {
                template: '<div><select><option>1111</option><option>2222</option><option>3333</option></select></div>'
            },
            comB: {
                template: '<div>组件B</div>'
            },
            comC: {
                template: '<div>组件C</div>'
            }
  },
 
  data(){
    return {
       currentView: 'comA'
    }
           
  },
  

  methods: {
    showTkuan() {
        //显示弹框
        this.$MessageBox({
            title:'提示',
            content:'此操作将删除数据，是否继续？'
          }).then(()=>{
            console.log('删除')
          }).catch(()=>{
            console.log('取消删除')
          })

    },

    handleChangView: function (component) {
          this.currentView = 'com' + component;
    }


  },

  mounted() {
    //演示跨域请求接口
    axios.get('api/app.php?m=App&c=Index&a=index')
    .then(function(res) {
      console.log(res)

    })
  },

}

</script>
