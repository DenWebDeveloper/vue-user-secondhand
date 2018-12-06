<template>
    <div style="display: flex; flex-direction: column;">
        <header-group-menu-item
                v-for="item in groupsTopLevel"
                :groupsTopLevel="groupsTopLevel" :group="item" :key="item.id"/>
    </div>
</template>


<script>
  import * as types from '@/store/actions.types'
  import { mapGetters } from 'vuex'

  import HeaderGroupMenuItem from './HeaderGroupMenuItem'

  export default {
    name: 'HeaderGroupMenu',
    components: {
      HeaderGroupMenuItem
    },
    computed: {
      ...mapGetters({
        groupsTopLevel: 'groupsTopLevel'
      })
    },
    beforeMount() {
      this.$store.dispatch(types.GET_TOP_GROUPS)
    }
  }
</script>

<style scoped>

</style>
