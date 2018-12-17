<template>
    <div>
        <image-viewer-vue
                v-if="imageViewerFlag"
                @closeImageViewer="imageViewerFlag = false"
                :imgUrlList="imgUrlList"
                :index="currentIndex"
                :title="title"
                :closable=true
                :cyclical=false>
        </image-viewer-vue>
    </div>
</template>
<script>
  import bus from '../untils/bus'

  export default {
    data() {
      return {
        imageViewerFlag: false,
        currentIndex: 0,
        title: 'Фото',
        imgUrlList: ['url1','url2','url3']
      }
    },
    created() {
      bus.$on('img-viewer', this.handleViewer)
    },
    beforeDestroy(){
      bus.$off('img-viewer', this.handleViewer)
    },
    methods:{
      handleViewer(imgs) {
        this.imgUrlList = imgs
        this.imageViewerFlag = true
      }
    }
  }
</script>
