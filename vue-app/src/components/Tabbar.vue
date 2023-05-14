<template>
  <footer>
    <ul> 
      <!-- <li><router-link active-class="router-link-active" to="/films">电影</router-link></li>
      <li><router-link active-class="router-link-active" to="/camera">拍照</router-link></li>
      <li><router-link active-class="router-link-active" to="/center">我的</router-link></li> -->

      <!-- vue-router(4) 声明式导航 -->
      <router-link v-slot="{ navigate, isActive }" to="/films" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">
          <i class="iconfont icon-EURO"></i>
          <span>电影</span>
        </li>
      </router-link>
      <router-link v-slot="{ navigate, isActive }" to="/camera" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">
          <i class="iconfont icon-setting"></i>
          <span>拍照</span>
        </li>
      </router-link>
      <router-link v-slot="{ navigate, isActive }" to="/center" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate"> 
          <i class="iconfont icon-poweroff"></i>
          <span>我的</span>
        </li>
      </router-link>
    </ul>
  </footer> 
</template>
<script>
  import '@/assets/iconfont/iconfont.css'
  export default {}
</script>
<style lang="scss" scoped>
// footer {
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     width: 100%;
// }

.router-link-active {
  font-weight: bold;
  color: orange;
}

ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 1px solid lightgray;

  li {
    flex: 1;
    text-align: center;
    height: 3.125rem;
    line-height: 3.125rem;
    display: flex;
    flex-direction: column;
    padding: 5px;

    span {
        line-height: 1.5625rem;
        font-size: 1rem;
    }
    i {
        line-height: 1.5625rem;
        font-size: 1.25rem;
    }
  }

  li:hover {
    color: orange;
    cursor: pointer;
  }
}
</style>
