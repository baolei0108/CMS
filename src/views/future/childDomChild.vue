<template>
  <div>
   <p>coo:{{coo}}</p>
   <p>provide&inject隔代组件通信: {{name}}</p>
   <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>
<script>
  export default {
    name:'childDomChild',
    props:["coo"],
    inject: ['name'],
    inheritAttrs:false,
    methods:{
        startUpRocket(){
            this.$emit("upRocket");
            console.log("startUpRocket")
        }
   }
  }
</script>