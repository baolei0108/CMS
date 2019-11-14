<template>
  <div class="hello" style="text-align:left;">
     <template>
          <i class="el-icon-message"></i>
          <router-link v-bind:to="path">{{title}}</router-link>
     </template>
      
  </div>
</template>

<script>

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
    path: {
      type: String,
      default: 'bao'
    },
    name

  },

  methods:{
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }

  },

  mounted(){

  }

}
</script>

<style scoped>

</style>
