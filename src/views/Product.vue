<template>
    <div class="container product">
        <div class="row">
            <div class="col-md-12 mt-3">
                <breadcrumb :data="productPath"/>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-md-5">
                <div class="slider-main-img" @click="handleImgViewer">
                    <img :src="imgsPath[imgPathActive]" style="height: 100%;" alt="">
                </div>
                <carousel :perPageCustom="[[480, 2], [768, 3]]"
                          :scrollPerPage="true" :navigationEnabled="true"
                          paginationColor="#474747">
                    <slide v-for="(item,index) in imgsPath"
                           :data-index="index"
                           @slideClick="handleSlideClick"
                           :key="item.id">
                        <div style="padding: 10px;" @click="handleImgViewer">
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
                <div class="font-weight-bold mb-2">Код продукту: {{getFullCode(product.productCode)}}</div>
                <product-block-info name="Короткий опис" :value="product.shortDescription"/>
                <product-block-info name="Повний опис" :value="product.description"/>
                <product-block-info name="Характеристики" :not-padding="true">
                    <el-row :gutter="10" type="flex" justify="space-between" style="flex-wrap: wrap">
                        <el-col v-for="(item, index) in product.productValues" :key="index" :xs="24" :span="11"
                                class="product__tag underline">
                            <div>{{item.key}}:</div>
                            <div>{{item.value}}</div>
                        </el-col>
                    </el-row>
                </product-block-info>
                <hr>
                <div class="row">
                    <div class="col-sm-4 mb-3">
                        <strong>Ціна: {{product.price}} грн</strong>
                    </div>
                    <div class="col-sm-8 d-flex">
                        <el-button @click="buyProductOneClick" class="d-block ml-sm-auto" type="success">Купити в один
                            клік
                        </el-button>
                        <el-button @click="buyProduct" class="d-block" type="success">Купити</el-button>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
                title="Купити товар"
                :visible.sync="buyModal.visible"
                width="300px">
            <el-form :model="buyModal" ref="buyForm" class="buy-form" label-width="150px" label-position='top'>
                <el-form-item
                        label="Ваше ім'я"
                        prop="name"
                        :rules="{
                              required: false, message: 'Заповніть поле', trigger: 'blur'
                            }">
                    <el-input v-model="buyModal.name"/>
                </el-form-item>
                <el-form-item
                        label="Ваш мобільний телефон"
                        prop="phone"
                        :rules="{
                              required: true, message: 'Заповніть поле', trigger: 'blur'
                            }">
                    <el-input v-model="buyModal.phone"/>
                </el-form-item>
            </el-form>
            <p>Наш мененджер найближчим часом вам зателефонує</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="closeClickModal">Відмінити</el-button>
             <el-button type="primary" @click="submitClickModal">Відправити</el-button>
            </span>
        </el-dialog>
        <img-viewer/>
    </div>
</template>

<script>
  import ProductBlockInfo from '../components/ProductInfoBlock'
  import ImgViewer from '../components/ImgViewer'
  import Breadcrumb from '../components/Breadcrumb'
  import * as types from '../store/actions.types'
  import bus from '../untils/bus'


  export default {
    name: 'Product',
    components: {
      Breadcrumb,
      ProductBlockInfo,
      ImgViewer
    },
    data() {
      return {
        product: {},
        productPath: [],
        imgsPath: [],
        imgPathActive: 0,
        buyModal: {
          name: '',
          phone: '',
          visible: false,
        },
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
      closeClickModal() {
        this.$set(this.buyModal, 'visible', false)
      },
      submitClickModal() {
        this.$set(this.buyModal, 'visible', false)
        this.$api.post('orders/quick-order', {
          Name: this.buyModal.name,
          PhoneNumber: this.buyModal.phone,
          ProductId: this.product.id,
        })
          .then(() => {
            this.$notify({
              title: 'Все добре :)',
              message: 'Ваша заявка успішно добавлена',
              type: 'success'
            })
            this.closeClickModal()
          })
      },
      buyProductOneClick() {
        this.$set(this.buyModal, 'visible', true)
      },
      buyProduct() {
        const product = this.product
        this.$store.commit(types.ADD_PRODUCT_BASKET, {
          name: product.name,
          id: product.id,
          price: product.price,
          shortDescription: product.shortDescription,
          src: `/api/products/${product.id}/images/${product.imageId}/content`
        })
        this.$notify({
          title: 'Корзина',
          message: 'Товар добавлений в корзину',
          duration: 2000,
          type: 'success',
          onClick: () => {
            this.$router.push({ name: 'basket' })
            this.$notify.closeAll()
          }
        })
      },
      handleSlideClick(dataset) {
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
              return `/api/products/${id}/images/${item.id}/content`
            })
          })
      },
      handleImgViewer() {
        bus.$emit('img-viewer', this.imgsPath)
      },
      getFullCode(code) {
        const length = String(code).length
        let  zeros = ''
        for (let i = 0; i < 9 - length; i++) {
          zeros += '0'
        }
        return zeros + String(code)
      }
    },
    beforeRouteUpdate(to, from, next) {
      this.getProduct(to.params.id)
      next()
    }
  }
</script>

<style lang="scss" scoped>
    .underline {
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 100%;
            height: 2px;
            background-color: #8e8989;
        }
    }

    .product__tag {
        display: flex;
        justify-content: space-between;
        border: 5px solid #f0f0f0;
    }

    .slide-active {
        box-shadow: 0 0 15px 1px #000000a6;
    }

    .carousel__img {
        height: 85px;
        margin-top: 10px;
        position: relative;
        &:hover {
            cursor: pointer;
        }
    }

    .slider-main-img {
        text-align: center;
        height: 200px;
    }

    @media(min-width: 400px) {
        .slider-main-img {
            height: 300px;
        }
    }
</style>

<style>
    .product .VueCarousel-navigation-prev {
        transform: translateY(-115%) translateX(-100%) !important;
    }

    .buy-form .el-form-item__label {
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
        line-height: 1 !important;
    }

    .product .VueCarousel-navigation-next {
        transform: translateY(-115%) translateX(100%) !important;
    }
</style>
