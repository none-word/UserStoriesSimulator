<template>
  <div class="row editor">
    <div class="col-6 q-pa-lg editor-sections-container q-gutter-lg">
      <div v-for="(section,sectionIdx) of userSections" :key="sectionIdx"
           class="editor-section-row q-gutter-sm q-pb-sm">
        <UserStoryUserCard
            v-for="card of section"
            :key="card.id"
            :id="card.id"
            :title="card.title"
            :body="card.body"
            :cost="card.cost"
            :background="sectionsColors[sectionIdx-1].indicator"
            @onSplitUserStory="splitUserStory({exercise:$route.params.id, cardId:card.id})"
            @onChangeContent="editUserStory({exercise:$route.params.id , cardId: card.id, $event})"
            @onDeleteUserStory="deleteUserStory({exercise:$route.params.id , cardId: card.id, $event})"
        />
      </div>
    </div>
    <q-separator vertical/>
    <div class="col-6 q-pa-lg editor-sections-container q-gutter-lg">
      <div v-for="(section,sectionIdx) of sections" :key="sectionIdx" class="editor-section-row q-gutter-sm q-pb-sm">
        <UserStoryCardSolution
            v-for="card of section"
            :key="card.id"
            :title="card.title"
            :body="card.body"
            :root="sectionIdx ==='1'"
            :hidden="card.hidden"
            :cost="card.cost"
            :background="sectionsColors[sectionIdx-1].indicator"
            @show-card="openUserStoryCard({exercise:$route.params.id,cardId:card.id})"
            @close-card="closeUserStoryCard({exercise:$route.params.id,cardId:card.id})"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import UserStoryCardSolution from "components/UserStoryCard/UserStoryCardSolution";
import UserStoryUserCard from "components/UserStoryCard/UserStoryUserCard";
// import UserStoryUserCard from "components/UserStoryCard/UserStoryUserCard";

export default {
  name: "Training",
  components: {UserStoryUserCard, UserStoryCardSolution},
  //components: {UserStoryCard},
  data() {
    return {
      sectionsColors: [
        {indicator: '115740'},
        {indicator: '31577a'},
        {indicator: '00363d'},
        {indicator: '1c2d37'},
      ]
    }
  },
  computed: {
    ...mapGetters({
      userStoriesList: 'userStoriesList',
      currentUserStoriesList: 'currentUserStoriesList'
    }),
    currentExercise() {
      return this.userStoriesList[this.$route.params.id]
    },
    sections() {
      let sections = {}
      for (let userStory of this.currentExercise) {
        sections.hasOwnProperty(userStory.section) ? sections[userStory.section].push(userStory) : sections[userStory.section] = [userStory]
      }
      return sections
    },
    userSections() {
      let userSections = {}
      for (let userStory of this.currentUserStoriesList) {
        userSections.hasOwnProperty(userStory.section) ? userSections[userStory.section].push(userStory) : userSections[userStory.section] = [userStory]
      }
      return userSections
    }
  },
  methods: {
    ...mapMutations({
      openUserStoryCard: 'openUserStoryCard',
      closeUserStoryCard: 'closeUserStoryCard',
      setStarting: 'setStarting',
      splitUserStory: 'splitUserStory',
      editUserStory: 'editUserStory',
      deleteUserStory: 'deleteUserStory'
    }),
  },
  watch: {
    currentExercise: {
      immediate: true,
      handler() {
        this.setStarting({exercise: this.$route.params.id})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bordered-right {
  box-sizing: border-box;
  border-right: 1px solid $grey-4;
}

.editor > div {
  height: 100%;
  overflow-y: auto
}

.editor-section-row {
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-x: auto;
}
</style>
