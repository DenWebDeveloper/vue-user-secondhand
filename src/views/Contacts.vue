<template>
    <section class="contacts-desc">
        <div class="container">
            <div class="row justify-content-between py-5">
                <div class="col-md-6">
                    <h3 class="m-0 pb-4"><i class="far fa-address-book mr-3"></i><span class="h1">Контакти:</span></h3>
                    <div class="border-left">
                        <div class="mb-4 pl-4">
                            <p class="d-flex align-items-center">
                                <img class="mr-1" width="30" height="30"
                                     src="@/assets/img/map-location.svg"
                                     alt="Icon street">Область: Івано-Франківськ</p>
                            <p class="d-flex align-items-center">
                                <img class="mr-1" width="30" height="30"
                                     src="@/assets/img/skyline.svg" alt="Icon street">Місто:
                                Долина</p>
                            <p class="d-flex align-items-center">
                                <img class="mr-1" width="30" height="30"
                                     src="@/assets/img/street.svg" alt="Icon street">Вулиця:
                                Шевченка,19 (у районі ж/д, авто-вокзалу, площа нового ринку)</p>
                        </div>

                        <div class="mb-2 pl-4 d-flex"><span class="h4">З нами можна зв'язатись так:</span></div>
                        <div v-for="item in phones" :key="item" class="mb-4 pl-4 d-flex">
                            <i class="fas fa-phone-square fa-2x mr-3"></i>
                            <span class="h5 pl-2">{{item}}</span>
                        </div>
                        <div class="mb-4 pl-4 d-flex">
                            <i class="fas fa-phone-square fa-2x mr-3"></i>
                            <span class="h5 pl-2">+380950000000</span>
                        </div>
                        <div class="mb-4 pl-4 d-flex align-items-center">
                            <i class="i fas fa-envelope fa-2x mr-3 d-none d-sm-block"></i>
                            <span class="h5 pl-5 pl-sm-2">
                                <a class="font-weight-bold email"
                                   href="mailto:retex62@ukr.net">retex62@ukr.net</a></span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 align-self-center"><span
                        class="h5 m-0 font-weight-bold">Знайти нас можна тут:</span>
                    <div class="contacts-desc__map mt-2 d-flex">
                        <GMap style="min-height: 465px;"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import GMap from '../components/GMap'

  export default {
    name: 'Contacts',
    components: {
      GMap
    },
    computed: {
      ...mapGetters({
        phones: 'getPhones'
      })
    }
  }
</script>

<style scoped>
    .email {
        color: #212529;
    }
</style>
