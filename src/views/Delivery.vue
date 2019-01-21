<template>
    <section class="delivery-desc">
        <div class="container">
            <div class="row py-5">
                <div class="col">
                    <div class="delivery-desc__header px-1 px-md-5">
                        <h3 class="h1 m-0 mb-4 text-center">Доставка і Оплата</h3>
                        <p class="h4 text-center">{{text['delivery-subtitle']}}</p>
                    </div>
                    <nav>
                        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                            <a @click.prevent="active=0" :class="`link-tab nav-item nav-link ${active===0&&'active'}`"
                               id="nav__payment--tab"
                               data-toggle="tab"
                               role="tab" aria-controls="nav__payment" aria-selected="true">
                                <i
                                        class="fas fa-dollar-sign ml-2"></i><span>   Оплата</span></a>
                            <a @click.prevent="active=1" :class="`link-tab nav-item nav-link  ${active===1&&'active'}`"
                               id="nav__delivery--tab" data-toggle="tab"
                               role="tab" aria-controls="nav__delivery"
                               aria-selected="false"><i
                                    class="fas fa-shipping-fast mr-2"></i><span>   Доставка</span></a></div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div v-if="active === 0" class="tab-pane fade show active" id="nav__payment" role="tabpanel"
                             aria-labelledby="nav__payment--tab">
                            <div class="row justify-content-md-center mt-5">
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-cod"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">Наложеним платежем</h4>
                                    <p class="h5 lead border-left pl-5">{{text['delivery-section-pay-billed-payment']}}</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-card"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">Банківською карткою</h4>
                                    <p class="h5 lead border-left pl-5">{{text['delivery-section-pay-bank-card']}}</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-cash"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">Готівкою</h4>
                                    <p class="h5 lead border-left pl-5">{{text['delivery-section-pay-cash']}}</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="active === 1" class="tab-pane fade show active" id="nav__delivery" role="tabpanel"
                             aria-labelledby="nav__delivery--tab">
                            <div class="row justify-content-md-center mt-5">
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-new-post"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">У відділеннях Нова Пошта</h4>
                                    <p class="h5 lead border-left pl-5">{{text['delivery-section-delivery-new-post']}}</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-ukr-post"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">У відділеннях Укпошта</h4>
                                    <p class="h5 lead border-left pl-5">{{text['delivery-section-delivery-ua-post']}}</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-courier"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">Кур'єром</h4>
                                    <p class="h5 lead border-left pl-5">{{text['delivery-section-delivery-courier']}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--h3.m-0.mb-3-->
                    <!--    i.fas.fa-dollar-sign.mr-4.ml-2-->
                    <!--    span.h1 Способи оплати:-->
                    <!--ul.delivery-desc__list.list-unstyled.ml-5.mb-5-->
                    <!--    li.delivery-desc__item.delivery-desc__item--cod.h5 Наложеним платежем-->
                    <!--    li.delivery-desc__item.delivery-desc__item--card.h5 Банківською карткою-->
                    <!--    li.delivery-desc__item.delivery-desc__item--cash.h5 Готівкою-->
                    <!---->
                    <!--h3.m-0.mb-3-->
                    <!--    i.fas.fa-shipping-fast.mr-3-->
                    <!--    span.h1 Доставка:-->
                    <!--ul.delivery-desc__list.list-unstyled.ml-5.mb-0-->
                    <!--    li.delivery-desc__item.delivery-desc__item--new-post.h5 Нова почта-->
                    <!--    li.delivery-desc__item.delivery-desc__item--ukr-post.h5 Укр. почта-->
                    <!--    li.delivery-desc__item.delivery-desc__item--courier.h5 Кур'єром-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Delivery',
    data() {
      return {
        active: 0,
        loadedText: false,
        text: {
          'delivery-subtitle': '',
          'delivery-section-pay-billed-payment': '',
          'delivery-section-pay-bank-card': '',
          'delivery-section-pay-cash': '',
          'delivery-section-delivery-new-post': '',
          'delivery-section-delivery-courier': '',
          'schedule-first-line': '',
          'schedule-second-line': '',
        }
      }
    },
    created() {
      if (!this.loadedText) this.getText()
    },
    methods: {
      getText() {
        const requests = [
          this.$api('/portal-parameters/delivery-subtitle'),
          this.$api('/portal-parameters/delivery-section-pay-billed-payment'),
          this.$api('/portal-parameters/delivery-section-pay-bank-card'),
          this.$api('/portal-parameters/delivery-section-pay-cash'),
          this.$api('/portal-parameters/delivery-section-delivery-new-post'),
          this.$api('/portal-parameters/delivery-section-delivery-ua-post'),
          this.$api('/portal-parameters/delivery-section-delivery-courier'),
          this.$api('/portal-parameters/schedule-first-line'),
          this.$api('/portal-parameters/schedule-second-line')
        ]

        Promise.all(requests)
          .then(responses => {
            this.loadedText = true
            const text = responses.reduce((acc, curr) => {
              acc[curr.data.key] = curr.data.value
              return acc
            }, {})
            this.text = { ...this.text, ...text }
          })
          .catch(err => {
            this.$notify.error({
              title: 'Помилка',
              message: err.message,
            })
          })
      }
    }
  }
</script>

<style scoped lang="scss">
    .link-tab {
        &:hover {
            cursor: pointer;
        }
    }
</style>
