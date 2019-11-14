<template>
  <div class="news">
    <div class="content" :bind="projectType">
        早盘的权重主流板块严重分化，地产权重持续压盘，题材股与概念股同步分化，过程中仅有数字货币与电子概念股逆势上涨，但是权重太小，中小创指数同步双双小阴回辙。
        对于当前的大盘，老牛认为：
        1、量价关系支持小波段大盘再度上涨，至少可以确保大盘的相对安全，但是短线大盘很明显受制于昨天的地量上涨限制，甚至诱发出短线小阴回辙；
        2、短线大盘在2956点一线压力沉重，早盘股指虽然瞬间突破2956点，但是迅即掉头向下，并展开持续性的回落，说明在没有利好的刺激推动下暂时2956点难以完成实质性的突破；
        3、最近两周周末连续释放4只IPO，融资开始悄然加速，再加上科创板的个股放行，单单本周就有17只个股申购，市场出现快速失血；另外，还有浙商银行与邮储银行两只巨无霸在等着上市，场内信心受到一定程度的打击。
    </div>


  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'news'
    }
  },
  watch:{
    projectType: function () {
         this.$nextTick(function(){
           let cur = this.$refs['bussinessTypeRef'];
           if(cur){
               this.bussinessHeight = cur.clientHeight;
               console.log(this.bussinessHeight);

           }
         });
       }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content{
  height:600px;
  width:200px;
  border: 1px solid red;
}

</style>
