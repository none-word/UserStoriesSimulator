<template>
  <UserstoryCardTemplate :background="background">
    <template v-slot:title>
      <q-input dense dark v-if="editMode" v-model="newTitle" color="white"/>
      <div v-else>{{ title }}</div>
    </template>
    <template v-slot:cost>
      <q-input dense dark v-if="editMode" label="Cost" v-model="newCost" color="white"/>
      <div v-else>Cost: {{ cost }}</div>
    </template>
    <template v-slot:body>
      <q-input
          v-if="editMode"
          type="textarea"
          dense
          class="full-width"
          dark
          v-model="newBody"
          color="white"
      />
      <div v-else>{{ body }}</div>
    </template>
    <template v-slot:options>
      <div v-if="!root" class="row full-width justify-between">
        <div>
          <q-btn
              icon="delete"
              size="sm"
              flat
              no-caps
              style="color: #FF7F7F"
              @click="$emit('onDeleteUserStory')"
          />
          <q-btn
              v-if="!editMode"
              icon="edit"
              size="sm" flat
              no-caps
              style="color: #a5cfd5"
              @click="editMode=true"
          />
          <q-btn
              v-else
              icon="done"
              size="sm" flat
              no-caps
              style="color: #a5cfd5"
              @click="changeContent"
          />
        </div>
        <div>
          <UserStoryCardOptions
              @onSplitUserStory="$emit('onSplitUserStory')"
              @onDeleteUserStories="$emit('onDeleteUserStories')"
          />
        </div>
      </div>
    </template>
  </UserstoryCardTemplate>
</template>

<script>
import UserstoryCardTemplate from "components/UserStoryCard/UserstoryCardTemplate";
import UserStoryCardOptions from "components/UserStoryCard/UserStoryCardOptions";
import {mapMutations} from "vuex";

export default {
  name: "UserStoryUserCard",
  components: {UserStoryCardOptions, UserstoryCardTemplate},
  data() {
    return {
      editMode: false,
      newTitle: this.title,
      newBody: this.body,
      newCost: this.cost,
    }
  },
  props: {
    title: String,
    body: String,
    background: String,
    root: Boolean,
    id: String,
    cost: String,
  },
  methods: {
    changeContent() {
      this.$emit('onChangeContent', {newTitle: this.newTitle, newBody: this.newBody, newCost: this.newCost})
      this.editMode = false
    }
  },
  destroyed() {
    this.editMode = false
  },
}
</script>

<style scoped>

</style>
