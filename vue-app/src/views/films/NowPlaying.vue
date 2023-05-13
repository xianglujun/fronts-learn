<template>
  <div>
    <div v-for="(data,index) in dataList" :key="index">
      <a @click="showDetails(data)">{{ data }}</a>
    </div>
  </div>
</template> 
<script>
  export default {
    data: function () {
      return { 
        dataList: ['1111', '2222', '333333333']
      }
    },
    methods: {
      showDetails (data) {
        //编程式路由
        // this.$router.push(`/films/detail/${data}`)

        // 通过路由名称跳转
        this.$router.push({
          name: 'filmDetail',
          params: {
            filmId: data
          }
        })
      }
    }
  }
</script>
