<template>
    <div class="card-deck">
        <router-link v-for="item in data"
                     :to="{name:type === 'products'?'product':'group',params:{id:item.id}}"
                     class="card" :key="item.id">
            <div class="thumbnail">
                <img v-if="type === 'products'" class="card-img-top thumbnail-img"
                     :src="`/api/products/${item.id}/images/${item.imageId}/content`"
                     alt="Card image catalog">
                <img v-else class="card-img-top thumbnail-img"
                     :src="`/api/groups/${item.id}/images/${item.imageId}/content`"
                     alt="Card image catalog">
            </div>
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
        margin: 0;

    }
    .card {
        display: block;
        margin-bottom: 10px;
        max-width: 331px;
        min-width: 245px;
        margin-left: 0;
        margin-right: 0;
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
            flex-direction: row;
        }
        .card {
            max-width: 48%;
            flex-basis: 44%;
        }
    }

    @media(min-width: 992px) {
        .card-deck {
            justify-content: flex-start;
        }

        .card {
            max-width: 28%;
            margin-left: 0;
            margin-right: 0;
            &:nth-child(3n+2) {
                margin-left:73px;
                margin-right:73px;
            }
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

    .thumbnail {
        position: relative;
        width: 100%;
        height: 165px;
        overflow: hidden;
    }

    .thumbnail-img {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: auto;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }
</style>
