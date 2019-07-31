<template>
  <div class="hello">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.book = new Epub('/2014_Book_Self-ReportedPopulationHealthA.epub')
    this.book.renderTo('read',{
      width: window.innerWidth,
      height: window.innerHeight
    }).display()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
