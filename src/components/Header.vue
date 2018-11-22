<template>
    <header>
        <div class="container">
            <div class="row border-bottom align-items-center">
                <div class="col-6 col-sm-4 py-3">
                    <ul class="socials d-flex list-unstyled">
                        <li class="socials__item">
                            <a class="socials__link" href="#">
                                <span class="d-none">Facebook</span>
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="socials__item"><a class="socials__link" href="#">
                            <span class="d-none">Twitter</span>
                            <i class="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li class="socials__item"><a class="socials__link" href="#">
                            <span class="d-none">Google plus</span>
                            <i class="fab fa-google"></i></a></li>
                        <li class="socials__item"><a class="socials__link" href="#">
                            <span class="d-none">Instagram</span>
                            <i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div class="col-7 col-sm-5 col-lg-3 text-muted ml-auto py-3">
                    <small>
                        <i class="far fa-envelope"></i>
                        <a class="text-muted font-weight-bold"
                           href="mailto:testgmail.g@gmail.com">testgmail.g@gmail.com</a>
                    </small>
                </div>
                <div class="col-5 col-sm-3 col-lg-2 py-3">
                    <small class="text-muted font-weight-bold">
                        <i class="far fa-clock"></i> 9:00 - 18:00
                    </small>
                </div>
            </div>
        </div>
        <div class="container">
            <nav class="navbar-expand-lg d-flex
            justify-content-between align-items-center flex-wrap">
                <a class="navbar-brand" href="http://connoisseur-international.kl.com.ua/seconhand/app/index.html">SECONDHAND</a>
                <button class="ml-a navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"><span class="fas fa-bars"></span></button>
                <div class="collapse navbar-collapse w-lg-100 p-0" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ml-auto w-100 d-flex justify-content-end">
                        <li class="nav-item"><a class="nav-link"
                                                href="http://connoisseur-international.kl.com.ua/seconhand/app/details.html">Детальніше
                            про товар</a></li>
                        <li class="nav-item"><a class="nav-link"
                                                href="http://connoisseur-international.kl.com.ua/seconhand/app/delivery.html">Оплата/Доставка</a>
                        </li>
                        <li class="nav-item"><a class="nav-link"
                                                href="http://connoisseur-international.kl.com.ua/seconhand/app/contacts.html">Контакти</a>
                        </li>
                        <li class="nav-item"><a class="nav-link"
                                                href="http://connoisseur-international.kl.com.ua/seconhand/app/catalog.html">Каталог</a>
                        </li>
                        <li class="nav-item"><a class="nav-link"
                                                href="http://connoisseur-international.kl.com.ua/seconhand/app/basket.html">Корзина</a>
                        </li>
                        <li class="nav-item"><a class="nav-link"
                                                href="http://connoisseur-international.kl.com.ua/seconhand/app/about.html">Про
                            нас</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>

</style>
