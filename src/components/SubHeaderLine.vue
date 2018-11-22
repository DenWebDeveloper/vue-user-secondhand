<template>
    <section class="submenu p-3 shadow">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-8 mb-3 mb-md-0">
                    <form>
                        <div class="form-row">
                            <input class="col-10 col-md-11 form-control" type="email"
                                   name="search" placeholder="Поиск по каталогу">
                            <button class="col-2 col-md-1 btn btn-orange"
                                    type="submit"><i class="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div class="col-10 col-md-2 ml-md-auto language">
                    <i class="language__icon fas fa-language mr-1"></i>
                    <a class="language__text mr-1" href="#">Укр</a>
                    <span class="mr-1">/</span><a class="language__text" href="#">En</a></div>
                <div class="col-2 col-md-1">
                    <a class="basket" href="#">
                        <i class="basket__icon fas fa-shopping-basket"></i>
                        <span class="basket__count">12</span></a></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'SubHeaderLine',
}
</script>

<style scoped>

</style>
