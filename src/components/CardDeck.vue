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
    .card-deck {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        display: block;
        margin-bottom: 10px;
        max-width: 331px;
        width: 100%;
        color: inherit;
        text-decoration: none;

        &:hover {
            box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.28);
        }
    }
    @media(min-width: 577px) {
        .card-deck {
            justify-content: space-between;
        }
        .card {
            flex-basis: 44%;
        }
    }

    @media(min-width: 995px) {
        .card {
            flex-basis: 30%;
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
