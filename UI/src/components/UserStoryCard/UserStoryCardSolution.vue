<template>
  <UserstoryCardTemplate :hidden="hidden" :background="background">
    <template v-slot:title>
      <div v-if="!hidden">{{ title }}</div>
      <div v-else>Title hidden</div>
    </template>
    <template v-slot:cost>
      <div v-if="!hidden">Cost: {{ cost }}</div>
      <div v-else>Cost hidden</div>
    </template>
    <template v-slot:body>
      <div v-if="!hidden">{{ body }}</div>
      <div v-else>Solution hidden</div>
    </template>
    <template v-slot:options>
      <div v-if="!root" class="row full-width justify-center">
        <q-btn
            v-if="hidden"
            @click="showCard"
            icon="visibility"
            size="sm"
            flat
            no-caps
            style="color: #e4e4e4"
            label="Show card"
        />
        <q-btn
            v-else
            @click="closeCard"
            icon="visibility_off"
            size="sm"
            flat
            no-caps
            style="color: #e4e4e4"
            label="Hide card"
        />
      </div>
    </template>
  </UserstoryCardTemplate>
</template>

<script>
import UserstoryCardTemplate from "components/UserStoryCard/UserstoryCardTemplate";

export default {
  name: "UserStoryCardSolution",
  components: {UserstoryCardTemplate},
  props: {
    title: String,
    body: String,
    hidden: Boolean,
    background: String,
    root: Boolean,
    cost: Number,
  },
  methods: {
    showCard() {
      this.$emit('show-card')
    },
    closeCard() {
      this.$emit('close-card')
    }
  }
}
</script>

<style scoped>

</style>