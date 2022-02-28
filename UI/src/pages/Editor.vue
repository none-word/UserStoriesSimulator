<template>
  <div class="row editor">
    <div class="col-6 q-pa-lg editor-sections-container">
      <div v-for="section of sections" :key="section.deep" class="editor-section-row q-mb-md q-gutter-sm">
        <user-story-card :cardBackground="section.indicator"/>
        <user-story-card :cardBackground="section.indicator"/>
        <user-story-card :cardBackground="section.indicator"/>
        <user-story-card :cardBackground="section.indicator"/>
      </div>
    </div>
    <div class="col-6 q-pa-lg">
      ddd
    </div>
  </div>
</template>

<script>
import UserStoryCard from "components/UserStoryCard";

export default {
  name: "Editor",
  components: {UserStoryCard},
  data() {
    return {
      sections: [
        {deep: 0, name: 'first', indicator: '115740'},
        {deep: 1, name: 'second', indicator: '16a085'},
        {deep: 2, name: 'third', indicator: '00363d'},
        {deep: 3, name: 'fourth', indicator: '1c2d37'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.bordered-right {
  box-sizing: border-box;
  border-right: 1px solid $grey-4;
}

.editor-sections-container div {
  border-bottom: 1px solid $grey-4;
}

.editor > div {
  height: 100%;
  overflow-y: auto
}

.editor-section-row {
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-x: auto;
}
</style>
