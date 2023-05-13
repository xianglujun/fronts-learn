<template>
  <div>
    <p>登陆界面</p>
    <button @click="handleLogin">登录</button>
  </div>
</template>
<script>
  export default {
    props: {
      from: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleLogin () {
        localStorage.setItem('token', '这是登录token信息')
        console.log('登陆完成, 跳转路径', this.from)
        //返回上一个界面
        this.$router.replace(this.from)
      }
    }
  }
</script>
