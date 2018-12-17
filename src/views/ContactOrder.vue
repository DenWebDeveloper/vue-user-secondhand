<template>
    <section>
        <div class="container py-4">
            <h3>Оформлення замовлення</h3>
            <div v-if="getProductsBaskets.length === 0" class="row bg-white py-3">
                <div class="col-md-12 font-weight-bold">
                    Корзина пуста
                </div>
            </div>
            <div v-else class="row bg-white py-3">
                <div class="col-md-4 contact-order">
                    <h4>Контакти</h4>
                    <el-form ref="formContacts" :model="contacts" label-width="70px"
                             label-position='top'>
                        <el-form-item
                                prop="name"
                                label="П.І.Б"
                                :rules="[{ required:true,message:'Заповніть поле', trigger: 'change' }]">
                            <el-input v-model="contacts.name"/>
                        </el-form-item>
                        <el-form-item
                                prop="email"
                                label="Email"
                                :rules="[{ required:true,message:'Заповніть поле', trigger: 'change' },
                                { type:'email',message:'Заповніть коректно поле', trigger: 'change' }]">
                            <el-input v-model="contacts.email"/>
                        </el-form-item>
                        <el-form-item
                                prop="phone"
                                label="Телефон"
                                :rules="[{ required:true,message:'Заповніть поле', trigger: 'change' }]">
                            <el-input v-model="contacts.phone"/>
                        </el-form-item>
                        <el-form-item
                                prop="deliveryType"
                                label="Спосіб доставки"
                                :rules="[{ required:true,message:'Виберіть із списку пункт', trigger: 'change' }]">
                            <el-select style="width:100%" v-model="contacts.deliveryType" :value="contacts.deliveryType"
                                       placeholder="Виберіть із списку">
                                <el-option
                                        label="Нова почта"
                                        :value="0">
                                </el-option>
                                <el-option
                                        label="Укр почта"
                                        :value="1">
                                </el-option>
                                <el-option
                                        label="Кур'єром"
                                        :value="2">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item
                                prop="paymentType"
                                label="Спосіб оплати"
                                :rules="[{ required:true,message:'Виберіть із списку пункт', trigger: 'change' }]">
                            <el-select style="width:100%" v-model="contacts.paymentType"
                                       :value="contacts.paymentType"
                                       :disabled="contacts.deliveryType.length === 0"
                                       placeholder="Виберіть із списку">
                                <el-option
                                        v-for="(item,index) in paymentTypeOptions"
                                        :key="index"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item
                                :rules="[{ required:true,message:'Заповніть поле', trigger: 'change' }]"
                                prop="address"
                                label="Адреса">
                            <el-input v-model="contacts.address" placeholder="Область;Місто;Адреса"/>
                        </el-form-item>
                        <el-form-item
                                prop="comments"
                                label="Коментарі">
                            <el-input type="textarea" v-model="contacts.comments"/>
                        </el-form-item>
                    </el-form>
                    <el-button @click="submitForm" class="ml-auto d-block mt-3" type="success">Оформити</el-button>
                </div>
                <div class="col-md-8">
                    <h4>Ваше замовлення</h4>
                    <el-table
                            :data="getProductsBaskets"
                            stripe
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
                    </el-table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/actions.types'

  export default {
    name: 'ContactOrder',
    data() {
      return {
        contacts: {
          name: '',
          phone: '',
          email: '',
          comments: '',
          address: '',
          deliveryType: '',
          paymentType: ''
        }
      }
    },
    watch: {
      'contacts.deliveryType': function () {
        this.$set(this.contacts, 'paymentType', '')
      }
    },
    computed: {
      ...mapGetters([
        'getProductsBaskets',
        'getAllPrice'
      ]),
      nameDelivery() {
        const type = ['Нова почта', 'Укр почта', 'Кур\'єром']
        return type[this.contacts.deliveryType]
      },
      paymentTypeOptions() { //0 - нова почта // 1 Укр почта // Кур'єром - 2
        const paymentType = {
          0: [{
            name: 'Наложний платіж',
            id: 0
          }, {
            name: 'Карткою',
            id: 1
          }],
          1: [{
            name: 'Карткою',
            id: 0
          }],
          2: [{
            name: 'Готівкою',
            id: 0
          }, {
            name: 'Карткою',
            id: 1
          }]
        }
        return paymentType[this.contacts.deliveryType]
      }
    },
    methods: {
      submitForm() {
        this.$refs['formContacts'].validate(valid => {
          if (!valid) return
          const contacts = this.contacts
          this.$api.post('/orders', {
            clientName: contacts.name,
            clientEmail: contacts.email,
            clientTelephone: contacts.phone,
            clientAddress: contacts.address,
            comments: contacts.comments,
            paymentType: this.paymentTypeOptions[contacts.paymentType].name,
            deliveryType: this.nameDelivery,
            orderItems: this.getProductsBaskets
          })
            .then(() => {
              this.$message({
                message: 'Замовлення прийто. Очікуйте дзвінка оператора.',
                type: 'success'
              })
              this.$store.commit(types.CLEAN_PRODUCT_BASKET)
              this.$router.push('/')
            })
            .catch(e => {
              this.$notify.error({
                title: 'Помилка :(',
                message: e.message
              })
            })
        })
      }
    }
  }
</script>

<style lang="scss">
    .contact-order {
        .el-form-item__label,
        .el-form-item {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
        }
    }
</style>
