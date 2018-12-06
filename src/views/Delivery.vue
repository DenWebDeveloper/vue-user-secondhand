<template>
    <section class="delivery-desc">
        <div class="container">
            <div class="row py-5">
                <div class="col">
                    <div class="delivery-desc__header px-5">
                        <h3 class="h1 m-0 mb-4 text-center">Доставка і Оплата</h3>
                        <p class="h4 text-center">Шановні клієнти! Наша компанія пропонує декілька варіантів отримання
                            вашого товару. Оберіть нижче найзручніший для Вас!</p>
                    </div>
                    <nav>
                        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                            <a @click.prevent="active=0" :class="`link-tab nav-item nav-link ${active===0&&'active'}`" id="nav__payment--tab"
                               data-toggle="tab"
                               role="tab" aria-controls="nav__payment" aria-selected="true">
                                <i
                                        class="fas fa-dollar-sign ml-2"></i><span>   Оплата</span></a>
                            <a @click.prevent="active=1" :class="`link-tab nav-item nav-link  ${active===1&&'active'}`" id="nav__delivery--tab" data-toggle="tab"
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
                                    <p class="h5 lead border-left pl-5">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facilis iusto nemo quibusdam reiciendis vero, voluptate.</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-card"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">Банківською карткою</h4>
                                    <p class="h5 lead border-left pl-5">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Consequatur earum iure nobis qui quo vero.</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-cash"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">Готівкою</h4>
                                    <p class="h5 lead border-left pl-5">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Aperiam assumenda nesciunt odio placeat saepe tempore.</p>
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
                                    <p class="h5 lead border-left pl-5">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Blanditiis eaque ex explicabo odio similique. Voluptas?</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-ukr-post"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">У відділеннях Укр. пошта</h4>
                                    <p class="h5 lead border-left pl-5">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Adipisci odit, quae quo vel vero voluptas?</p>
                                </div>
                                <div class="col-md-4 delivery-desc__item">
                                    <div class="delivery-desc__rounded-box mx-auto mb-4"><i
                                            class="delivery-desc__rounded-box--icon delivery-desc__rounded-box--icon-courier"></i>
                                    </div>
                                    <h4 class="h4 text-center mb-4">Кур'єром</h4>
                                    <p class="h5 lead border-left pl-5">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Deserunt eos facilis, fuga obcaecati officia quibusdam.</p>
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
        active: 0
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
