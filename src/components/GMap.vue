<template>
    <GmapMap
            v-if="mapLocation.length !== 0"
            :center="{lat:mapLocation[0], lng:mapLocation[1]}"
            :zoom="18"
            style="width: 100%; height: 100%">
        <GmapMarker
                :position="{lat:mapLocation[0], lng:mapLocation[1]}"
                :clickable="true"
                :draggable="true"
        />
    </GmapMap>
</template>

<script>
    import {mapGetters} from 'vuex'
  export default {
    name: 'GMap',
    computed: {
      ...mapGetters({
        mapLocation:'getMapLocation'
      })
    },
    created() {

    }
  }
</script>

<style scoped>

</style>
