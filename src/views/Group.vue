<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-4">
                    <breadcrumb :data="groupPath"/>
                </div>
                <div v-if="groups.length" class="col-md-12">
                    <div class="section__title col-md-12 f-flex">
                        <h2 class="py-2 m-0">
                            <span>Підгрупи</span>
                        </h2>
                    </div>
                </div>
                <div v-if="groups.length" class="col-md-12">
                    <card-deck :data="groups"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 slider" style="margin-top: 50px">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3 popular-products__header col-md-12 f-flex">
                                <h2 class="py-2 m-0">
                                    <span>Товари групи</span>
                                </h2>
                            </div>
                            <card-deck v-if="group.products && group.products.length !== 0" :data="group.products"
                                       type="products"/>
                            <el-alert
                                    v-else
                                    title="На даний час немає товарів"
                                    :closable="false"
                                    type="error">
                            </el-alert>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import CardDeck from '@/components/CardDeck'
  import Breadcrumb from '@/components/Breadcrumb'

  export default {
    name: 'Group',
    components: {
      CardDeck,
      Breadcrumb,
    },
    data() {
      return {
        groups: [],
        groupPath: [],
        group: {},
      }
    },
    created() {
      this.getGroups(this.$route.params.id)
    },
    methods: {
      getGroups(id) {
        this.$api(`/groups/${id}/groups`)
          .then(res => {
            this.groups = res.data
          })
        this.$api(`/groups/${id}`)
          .then(res => {
            this.group = res.data
          })
        this.$api(`/groups/${id}/path`)
          .then(res => {
            this.groupPath = res.data.reverse()
          })
      },
    },
    beforeRouteUpdate(to, from, next) {
      this.getGroups(to.params.id)
      next()
    },
  }
</script>

<style scoped>

</style>
