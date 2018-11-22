<template>
    <div class="container product">
        <div class="row">
            <div class="col-md-12 mt-3">
                <breadcrumb :data="productPath"/>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-md-5">
                <div style="height: 300px;">
                    <img :src="imgsPath[imgPathActive]" alt="">
                </div>
                <carousel :perPageCustom="[[480, 2], [768, 3]]"
                          :scrollPerPage="true" :navigationEnabled="true"
                          paginationColor="#474747">
                    <slide v-for="(item,index) in imgsPath"
                           :data-index="index"
                           @slideClick="handleSlideClick"
                           :key="item.id">
                        <div  style="padding: 10px;">
                            <img class="carousel__img"
                                 :class="{'slide-active':imgPathActive == index}"
                                 :src="item"
                                 alt="slide img">
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="col-md-7">
                <h3>{{product.name}}</h3>
                <product-block-info name="Короткий опис" :value="product.shortDescription"/>
                <product-block-info name="Повний опис" :value="product.description"/>
                <product-block-info name="Характеристики" :not-padding="true">
                    <el-row :gutter="10" type="flex" justify="space-between" style="flex-wrap: wrap">
                        <el-col v-for="(item, index) in product.productValues" :key="index" :span="11" class="product__tag">
                            <div>{{item.key}}1</div>
                            <div>{{item.value}}2</div>
                        </el-col>
                    </el-row>
                </product-block-info>
                <hr>
                <div class="d-flex align-items-center">
                    <div>
                        <strong>Ціна: {{product.price}}</strong>
                    </div>
                    <div class="ml-auto d-flex">
                        <el-button class="d-block" type="success">Купити в один клік</el-button>
                        <el-button class="d-block" type="success">Купити</el-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import ProductBlockInfo from '../components/ProductInfoBlock'
  import Breadcrumb from '../components/Breadcrumb'

  export default {
    name: 'Product',
    components: {
      Breadcrumb,
      ProductBlockInfo
    },
    data() {
      return {
        product: {},
        productPath:[],
        imgsPath: [],
        imgPathActive: 0,
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    created() {
      this.getProduct(this.$route.params.id)
    },
    methods: {
      handleSlideClick(dataset) {
        console.log(dataset)
        this.imgPathActive = dataset.index
      },
      getProduct(id) {
        this.$api(`/products/${id}`)
          .then(res => {
            this.product = res.data
          })
        this.$api(`/products/${id}/path`)
          .then(res => {
            this.productPath = res.data.reverse()
          })
        this.$api(`/products/${id}/images`)
          .then(res => {
            this.imgsPath = res.data.map(item => {
              return `http://acgproduct-001-site1.gtempurl.com/api/products/${id}/images/${item.id}/content`
            })
          })
      }
    },
    beforeRouteUpdate(to, from, next) {
      this.getProduct(to.params.id)
      next()
    }
  }
</script>

<style lang="scss" scoped>
    .product__tag {
        display: flex;
        justify-content: space-between;
        border: 5px solid #f0f0f0;
    }
    .slide-active {
        box-shadow: 0 0 20px 1px rgb(0, 0, 0);
    }

    .carousel__img {
        height: 85px;
        margin-top: 10px;
        position: relative;
        &:hover {
            cursor: pointer;
        }
    }
</style>

<style>
    .product .VueCarousel-navigation-prev {
        transform: translateY(-115%) translateX(-100%) !important;
    }
    .product .VueCarousel-navigation-next {
        transform: translateY(-115%) translateX(100%) !important;
    }
</style>
