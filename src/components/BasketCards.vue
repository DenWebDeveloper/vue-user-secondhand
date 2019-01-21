<template>
    <div class="basket-cards">
        <div class="basket-card" v-for="item in data" :key="item.id">
            <div class="thumbnail">
                <img class="thumbnail-img" :src="item.src" alt="Photo product">
            </div>
            <h3 class="px-2 pt-2">{{item.name}}</h3>
            <div class="p-2 basket-card-content">
                <hr class="my-1">
                <p>{{item.shortDescription}}</p>
                <div class="d-flex justify-content-between underline mb-2">
                    <span class="font-weight-bold">Кількість:</span>
                    <span>{{item.count}}</span>
                </div>
                <div class="d-flex justify-content-between underline mb-2">
                    <span class="font-weight-bold">Ціна за 1од:</span>
                    <span>{{item.price}} грн.</span>
                </div>
                <div class="d-flex justify-content-between underline">
                    <span class="font-weight-bold">Ціна:</span>
                    <span>{{ item.price * item.count }} грн.</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <el-button
                            size="mini"
                            @click="changeCount(item)">Змінити кількість
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(item.id)">Видалити
                    </el-button>
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
    </div>
</template>

<script>
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
    name: 'BasketCards',
    props: {
      data: {
        type: Array,
        require: true
      }
    },
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

<style scoped>
    .basket-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .basket-card {
        max-width: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fff;
        margin-bottom: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .thumbnail {
        position: relative;
        width: 100%;
        height: 165px;
        overflow: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
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

    .underline {
        position: relative;
    }

    .underline:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 100%;
        height: 1px;
        background-color: #8e8989;
    }

    @media(min-width: 600px) {
        .basket-cards {
            justify-content: space-between;
        }

        .basket-card {
            width: 48%;
        }
    }

    @media(min-width: 992px) {
        .basket-cards {
            justify-content: flex-start;
        }

        .basket-card:nth-child(3n+2) {
            margin-left: 29px;
            margin-right: 29px;
        }
    }
 </style>
