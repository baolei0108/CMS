<template>
   <div>
     使用$attrs 和$listen隔代组件通信

     <child-dom
      :foo="foo"
      :coo="coo"
      :bao="bao"
      v-on:upRocket="reciveRocket"
     >
     </child-dom>


   </div>

    

</template>


<script>

import Vue from 'vue'
import childDom from "./ChildDom.vue";

export default {
  name: 'Dashboard',
  components:{
    childDom
  },
  provide: {
    name: '浪里行舟'
  },
  data(){
      return {
                foo:"Hello, world11",
                coo:"Hello,rui222",
                bao: "hello bao"
              }
  },

  methods:{
   reciveRocket(){
      console.log("reciveRocket success")
   }
 }

}

</script>