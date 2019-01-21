<template>
    <section class="about-desc">
        <div class="container about-desc__container">
            <div class="row py-5">
                <div class="col-md-6">
                    <h3 class="mb-4"><i class="fa fa-file-alt fa-2x mr-3"></i><span class="h1">Про нас</span></h3>
                    <p class="h5 text-justify">
                        {{text}}</p>
                </div>
                <div class="col-md-6 align-self-center d-none d-sm-block"><img class="img-fluid rounded-circle"
                                                                               src="../assets/img/about-desc.jpg"
                                                                               alt="Фото нашого магазину"></div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        text: ''
      }
    },
    created() {
      if (this.text.length === 0) {
        this.getText()
      }
    },
    methods: {
      getText() {
        this.$api('/portal-parameters/about-us-descriptions')
          .then(res => {
            this.text = res.data.value
          })
      }
    }
  }
</script>
