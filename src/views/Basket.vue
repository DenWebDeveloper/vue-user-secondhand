<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="section__title col-md-12 f-flex">
                    <h2 class="py-2 m-0">
                        <span>Корзина</span>
                    </h2>
                </div>
                <div class="col-md-12">
                    <div v-if="getProductsBaskets.length !== 0">
                        <el-table
                                :data="getProductsBaskets"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="name"
                                    label="Назва"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="count"
                                    label="Кількість">
                            </el-table-column>
                            <el-table-column
                                    prop="price"
                                    label="Ціна за 1шт">
                            </el-table-column>
                            <el-table-column
                                    label="Ціна">
                                <template slot-scope="scope">
                                    <el-tag>{{ scope.row.price * scope.row.count }}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="Operations">
                                <template slot-scope="scope">
                                    <el-button
                                            size="mini"
                                            @click="changeCount(scope.row)">Змінити кількість
                                    </el-button>
                                    <el-button
                                            style="margin-top: 10px"
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete(scope.row.id)">Видалити
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="price-block">
                            <div class="font-weight-bold price-block__price">Загальна ціна: {{getAllPrice}} грн.</div>
                            <router-link :to="{name:'contactOrder'}" class="btn btn-success">Оформити замовлення</router-link>
                        </div>
                    </div>
                    <p v-else>Козина пуста</p>
                </div>
            </div>
        </div>
        <el-dialog
                title="Змінити кількість"
                :visible.sync="dialog.visible"
                width="290px">
            <el-form ref="formCount" :model="dialog" label-width="70px">
                <el-form-item
                        prop="count"
                        label="Кількіть:"
                        :rules=" [{ validator: checkCount, trigger: 'change' }]">
                    <el-input v-model="dialog.count"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialog.visible = false">Закрити</el-button>
              <el-button type="primary" @click="saveDialog">Зберегти</el-button>
            </span>
        </el-dialog>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/actions.types'

  const checkCount = (rule, value, callback) => {
    if (isNaN(Number(value))) {
      return callback(new Error('Введіть число'))
    }
    setTimeout(() => {
      if (!Number.isInteger(+value)) {
        callback(new Error('Введіть коректне число'))
      } else {
        if (+value < 0) {
          callback(new Error('Число має бути більше 0'))
        } else {
          callback()
        }
      }
    }, 500)
  }

  export default {
    name: 'Basket',
    data() {
      return {
        checkCount,
        dialog: {
          id: '',
          visible: false,
          count: 0
        },
      }
    },
    computed: {
      ...mapGetters([
        'getProductsBaskets',
        'getAllPrice'
      ])
    },
    methods: {
      saveDialog() {
        this.$refs['formCount'].validate(valid => {
          if (!valid) return false
          this.$store.commit(types.CHANGE_COUNT_PRODUCT_BASKET, {
            id: this.dialog.id,
            count: this.dialog.count
          })
          this.dialog = {
            id: '',
            visible: false,
            count: 0
          }

        })
      },
      changeCount(row) {
        this.dialog = {
          id: row.id,
          visible: true,
          count: row.count
        }
      },
      handleDelete(id) {
        this.$store.commit(types.DELETE_PRODUCT_BASKET, { id })
      }
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
