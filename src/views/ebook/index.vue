<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookTitle from '../../components/ebook/EbookTitle.vue'
import EbookMenu from '../../components/ebook/EbookMenu.vue'
//import EbookHeader from '../../components/ebook/EbookHeader.vue'
export default {
  name: '',
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu,
    //EbookHeader
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';
</style>
