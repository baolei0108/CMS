<template>
  <div class="child2">
      <div>
        {{msg}}
      </div>
      <button @click="getValue">向hellworld传值</button>

      <div>{{totalMarks}}</div>

      <div>
        <p>{{fullName}}</p>
        <p>{{firstName}}</p>
        <p>{{lastName}}</p>

        <button @click = "changeName">computed 测试</button>
      </div>

      <br>
      <div>
        {{obj.value}}
        <button @click = "changeObj">watch 测试</button>
      </div>


  </div>
</template>

<script>
import eventBus from '../evenBus.js'

export default {
  name: 'child2',
  data () {
    return {
      msg: '我是child2',
      total: 0,
      num:2,
      results:[60, 70, 80],
      // fullName: 'dd ee',
      firstName: 'dd1',
      lastName: 'dd1',
      obj: {
        value: "123"
      }
    }
  },


  methods:{
    getValue() {
        console.log('hhhhh');
        eventBus.$emit('key', '12345678');
    },


    changeName(){
         this.fullName = 'eee';
    },


    changeObj(){
      this.obj.value = 'new value3333'
    }


  },


  computed: {
    totalMarks() {
      var total = 0;
      this.results.map(function(value) {
            total+= value;
      })

      return total;
    },
    fullName: {
      get() {
           console.log('get');
           return this.firstName + '___' + this.lastName;
      },

      set(value) {
         console.log('set');
         this.firstName = value;
         this.lastName = value;
      }

    }


  },

  watch: {
    //监听对象属性
    // 'obj.value': function (newval, oldVal) {
    //   console.log(newval);
    // },

    //监听对象
    obj:{
       handler(newval, oldVal){   //注意此处就是handler
          console.log(newval);
      },
      deep:true,
      immediate: true
    }


  },


  // watch: {

  //   firstName: function(val) {
  //      this.fullName = val + ' ' + this.lastName;

  //   },

  //   lastName: function(val) {
  //     this.fullName = this.firstName + ' ' + val;

  //   }

  // }

  // mounted(){
  //   this.msg = ' 我是更新后的 child2'

  // }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child2{
  width: 400px;
  height:300px;
  border:1px solid green;
}
</style>
