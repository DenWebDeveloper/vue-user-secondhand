<template>
    <div class="card-block">
        <div class="card-block__name">
            {{name}}
        </div>
        <div class="card-block__content" :style="notPadding && 'padding:0'">
            <slot><p>{{value}} грн</p></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ProductInfoBlock',
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        required: false
      },
      notPadding: {
        type: Boolean,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
    .card-block {
        color: rgba(0, 0, 0, 0.87);
        margin-bottom: 10px;
    }

    .card-block__name {
        color: #474747;
        text-transform: uppercase;
        font-size: 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

    .card-block__content {
        padding: 10px;

        p {
            padding: 0;
            margin: 0;
        }

    }
</style>
