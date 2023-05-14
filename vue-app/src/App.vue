<template>
  <div id="app">
    <!-- <div>
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
    <SideBar v-show="isShow"></SideBar><div>
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
    <SideBar v-show="isShow"></SideBar><div>
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
    <SideBar v-show="isShow"></SideBar><div>
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
    <SideBar v-show="isShow"></SideBar> -->
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <tabbar></tabbar>
    </footer>
  </div>
</template>

<script>
  import tabbar from '@/components/Tabbar.vue'
  document.documentElement.style.frontSize = document.documentElement.clientWidth / 750 * 16 + 'px'
  // import NavBar from './components/NavBar'
  // import SideBar from './components/SideBar'
  // import Vue from 'vue'
  // Vue.component('NavBar', NavBar)
  export default {
    components: {
      // NavBar,
      // SideBar
      tabbar
    },
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
    }
  }
</script>

<style lang="scss">
$width: 18.75rem;

* {
  padding: 0;
  margin: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  widows: 100%;

  section {
    flex: 1;
  }
}
</style>
