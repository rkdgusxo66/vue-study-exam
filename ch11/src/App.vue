<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Vue from 'vue'
///////////////////////////////////////////////
// register globally
import MenuIcon from "vue-material-design-icons/menu.vue"
import BitcoinIcon from "vue-material-design-icons/bitcoin.vue"
Vue.component("menu-icon", MenuIcon)
Vue.component("bitcoin-icon",BitcoinIcon)
///////////////////////////////////////////////

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
