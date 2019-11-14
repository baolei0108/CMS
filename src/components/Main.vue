<template>
  <div class="main">
     <div>
         {{mtotal}}
     </div>
     <HelloWorld :title="title" :name="name"  v-on:up="upFun"></HelloWorld>
     <Child2></Child2>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Child2 from '@/components/Child2'

export default {
  name: 'main',
  data () {
    return {
      msg: 'main',
      title: 'bao',
      name: 'lei',
      mtotal: 0
    }
  },
  components: {
    HelloWorld: HelloWorld,
    Child2: Child2
  },

  methods: {
    upFun(num) {
      this.mtotal += num

    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width: 1000px;
  height: 600px;
  border:1px solid black;
}



</style>
