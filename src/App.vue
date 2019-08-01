<template>
    <div id="app">
        <HelloWorld/>
        <span class="text">ABCDEFG</span>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import {mapGetters} from 'vuex'
  const getters = {
      a: () => 1,
      b: () => 2,
      c: () => 3
    }
  function fn(keys) {
    const data = {}
    keys.forEach(key => {
      if(getters.hasOwnProperty(key)){
        data[key] = getters[key]
      }
    })
    return data
  }
  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    computed:{
      ...mapGetters(['age']),
      ...fn(['a','b','c'])
    },
    mounted() {
      this.$store.dispatch('setName', 23).then(() => {
        console.log(this.a,this.b,this.c)
      })
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style scoped lang="scss">
    @import "./assets/styles/global.scss";

    .text {
        font-family: 'Days One';
        font-size: px2rem(20);
    }
</style>
