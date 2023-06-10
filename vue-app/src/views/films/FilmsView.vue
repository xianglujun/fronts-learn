<template>
  <div class="movie">
    <swiper-view
      v-show="datalist.length"
      :key="datalist.length"
      class="bar"
    > 
      <swiper-item
        v-for="(data, index) in datalist"
        :key="index"
      > 
        <span>{{ data }}</span>
      </swiper-item>
    </swiper-view>
    <film-header></film-header>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
  import swiperView from '@/components/SwiperView'
  import swiperItem from '@/components/SwiperItem' 
  import FilmHeader from './FilmHeader.vue'
  export default { 
    components: {
      swiperView, 
      swiperItem, 
      filmHeader: FilmHeader
    },
    data() {
      return {
        datalist: [],
      }
    }, 
    mounted() {
      setTimeout(() => {
        this.datalist = ['222', '3333', '4444', '5555']
      }, 1000)
    },
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

.movie {
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  height: 100%;
  section {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
