<template>
    <footer class="footer">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-between py-2">
                <div style="display: none !important;"
                     class="col-12 d-flex justify-content-center mx-auto col-sm-4 justify-content-md-start m-lg-0 pb-2">
                    <ul class="socials d-flex list-unstyled">
                        <li class="socials__item"><a class="socials__link" href="#"><span class="d-none">Facebook</span><i
                                class="fab fa-facebook-f"></i></a></li>
                        <li class="socials__item"><a class="socials__link" href="#"><span
                                class="d-none">Twitter</span><i class="fab fa-twitter"></i></a></li>
                        <li class="socials__item"><a class="socials__link" href="#"><span
                                class="d-none">Google plus</span><i class="fab fa-google"></i></a></li>
                        <li class="socials__item"><a class="socials__link" href="#"><span
                                class="d-none">Instagram</span><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div class="col-6 d-flex justify-content-center flex-column">
                    <small v-for="item in phones" :key="item">
                        <a class="text-muted font-weight-bold" :href="`tel:${item}`">{{item}}</a><br>
                    </small>
                </div>
                <div class="col-6 d-flex justify-content-end">
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
    computed:{
      ...mapGetters({
        phones: 'getPhones'
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
