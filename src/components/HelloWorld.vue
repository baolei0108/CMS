<template>
  <div class="hello">
      helloWorld组件 {{title | capitalize}} {{name | capitalize}}

      <button v-on:click="createNumber">{{total}}</button>

      <input v-model="childvalue" placeholder="接收child2传来的值"/>



  </div>
</template>

<script>
import eventBus from '../evenBus.js'


export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      total: 0,
      num:2,
      childvalue: ''
    }
  },
  props:{
    title: {
      type: String,
      default: 'bao'
    },
    name
  },

  methods:{
    createNumber(){
      this.total++;
      this.$emit('up', this.num)
    }
  },

  mounted(){
     let _this = this;
     eventBus.$on('key', function(value){
          console.log('收到');
          console.log(value);

          _this.childvalue = value;

      })
  },


  filters: {
      capitalize: function (value) {
        if (!value) return''

        else return value.toUpperCase();


      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 400px;
  height: 100px;
  border: 1px solid red;
}
</style>
