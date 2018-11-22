<template>
    <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name:'catalog' }">Каталог</el-breadcrumb-item>
        <el-breadcrumb-item
                v-for="item in data"
                :key="item.id">
            <router-link :to="{name: 'group', params:{id:item.id}}">
                {{item.name}}
            </router-link>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style scoped>
    .breadcrumb {
        margin-bottom: 0;
        font-size: 18px;
        background-color: transparent;
    }
</style>
