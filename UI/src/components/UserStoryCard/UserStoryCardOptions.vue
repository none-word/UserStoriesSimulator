<template>
  <q-btn-dropdown outline dense size="sm" no-caps icon="settings_suggest">
    <q-list class="text-grey-8">
      <q-item clickable v-close-popup dense>
        <q-item-section>
          <q-item-label @click="$emit('onSplitUserStory')">Split</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup dense>
        <q-item-section>
          <q-item-label @click="$emit('onDeleteUserStories')">Remove child user stories</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup dense>
        <q-item-section>
          <q-item-label>Another option</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: "UserStoryCardOptions",
}
</script>

<style scoped>

</style>
