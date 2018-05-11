<template>
  <div id="app">
    <button @click="onBtnClick">get json</button>
    <div>{{ajax_result}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data: function(){
    return {
      ajax_result: ''
    }
  },
  methods:{
    onBtnClick:function(){
      var that = this;
      axios.get('https://api.sunrise-sunset.org/json',{
        params:{
          lat: '37.239952',
          lng: '127.081793',
          date: '2018-05-12',
          formatted: '0'
        }
      })
      .then(function(response){
        that.ajax_result=response.data;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
