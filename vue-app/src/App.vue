<template>
  <div id="app">
    <div>
      <label for="in">输入字符</label>
      <input type="text" id="in" placeholder="输入字符" v-model="myname" />
      <button @click="handleAdd">add</button>
    </div>
    <ul>
      <li v-for="data in datalist" :key="data.id">
        {{ data.task }}
      </li>
    </ul>

    <NavBar myname="你好" :showRight="false" @event="handleShow">
      <div>放在子元素节点中</div>
    </NavBar>
    <SideBar v-show="isShow"></SideBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
// import Vue from 'vue'
// Vue.component('NavBar', NavBar)
export default {
  data () {
    return {
      myname: '',
      datalist: [],
      isShow: true
    }
  },
  methods: {
    handleAdd () {
      this.datalist.push({ id: Math.random(), task: this.myname })
    },
    handleShow () {
      this.isShow = !this.isShow
    }
  },
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style lang="scss">
$width: 300px;

ul {
  li {
    background-color: yellow;
    width: $width;
  }
}
</style>
