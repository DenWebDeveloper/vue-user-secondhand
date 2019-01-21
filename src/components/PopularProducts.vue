<template>
    <section class="popular-products mt-5">
        <div class="container">
            <div class="row">
                <div class="popular-products__header col-md-12 f-flex">
                    <h2 class="py-2 m-0 popular__title">
                        <i class="fas fa-fire mr-3"></i>
                        <span>Популярні продукти</span>
                    </h2>
                </div>
                <div class="col-md-12 popular-products__body pt-4 p-0">
                    <carousel :perPageCustom="[[310, 1],[774, 2], [1100, 3]]"
                              :autoplay="true"
                              :autoplayTimeout="3400"
                              :scrollPerPage="true" :navigationEnabled="true"
                              :navigationClickTargetSize="0"
                              paginationColor="#474747">
                        <slide v-for="(item,index) in products"
                               :data-index="index"
                               :key="item.id">
                            <div @click="$router.push({name:'product',params:{id:item.id}})" class="card-wrapper">
                                <div class="card" :key="item.id">
                                    <div class="thumbnail">
                                        <img class="thumbnail-img"
                                             :src="`/api/products/${item.id}/images/${item.imageId}/content`"
                                             alt="Card image catalog">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <router-link
                                                    :to="{name:'product',params:{id:item.id}}"
                                            >
                                                {{item.name}}
                                            </router-link>
                                        </h5>
                                        <hr class="card-hr">
                                        <p>{{item.shortDescription}}</p>
                                        <hr class="card-hr">
                                        <div class="d-flex">
                                            <el-tooltip class="ml-auto" effect="dark" content="Додати в корзину"
                                                        placement="left-start">
                                                <el-button @click.stop="addProduct(item)" type="warning"
                                                           icon="el-icon-sold-out" circle></el-button>
                                            </el-tooltip>
                                            <el-tooltip class="ml-1" effect="dark"
                                                        content="Переглянути товар детальніше" placement="top">
                                                <el-button style="transform: rotate(180deg)" type="primary"
                                                           icon="el-icon-back" circle></el-button>
                                            </el-tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import * as types from '../store/actions.types'

  export default {
    name: 'PopularProducts',
    data() {
      return {
        products: []
      }
    },
    created() {
      this.getTopProducts()
    },
    methods: {
      getTopProducts() {
        this.$api('/products/top')
          .then(res => {
            this.products = res.data
          })
      },
      addProduct(product) {
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
    }
  }
</script>

<style lang="scss" scoped>
    @media(max-width: 480px) {
        .popular__title {
            font-size: 27px;
        }
    }

    .card-wrapper {
        padding: 10px;
        display: flex;
        justify-content: center;
        height: 100%;

        &:hover {
            cursor: pointer;
        }
    }

    .card {
        display: flex;
        max-width: 300px;
        width: 100%;
        margin-bottom: 10px;
        color: inherit;
        text-decoration: none;

        &:hover {
            box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.28);
        }
    }

    .slider .card {
        width: auto;
    }

    .card-hr {
        width: 100%;
    }

    .card-body {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .image,
    .card-img-top {
        width: 100%;
        height: 165px;
    }

    .carousel {
        background-color: #ccc;
    }

    .thumbnail {
        position: relative;
        width: 100%;
        height: 165px;
        overflow: hidden;
    }

    .thumbnail-img {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: auto;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }


</style>

<style>
    .popular-products__body .VueCarousel-navigation-button {
        display: none !important;
    }
</style>
