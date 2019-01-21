<template>
    <header>
        <div class="container">
            <div class="row border-bottom align-items-start pt-2 pb-2">
                <div class="col-12 col-lg-1 px-sm-0  pb-3 d-flex justify-content-between align-items-center">
                    <router-link class="navbar-brand p-0" :to="{name:'home'}">
                        <span class="navbar-brand__name">
                            Retex
                        </span>
                        <span class="navbar-brand__small">
                            SECONDHAND
                        </span>
                    </router-link>
                    <div class="d-block d-lg-none d-flex ml-auto">
                        <button class="btn mr-1" v-if="$route.name !== 'catalog'"
                                @click="$router.push({name:'catalog'})">Каталог
                        </button>
                        <button class="ml-a navbar-toggler d-block" style="width: 45px" type="button"
                                aria-expanded="false" @click="toggleMenu"
                                aria-label="Toggle navigation">
                            <span v-if="menuVisiable" class="fas fa-times"></span>
                            <span v-else class="fas fa-bars"></span>
                        </button>
                    </div>
                </div>
                <div v-if="menuVisiable" class="px-sm-0 col-12 col-sm-12   col-lg-6">
                    <nav class="navbar-expand-lg d-flex flex-row
                        justify-content-between align-items-center flex-wrap">
                        <div class="navbar-collapse w-lg-100 p-0" style="display: block"
                             id="navbarTogglerDemo01">
                            <ul class="navbar-nav w-100 d-flex flex-wrap p-0 flex-row justify-content-between align-items-center">
                                <li class="nav-item mr-2 mr-md-0">
                                    <router-link class="nav-link" :to="{name:'catalog'}">
                                        <span @click="menuOpen = false">Каталог</span>
                                    </router-link>
                                </li>
                                <li class="nav-item mr-2 mr-md-0">
                                    <router-link :to="{name:'about'}" class="nav-link">
                                        <span @click="menuOpen = false">Про нас</span></router-link>
                                </li>
                                <li class="nav-item mr-2 mr-md-0">
                                    <router-link :to="{name:'contacts'}" class="nav-link">
                                        <span @click="menuOpen = false">Контакти</span></router-link>
                                </li>
                                <li class="nav-item mr-2 mr-md-0">
                                    <router-link class="nav-link" :to="{name:'delivery'}">
                                        <span @click="menuOpen = false">Оплата/Доставка</span></router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div v-if="menuVisiable"
                     class="col-12 col-lg-5 ml-auto p-sm-0  d-flex flex-wrap justify-content-between text-sm-right">
                    <div>
                        <small v-for="item in phones" :key="item">
                            <i class="fas fa-phone-volume text-muted mr-1"></i>
                            <a class="text-muted font-weight-bold" :href="`tel:${item}`">{{item}}</a><br>
                        </small>
                    </div>
                    <div class="text-center">
                        <small>
                            <i class="far fa-envelope"></i>
                            <a class="text-muted font-weight-bold"
                               :href="`mailto:${additionalData.email}`">{{additionalData.email}}</a>
                        </small>
                        <ul v-if="isSocials" class="socials d-flex list-unstyled">
                            <li v-if="socials.facebook" class="socials__item">
                                <a class="socials__link"
                                   :href="socials.facebook"><span
                                        class="d-none">Facebook</span><i
                                        class="fab fa-facebook-f"></i></a></li>
                            <li v-if="socials.twitter" class="socials__item">
                                <a class="socials__link"
                                   :href="socials.twitter"><span
                                        class="d-none">Twitter</span><i class="fab fa-twitter"></i></a></li>
                            <li v-if="socials.telegram" class="socials__item">
                                <a class="socials__link"
                                   :href="socials.telegram"><span
                                        class="d-none">Telegram</span><i class="fab fa-telegram"></i></a></li>
                            <li v-if="socials.instagram" class="socials__item">
                                <a class="socials__link"
                                   :href="socials.instagram"><span
                                        class="d-none">Instagram</span><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div>
                        <small class="text-muted font-weight-bold">
                            <i class="far fa-clock"></i>{{additionalData.scheduleFirst}}
                        </small>
                        <br>
                        <small class="text-muted font-weight-bold">
                            <i class="far fa-clock"></i>{{additionalData.scheduleSecond}}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Header',
    data() {
      return {
        menuMobile: document.documentElement.clientWidth < 992,
        menuOpen: false
      }
    },
    computed: {
      menuVisiable() {
        if (document.documentElement.clientWidth >= 992) {
          return true
        }
        return this.menuOpen
      },
      ...mapGetters({
        phones: 'getPhones',
        socials: 'getSocials',
        isSocials: 'isSocials',
        additionalData: 'getAdditionalData'
      })
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
    @media(max-width: 500px) {
        .pl-0-xs-only {
            padding-left: 0;
        }
    }

    .navbar-toggler {
        display: none;
    }

    .navbar-nav {
        margin-top: 2px;
    }

    .navbar-nav .nav-link {
        padding: 0;
        font-size: 17px;
    }

    .navbar-brand {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;

        &__name {
            font-size: 36px;
            line-height: 1;
        }

        &__small {
            font-size: 16px;
            line-height: 1;
            letter-spacing: 1.1px;
        }
    }
</style>
