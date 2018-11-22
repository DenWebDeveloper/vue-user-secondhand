<template>
    <div class="card-deck">
        <router-link v-for="item in data"
                     :to="{name:type === 'products'?'product':'group',params:{id:item.id}}"
                     class="card" :key="item.id">
            <img v-if="type === 'products'" class="card-img-top"
            :src="`http://acgproduct-001-site1.gtempurl.com/api/products/${item.id}/images/${item.imageId}/content`"
            alt="Card image catalog">
            <img v-else class="card-img-top"
                 :src="`http://acgproduct-001-site1.gtempurl.com/api/groups/${item.id}/images/${item.imageId}/content`"
                 alt="Card image catalog">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <hr>
                <p>{{item.shortDescription}}</p>
                <hr>
                <div v-if="type === 'products'" class="d-flex">
                    <el-tooltip class="ml-auto" effect="dark" content="Додати в корзину" placement="left-start">
                        <el-button type="warning" icon="el-icon-sold-out" circle></el-button>
                    </el-tooltip>
                    <el-tooltip class="ml-1" effect="dark" content="Переглянути товар детальніше" placement="top">
                        <el-button style="transform: rotate(180deg)" type="primary" icon="el-icon-back" circle></el-button>
                    </el-tooltip>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'CardDeck',
    props: {
      data: {
        type: Array,
        required: true,
      },
      type: {
        type: String,
        required: false,
      },
    },
  }
</script>

<style lang="scss" scoped>
    .card {
        width: 300px;
        display: block;
        max-width: 300px;
        margin-bottom: 10px;
        color: inherit;
        text-decoration: none;

        &:hover {
            box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.28);
        }
    }

    .slider .card {
        width: auto;
    }

    .card-body {
        padding: 10px;
    }

    .image,
    .card-img-top {
        width: 100%;
        height: 165px;
    }

    .carousel {
        background-color: #ccc;
    }
</style>
