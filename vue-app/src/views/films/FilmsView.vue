<template>
  <div>
    <swiper-view v-show="datalist.length" :key="datalist.length" class="bar">
      <swiper-item v-for="(data, index) in datalist" :key="index">
        <span>{{ data }}</span>
      </swiper-item>
    </swiper-view>
    <ul class="tabbar">
      <router-link v-slot="{ navigate, isActive }" to="/films/nowplaying" class="tabitem">
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">正在热映</li>
      </router-link>
      <li class="tabitem">菜单2</li> 
    </ul>
    <router-view></router-view>
  </div> 
</template>
<script>
  import swiperView from '@/components/SwiperView'
  import swiperItem from '@/components/SwiperItem'
  export default {
    components: {
      swiperView,
      swiperItem
    },
    data () {
      return {
        datalist: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.datalist = ['222', '3333', '4444', '5555']
      }, 1000)
    }
  }
</script>
<style lang="scss" scoped>
.bar {
    height: 12.5rem;
    background-color: yellow;
}

.router-link-active {
    background-color: orange;
}
</style>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  list-style: none;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  width: 100%;

  .tabitem {
    flex: 1;
    border-right: 1px solid gray;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .tabitem:last-child {
    border-right-width: 0px;
  }

  .tabitem:hover {
    cursor: pointer;
  }
}
</style>
