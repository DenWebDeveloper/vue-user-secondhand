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
                <div class="col-md-12 slider" style="margin-top: 50px">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="popular-products__header col-md-12 f-flex">
                                <h2 class="py-2 m-0">
                                    <i class="fas fa-fire mr-3"></i>
                                    <span>Рекомендовані товари</span>
                                </h2>
                            </div>
                            <carousel :perPageCustom="[[480, 2], [768, 5],[888, 5]]" :scrollPerPage="true">
                                <slide v-for="item in groups" :key="item.id">
                                    <div style="padding: 10px">
                                        <router-link to="/" class="card">
                                            <img class="card-img-top"
                                                 :src="`http://acgproduct-001-site1.gtempurl.com/api/groups/${item.id}/images/${item.imageId}/content`"
                                                 alt="Card image catalog">
                                            <div class="card-body">
                                                <h5 class="card-title">{{item.name}}</h5>
                                            </div>
                                        </router-link>
                                    </div>
                                </slide>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CardDeck from '@/components/CardDeck'

export default {
  name: 'Catalog',
  components: {
    CardDeck,
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
