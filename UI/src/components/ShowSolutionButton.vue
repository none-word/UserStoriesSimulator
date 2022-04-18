<template>
  <q-btn v-if="!isSolution"
         icon="visibility" class="q-pr-xs q-pl-xs" outline dense size="sm" no-caps style="color: #e56a54"
         @click="showSolution(exNum)"
  >
    Show
    solution
  </q-btn>
  <q-btn v-else
         icon="visibility" class="q-pr-xs q-pl-xs" outline dense size="sm" no-caps style="color: #e56a54"
         @click="hideSolution(exNum)"
  >
    Hide
    solution
  </q-btn>

</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: "ShowSolutionButton",
  methods: {
    ...mapMutations({
      showSolution: 'showSolution',
      hideSolution: 'hideSolution'
    })
  },
  computed: {
    ...mapGetters({
      isSolution: 'isSolution'
    }),
    exNum(){
      return this.$route.params.id
    }
  },
  watch:{
    exNum(next, prev){
      this.hideSolution(prev)
    }
  }
}
</script>

<style scoped>

</style>
