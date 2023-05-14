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
    <ul> 
      <!-- <li><router-link active-class="router-link-active" to="/films">电影</router-link></li>
      <li><router-link active-class="router-link-active" to="/camera">拍照</router-link></li>
      <li><router-link active-class="router-link-active" to="/center">我的</router-link></li> -->

      <!-- vue-router(4) 声明式导航 -->
      <router-link v-slot="{ navigate, isActive }" to="/films" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">电影</li>
      </router-link>
      <router-link v-slot="{ navigate, isActive }" to="/camera" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">拍照</li>
      </router-link>
      <router-link v-slot="{ navigate, isActive }" to="/center" custom>
        <li :class="isActive ? 'router-link-active' : ''" @click="navigate">我的</li>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  document.documentElement.style.frontSize = document.documentElement.clientWidth / 750 * 16 + 'px'
  // import NavBar from './components/NavBar'
  // import SideBar from './components/SideBar'
  // import Vue from 'vue'
  // Vue.component('NavBar', NavBar)
  export default {
    components: {
    // NavBar,
    // SideBar
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

ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid gray;

  li {
    width: $width;
    flex: 1;
    border-right: 1px solid gray;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  li:hover {
    background-color: green;
    cursor: pointer;
  }
}

.router-link-active {
  color: white;
  font-weight: bold;
  background-color: gray;
}
</style>
