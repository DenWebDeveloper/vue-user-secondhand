<template>
    <footer class="footer">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-between py-2">
                <div v-if="isSocials" class="col-6 col-sm-1 d-flex justify-content-center mx-auto justify-content-md-start m-lg-0 pb-2">
                    <ul  class="socials d-flex list-unstyled">
                        <li v-if="socials.facebook" class="socials__item"><a class="socials__link" :href="socials.facebook"><span class="d-none">Facebook</span><i
                                class="fab fa-facebook-f"></i></a></li>
                        <li v-if="socials.twitter" class="socials__item"><a class="socials__link" :href="socials.twitter"><span
                                class="d-none">Twitter</span><i class="fab fa-twitter"></i></a></li>
                        <li v-if="socials.telegram" class="socials__item"><a class="socials__link" :href="socials.telegram"><span
                                class="d-none">Telegram</span><i class="fab fa-telegram"></i></a></li>
                        <li v-if="socials.instagram" class="socials__item"><a class="socials__link" :href="socials.instagram"><span
                                class="d-none">Instagram</span><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div class="col-6 col-sm-4 d-flex justify-content-center justify-content-sm-start    flex-column">
                    <small v-for="item in phones" :key="item" style="font-size: 16px;">
                        <i class="fas fa-phone-volume text-muted mr-1"></i>
                        <a class="text-muted font-weight-bold" :href="`tel:${item}`">{{item}}</a><br>
                    </small>
                </div>
                <div class="col-12 col-sm-4 d-flex justify-content-center justify-content--md-end">
                    <router-link class="navbar-brand" :to="{name:'home'}">
                        <span class="navbar-brand__name">
                            Retex
                        </span>
                        <span class="navbar-brand__small">
                            SECONDHAND
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Footer',
    computed: {
      ...mapGetters({
        phones: 'getPhones',
        socials: 'getSocials',
        isSocials: 'isSocials'
      })
    },
  }
</script>

<style scoped lang="scss">
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

    .footer {
        background-color: #fff;
    }
</style>
