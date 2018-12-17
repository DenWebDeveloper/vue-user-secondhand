<template>
    <header>
        <div class="container">
            <div class="row border-bottom align-items-center">
                <div class="col-12 col-sm-3  col-lg-1  pb-3 pt-1 d-flex justify-content-between align-items-center">
                    <router-link class="navbar-brand" :to="{name:'home'}">
                        <span class="navbar-brand__name">
                            Retex
                        </span>
                            <span class="navbar-brand__small">
                            SECONDHAND
                        </span>
                    </router-link>
                    <div class="d-block d-sm-none d-flex">
                        <button class="btn mr-1" v-if="$route.name !== 'catalog'" @click="$router.push({name:'catalog'})">Каталог</button>
                        <button class="ml-a navbar-toggler d-block" style="width: 45px" type="button"
                                aria-expanded="false" @click="toggleMenu"
                                aria-label="Toggle navigation">
                            <span v-if="menuVisiable" class="fas fa-times"></span>
                            <span v-else class="fas fa-bars"></span>
                        </button>
                    </div>
                </div>
                <div v-if="menuVisiable"  class="col-12 col-sm-9  col-lg-6">
                    <nav class="navbar-expand-lg d-flex flex-row
                        justify-content-between align-items-center flex-wrap">
                        <div class="navbar-collapse w-lg-100 p-0" style="display: block"
                             id="navbarTogglerDemo01">
                            <ul class="navbar-nav w-100 d-flex flex-wrap pl-md-2 flex-row justify-content-between align-items-center">
                                <li class="nav-item p-1">
                                    <router-link class="nav-link" :to="{name:'catalog'}">
                                        <span @click="menuOpen = false">Каталог</span>
                                    </router-link>
                                </li>
                                <li class="nav-item p-1">
                                    <router-link :to="{name:'about'}" class="nav-link">
                                        <span @click="menuOpen = false">Про нас</span></router-link>
                                </li>
                                <li class="nav-item p-1">
                                    <router-link :to="{name:'contacts'}" class="nav-link">
                                        <span @click="menuOpen = false">Контакти</span></router-link>
                                </li>
                                <li class="nav-item p-1">
                                    <router-link class="nav-link" :to="{name:'delivery'}">
                                        <span @click="menuOpen = false">Оплата/Доставка</span></router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div v-if="menuVisiable"  class="col-12 col-lg-5 ml-auto  d-flex flex-wrap justify-content-between text-sm-right py-3">
                    <div>
                        <small v-for="item in phones" :key="item">
                            <a class="text-muted font-weight-bold" :href="`tel:${item}`">{{item}}</a><br>
                        </small>
                    </div>
                    <div>
                        <small>
                            <i class="far fa-envelope"></i>
                            <a class="text-muted font-weight-bold"
                               href="mailto:retex62@ukr.net">retex62@ukr.net</a>
                        </small>
                    </div>
                    <div>
                        <small class="text-muted font-weight-bold">
                            <i class="far fa-clock"></i>ПН-ПТ: 9:00 - 18:00
                        </small>
                        <br>
                        <small class="text-muted font-weight-bold">
                            <i class="far fa-clock"></i>СБ: 9:00 - 13:00
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
    computed:{
      menuVisiable() {
        if(document.documentElement.clientWidth > 992) {
          return true
        }
        return this.menuOpen
      },
      ...mapGetters({
        phones: 'getPhones'
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

    .navbar-nav .nav-link {
        padding: 0;
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
