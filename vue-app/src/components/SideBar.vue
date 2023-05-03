<template>
  <div>
    <ul>
      <li v-for="item in datalist" :key="item.videoId">{{ item.nm }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SideBar',
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/data/maoyan.json')
      .then(res => res.data.data)
      .then(res => {
        this.datalist = res.hot
      })
  }
}
</script>
<style lang="scss" scoped>
$width: 300px;

ul {
  li {
    background-color: gray;
  }

  li:hover {
    background-color: yellow;
    color: green;
    font-weight: bold;
  }
}
</style>
