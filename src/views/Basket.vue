<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="section__title col-md-12 f-flex">
                    <h2 class="py-2 m-0">
                        <span>Корзина</span>
                    </h2>
                </div>
                <div v-if="getProductsBaskets.length !== 0" class="col-md-12 p-0">
                    <basket-cards :data="getProductsBaskets"/>
                    <div class="price-block bg-white p-3 shadow rounded">
                        <div class="font-weight-bold price-block__price m-0">Загальна ціна: {{getAllPrice}} грн.</div>
                        <router-link :to="{name:'contactOrder'}" class="btn btn-success">Оформити замовлення</router-link>
                    </div>
                </div>
                <p v-else>Корзина пуста</p>
            </div>
        </div>

    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BasketCards from '../components/BasketCards'

  export default {
    name: 'Basket',
    components: {
      BasketCards
    },
    computed: {
      ...mapGetters([
        'getProductsBaskets',
        'getAllPrice'
      ])
    }
  }
</script>

<style scoped lang="scss">
    .price-block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .price-block__price {
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>
<style lang="scss">
    .buy-order {
        .el-form-item__label {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
        }
    }
</style>
