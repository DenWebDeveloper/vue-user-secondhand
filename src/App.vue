<template>
  <div id="app">
    <layout/>
  </div>
</template>
<script>
import Layout from '@/views/Layout'
import * as types from './store/actions.types'

export default {
  name: 'App',
  components: {
    Layout,
  },
  beforeMount() { // Інформація використовується в header тому завантажуємо в корні проекта
    this.$store.dispatch(types.GET_BASE_INFO)
    this.$store.dispatch(types.GET_SOCIALS)
    this.$store.dispatch(types.GET_ADDITIONAL_INFO)
  }
}
</script>
