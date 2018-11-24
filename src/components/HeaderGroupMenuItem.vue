<template>
    <el-dropdown @command="handleDropdown" trigger="click" :hide-on-click="false">
        <span @click="handleDropdown" class="pb-3 pt-3 catalog__toggle btn dropdown-toggle">
            {{group.name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in group.subGroups" :key="item.id">
                <header-group-menu-item
                        :group="item"
                        :groupsTopLevel="groupsTopLevel" :key="item.id"/>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  import * as types from '@/store/actions.types'

  import HeaderGroupMenuItem from './HeaderGroupMenuItem'

  export default {
    name: 'HeaderGroupMenuItem',
    components: {
      HeaderGroupMenuItem
    },
    props: {
      group: {
        type: Object,
        required: true
      },
      groupsTopLevel: {
        types: Array,
        required: true
      }
    },
    methods: {
      handleDropdown() {
        if (Array.isArray(this.group.subGroups)) return
        this.$store.dispatch(types.GET_SUB_GROUPS, {
          id: this.group.id,
          groupsTopLevel: this.groupsTopLevel,
          group: this.group
        })
      }
    }
  }
</script>

<style scoped>

</style>
