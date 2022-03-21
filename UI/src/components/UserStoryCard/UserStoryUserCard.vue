<template>
  <UserstoryCardTemplate :background="background">
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:body>
      <div>{{ body }}</div>
    </template>
    <template v-slot:options>
      <div v-if="!root" class="row full-width justify-between">
        <div>
          <q-btn icon="delete" size="sm" flat no-caps style="color: #FF7F7F"/>
          <q-btn icon="edit" size="sm" flat no-caps style="color: #a5cfd5"/>
        </div>
        <div>
          <UserStoryCardOptions/>
        </div>
      </div>
    </template>
  </UserstoryCardTemplate>
</template>

<script>
import UserstoryCardTemplate from "components/UserStoryCard/UserstoryCardTemplate";
import UserStoryCardOptions from "components/UserStoryCard/UserStoryCardOptions";
export default {
  name: "UserStoryUserCard",
  components: {UserStoryCardOptions, UserstoryCardTemplate},
  props: {
    title: String,
    body: String,
    background: String,
    root: Boolean
  },
}
</script>

<style scoped>

</style>