<template>
  <div>
    电影详情-{{ filmId }}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        filmId: this.$route.params.filmId
      }
    },
    created () {
      console.log('获取动态路由中的参数:', this.$route.params.filmId)
    }
  }
</script>
