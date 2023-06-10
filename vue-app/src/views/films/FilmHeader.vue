<template>
  <ul class="tabbar">
    <router-link
      v-slot="{ navigate, isActive }"
      to="/films/nowplaying"
      class="tabitem" custom
    >
      <li
        :class="isActive ? 'router-link-active' : ''"
        @click="navigate"
      >
        正在热映
      </li>
    </router-link>
    <router-link v-slot="{ navigate, isActive }" class="tabitem" to="/films/onway" custom>
      <li
        :class="isActive ? 'router-link-active' : ''"
        @click="navigate">
        即将上映
      </li>
    </router-link>
  </ul>
</template>
<style lang="scss" scoped>
.tabbar {
  display: flex;
  list-style: none;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  width: 100%;

  .tabitem {
    flex: 1;
    border-right: 1px solid lightgray;
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

  .router-link-active {
    color: orange
  }
}
</style>
