<template>
  <q-btn icon="quiz" class="q-pr-xs q-pl-xs" outline dense size="sm" no-caps style="color: whitesmoke"
         @click="getHint"
  >Get hint!
  </q-btn>
</template>

<script>
import {splittingMethods} from "src/userStoriesStorageService";

export default {
  name: "HintButton",
  methods: {
    getHint() {
      const methodMsg = splittingMethods()[this.$route.params.id]
      this.$q.notify({
        message: methodMsg,
        color: 'green'
      })
    }
  }
}
</script>

<style scoped>

</style>
