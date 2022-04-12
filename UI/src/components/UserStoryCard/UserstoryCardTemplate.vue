<template>
  <q-card class="column justify-around"
          :style="{'background-color':'#'+background, 'min-width':'280px', 'color':'white', 'max-width': '280px'}"
  >
    <q-card-section>
      <div class="text-subtitle1 text-weight-bold q-mb-sm" style="color: #e4e4e4">
        <slot name="title"/>
        <div class="text-grey">
          <slot name="cost"/>
        </div>
      </div>

      <div class="user-story-text row" style="color: #e4e4e4">
        <slot name="body"/>
      </div>
    </q-card-section>
    <q-separator :color="hidden?'red-4':'green'"/>
    <q-card-actions class="row">
      <slot name="options"></slot>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "UserstoryCardTemplate",
  props: {
    hidden: Boolean,
    background: String,
  }
}
</script>

<style scoped>

</style>