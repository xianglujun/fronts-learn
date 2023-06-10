<template>
  <div class="movie-item">
    <div v-for="data in dataList" :key="data.videoId" class="item" @click="showDetails(data.videoId)">
      <img :src="data.img" :alt="data.nm">
      <div class="content">
        <p>{{ data.nm }}</p>
        <p v-if="data.mk">
          观众评分：<span class="score">{{ data.mk }}</span>
        </p>
        <p v-else>
          暂无评分
        </p>
        <p class="actors">{{ data.desc }}</p>
        <p>{{ data.showInfo }}</p>
      </div>
      <div class="buy">
        <button>购票</button>
      </div>
    </div>
    
  </div>
</template> 
<script>
  import axios from 'axios';
  export default {
    data: function () {
      return { 
        dataList: []
      }
    },
    mounted() {
      axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E6%88%90%E9%83%BD&ci=59&channelId=4', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(res => {
          console.log(res.data.data.hot)
          this.dataList = res.data.data.hot
        })
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

<style lang="scss" scoped>
 .movie-item {
  display: flex;
  flex-direction: column;
  margin-left: 1.48rem;
  height: 100%;

  .item {
    width: 100%;
    padding: 0.24rem 0.28rem 0.24rem 0;
    display: flex;
    img {
      max-width: 3.75rem;
    }

    .content {
      flex: 1;
      overflow: hidden;
      margin-left: 0.96rem;
      padding-left: 0.1rem;

      .actors {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      p {
        font-size: 0.26rem;
        color: #666;
        margin-top: 0.12rem;
      }
      .score {
        color: #faaa00;
        font-weight: 700;
        font-size: 0.3rem;
      }
    }

    .content p:nth-child(1) {
      font-size: 16px;
      font-weight: 700;
    }

    .buy {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 60px;
        height: 100%;
        margin: auto;
        margin-right: 0.56rem;

        button {
          display: block;
          background-color: #F03D37;
          color: white;
          font-weight: 700;
          border-radius: .875rem;
          width: 3.375rem;
          height: 1.75rem;
          border-width: 0;
          box-sizing: border-box;
        }
      }
  }
 }
 </style>
