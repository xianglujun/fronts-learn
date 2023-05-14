<template>
  <div>
    <swiper-view v-show="datalist.length" :key="datalist.length" class="bar">
      <swiper-item v-for="(data, index) in datalist" :key="index">
        <span>{{ data }}</span>
      </swiper-item>
    </swiper-view>
    <ul>
      <router-link v-slot="{ navigate, isActive }" to="/films/nowplaying" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">正在热映</li>
      </router-link>
      <li>菜单2</li> 
    </ul>
    <router-view></router-view>
  </div> 
</template>
<script>
  import swiperView from '@/components/SwiperView.vue'
  import swiperItem from '@/components/SwiperItem.vue'
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
