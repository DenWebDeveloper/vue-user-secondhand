<template>
    <div>
        <section>
            <div class="container">
                <div class="row align-items-start">
                    <div class="catalog col-md-4 pr-md-0">
                        <header-group-menu/>
                    </div>
                    <div class="col-md-8 pl-md-0 mt-4 mt-md-0" id="banner-carousel">
                        <carousel :per-page="1" :mouse-drag="false">
                            <slide>
                                <img width="100%" style="max-height:406px;height:auto"  src="https://miridei.com/files/img/c/idei-dlya-doma/handmade/15-idej-peredelki-starogo-svitera_rt.jpg">
                            </slide>
                            <slide>
                                <img  width="100%" style="max-height:406px;height:auto" src="https://image.freepik.com/free-photo/no-translate-detected_1339-7462.jpg" alt="">
                            </slide>
                            <slide>
                                <img  width="100%" style="max-height:406px;height:auto" src="http://golifehack.ru/wp-content/uploads/2016/06/2016-06-16_181607.jpg" alt="">
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
        <popular-products/>
        <section class="about-us">
            <div class="container about-us__container">
                <div class="row py-5">
                    <div class="col-md-5 about-us__left mb-5 mb-md-0">
                        <div class="pl-2 pr-2">
                            <h3 class="py-3"><i class="fa fa-file-alt mr-3"></i><span>Про нас</span></h3>
                            <p>Фірма ‘Retex’ заснована у 1994 році. Компанія займається прямим імпортом,
                                сортуванням та подальшим продажем вживаного(одягу) одягу та взуття.
                                <router-link :to="{name:'about'}">Читати далі</router-link>
                            </p>
                        </div>
                        <hr>
                        <div class="pl-2 pr-2 pb-2">
                            <h3 class="py-2"><i class="fas fa-map-marker-alt mr-3"></i><span>Як нас знайти?</span></h3>
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
                                Шевченка,19</p>
                            <router-link :to="{name:'contacts'}" class="btn btn-success ml-auto d-block">Детальніше
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-1 about-us__right d-flex">
                        <iframe frameborder="0"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d175429.7163420607!2d-118.24300182793624!3d33.7635765341403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1537011282991"
                                allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderGroupMenu from '@/components/HeaderGroupMenu'
  import PopularProducts from '@/components/PopularProducts'


  export default {
    name: 'Home',
    components: {
      HeaderGroupMenu,
      PopularProducts
    }
  }
</script>

<style>
    .VueCarousel-dot--active button {
        background-color: #1b1e21 !important;
    }

    .VueCarousel-dot-button {
        background-color: #ccc !important;
    }

</style>
