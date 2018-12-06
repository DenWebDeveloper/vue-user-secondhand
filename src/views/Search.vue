<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12  section__title">
                    <h2 class="m-2">Знайдені продукти</h2>
                </div>
                <div v-if="getResultsSearch.length !== 0" class="col-md-12">
                    <card-deck type="products" :data="getResultsSearch"/>
                </div>
                <div v-else>
                    <p class="font-weight-bold">По вашому запиту нічого не знайдено</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import CardDeck from '../components/CardDeck'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Search',
    components:{
      CardDeck
    },
    computed: {
      ...mapGetters([
        'getResultsSearch'
      ])
    },
  }
</script>

<style scoped>

</style>
