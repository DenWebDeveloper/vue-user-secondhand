<template>
    <el-dropdown :trigger="isMobileMode?'click':'hover'" :hide-on-click="false" placement="bottom-start"
                 style="width: 100%">
        <span @click="handleDropdown" @mouseover="handleDropdownHover" class="pb-3 pt-3 catalog__toggle btn dropdown-toggle">
            {{group.name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-if="isMobileMode">
                <router-link :to="{name:'group',params: {id: group.id}}" class="pb-3 pt-3 catalog__toggle btn">
                    Перейти в групу
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </el-dropdown-item>
            <el-dropdown-item v-if="!loaded">
                Завантаження...
            </el-dropdown-item>
            <el-dropdown-item v-if="subGroups.length === 0 && loaded">
                Не знайдено підгруп
            </el-dropdown-item>
            <el-dropdown-item v-else v-for="item in subGroups" :key="item.id">
                    <header-group-menu-item
                            :group="item"
                            :groupsTopLevel="groupsTopLevel" :key="item.id"/>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
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
    data() {
      return {
        subGroups: [],
        loaded: false,
        isMobileMode: document.documentElement.clientWidth < 992,
      }
    },
    methods: {
      handleDropdown() {
        if(this.isMobileMode) {
          if(this.loaded) return

          this.$api(`/groups/${this.group.id}/groups`)
            .then(res => {
              this.loaded = true
              this.subGroups = res.data
            })
        } else {
          this.$router.push({name:'group',params: {id: this.group.id}})
        }
      },
      handleDropdownHover() {

        if(!this.isMobileMode) {
          if(this.loaded) return

          this.$api(`/groups/${this.group.id}/groups`)
            .then(res => {
              this.loaded = true
              this.subGroups = res.data
            })
        }
      }
    }
  }
</script>

<style scoped>

</style>
