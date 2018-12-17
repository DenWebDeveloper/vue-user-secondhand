<template>
<div>
    <div v-for="item in data" :key="item.id">
        <div class="thumbnail">
            <img class="thumbnail-img" :src="item.src" alt="">
        </div>
        <h3>{{item.name}}</h3>
        <p>{{item.shortDescription}}</p>
        <div>
            <span>Кількість:</span>
            <span>{{item.count}}</span>
        </div>
        <div>
            <span>Ціна за 1од:</span>
            <span>{{item.price}}</span>
        </div>
        <div>
            <span>Ціна:</span>
            <span>{{ item.price * item.count }}</span>
        </div>
        <div>
            <el-button
                    size="mini"
                    @click="changeCount(item)">Змінити кількість
            </el-button>
            <el-button
                    style="margin-top: 10px"
                    size="mini"
                    type="danger"
                    @click="handleDelete(item.id)">Видалити
            </el-button>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'BasketCards',
    props: {
      data: {
        type: Array,
        require: true
      }
    }
  }
</script>

<style scoped>
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
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>
