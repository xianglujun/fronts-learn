<template>
  <div>
    <div class="bar">我是一个大轮播</div>
    <ul>
      <router-link v-slot="{ navigate, isActive }" to="/films/nowplaying" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">正在热映</li>
      </router-link>
      <li>菜单2</li> 
    </ul>
    <router-view></router-view>
  </div> 
</template>
<style lang="scss" scoped>
.bar {
    height: 300px;
    background-color: yellow;
}

.router-link-active {
    background-color: orange;
}
</style>
