<template>
  <q-tabs align="left" no-caps>
    <q-route-tab
        v-for="(exercise, idx) of userStoriesList" :key="idx"
        :to="`/training/${idx}`"
        :label="`Exercise ${idx+1}`"
    />
  </q-tabs>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      userStoriesList: 'userStoriesList'
    })
  }
}
</script>

<style scoped>

</style>