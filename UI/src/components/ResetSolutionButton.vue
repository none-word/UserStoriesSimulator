<template>
  <q-btn icon="refresh" class="q-pr-xs q-pl-xs" outline dense size="sm" no-caps style="color: #dcf8c6"
         @click="resetSolution"
  >Reset my solution
  </q-btn>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "ResetSolutionButton",
  methods: {
    ...mapMutations({
      resetSolution: 'resetSolution'
    })
  },
}
</script>

<style scoped>

</style>
