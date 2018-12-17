<template>
    <section class="submenu p-3 shadow">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-10 col-md-8 mb-3 mb-md-0">
                    <form>
                        <div class="form-row">
                            <input v-model="search" class="col-10 col-md-11 form-control" type="text"
                                   name="search" placeholder="Поиск по каталогу">
                            <button @click.prevent="submitSearch" class="col-2 col-md-1 btn btn-orange"
                                    type="submit"><i class="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div class="col-2 col-md-1 ml-auto">
                    <router-link class="basket" :to="{name:'basket'}">
                        <i class="basket__icon fas fa-shopping-basket"></i>
                        <span class="basket__count">{{getCountProducts}}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import * as types from '../store/actions.types'
  import { mapGetters } from 'vuex'

  export default {
    name: 'SubHeaderLine',
    computed: {
      ...mapGetters([
        'getCountProducts'
      ])
    },
    data() {
      return {
        search: ''
      }
    },
    methods: {
      submitSearch() {
        this.$store.dispatch(types.GET_SEARCH_RESULTS, this.search)
        this.search = ''
        this.$router.push({ name: 'search' })
      }
    }
  }
</script>

<style scoped>

</style>
