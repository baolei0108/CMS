<template>
  <div class="login">
    <el-form label-width="100px" class="demo-ruleForm" ref="loginForm" :model="loginForm" :rules="loginRules">

    <el-form-item label="账号" prop="name">
      <el-input placeholder="请输入账号" v-model="loginForm.name" ref="name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="loginForm.pass" placeholder="请输入密码" ref="pass"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="goLogin">登录</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  data() {
    return {
      loginForm: {
        name: '',
        pass:''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      }

    }
  },


  methods:{
    goLogin(){
        if(!this.loginForm.name) return
        if(!this.loginForm.pass) return

        //this.$refs.loginForm.validate  需要注意绑定元素
        //1、el-form rules，model属性绑定，ref标识
        //2、el-form-item prop属性绑定
        this.$refs.loginForm.validate( valid => {
          //  console.log(valid);
           if(valid) {
            //  axios.get('/user/userinfo')
            //   .then(({data})=>{
            //     //打印mock data
            //     console.log('数据')
            //     console.log(data);

            //   });
            // console.log(this.$store)


            //测试 清一下roles
             this.$store.commit('SET_ROLES', '')
            //根据表单去获取用户信息 并加信息存入token
            this.$store.dispatch('login', this.loginForm)
               .then(() => {
                 console.log('yes')
                if(this.loginForm.name === '1' && this.loginForm.pass === '1') {
                  this.$router.push('/Home')
                } else {
                  this.$message.error('账号或密码错了哦！！！');
                }

               })
               .catch( () => {
                 console.log('no');

               })


           } else {
             console.log('no');
             return false;

           }

        })









    }

  }
}
</script>

<style>
.login{
  width: 400px;
  /* height:300px; */
  padding: 10px 10px;
  border: 1px solid #cccccc;
  text-align: center;

  margin: 0 auto;
}

</style>
