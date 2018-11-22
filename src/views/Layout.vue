<template>
    <div class="global-container">
        <div>
            <header-vue/>
            <sub-header-line/>
            <router-view/>
        </div>
        <footer-vue/>
    </div>
</template>

<script>
import HeaderVue from '@/components/Header'
import FooterVue from '@/components/Footer'
import SubHeaderLine from '@/components/SubHeaderLine'

export default {
  name: 'Layout',
  components: {
    HeaderVue,
    FooterVue,
    SubHeaderLine,
  },
}
</script>

<style scoped>
    .global-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
