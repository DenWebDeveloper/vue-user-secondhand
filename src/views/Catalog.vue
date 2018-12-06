<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12  section__title">
                    <h2 class="m-2">Групи</h2>
                </div>
                <div class="col-md-12">
                    <card-deck :data="groups"/>
                </div>
                <div class="col-md-12" style="margin-top: 50px">
                    <popular-products/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CardDeck from '@/components/CardDeck'
import PopularProducts from '@/components/PopularProducts'

export default {
  name: 'Catalog',
  components: {
    CardDeck,
    PopularProducts
  },
  data() {
    return {
      groups: [],
    }
  },
  created() {
    this.getGroups()
  },
  methods: {
    getGroups() {
      this.$api('/groups', {
        params: {
          isTopLevelGroup: true,
        },
      })
        .then(res => this.groups = res.data)
    },
  },
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100px;
        margin-bottom: 10px;
        color: inherit;
        text-decoration: none;

        &:hover {
            box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.28);
        }
    }

    .slider .card {
        width: auto;
        padding: 10px;
    }

    .image,
    .card-img-top {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #ccc;
    }

    .carousel {
        background-color: #ccc;
    }
</style>
