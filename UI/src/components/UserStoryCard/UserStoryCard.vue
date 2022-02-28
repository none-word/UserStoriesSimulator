<template>
  <q-card class="column justify-between"
          :style="{'background-color':'#'+cardBackground, 'color':'white', 'width': '200px'}">
    <q-card-section>
      <div class="text-subtitle1">User story</div>
      <div v-if="!storyHidden" class="user-story-text" style="color: #e4e4e4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute deserunt mollit anim id est laborum
      </div>
      <div v-else class="row justify-center items-center text-grey full-height">
        Solution is hidden
      </div>
    </q-card-section>
    <q-separator :color="storyHidden?'red-4':'green'"/>
    <q-card-actions class="row justify-between">
      <div v-if="!storyHidden" class="full-width row justify-between">
        <div>
          <q-btn icon="delete" size="sm" flat no-caps style="color: #FF7F7F"/>
          <q-btn icon="edit" size="sm" flat no-caps style="color: #a5cfd5"/>
        </div>
        <div>
          <user-story-card-options/>
        </div>
      </div>
      <div v-else class="row full-width justify-center">
        <q-btn icon="visibility" size="sm" flat no-caps style="color: #e4e4e4" label="Show card"/>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
import UserStoryCardOptions from "components/UserStoryCard/UserStoryCardOptions";

export default {
  name: "UserStoryCard",
  components: {UserStoryCardOptions},
  props: {
    cardBackground: String,
    storyHidden: Boolean,
  },
}
</script>

<style scoped>
.user-story-text {
  font-size: 11px;
}
</style>
