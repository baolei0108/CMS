<template>
   <div>
      <p>foo:{{foo}}</p>
      <!--<p>attrs:{{$attrs}}</p>-->
      <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
   </div>
</template>


<script>
import childDomChild from './childDomChild';

export default {
 name:'child-dom',
 components:{
    childDomChild
  },
 props:["foo"],
 inheritAttrs:false
}
</script>