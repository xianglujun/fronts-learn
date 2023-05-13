<template>
  <div>
    <button @click="handleLeft">left</button>
    {{ myname }}
    <button v-show="showRight">right</button>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NavBar', 
    props: {
      myname: {
        type: String,
        default: ''
      },
      showRight: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleLeft () {
        console.log('handleLeft')
        this.$emit('event')
      }
    }
  }
</script>
