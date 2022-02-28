<template>
  <div class="row editor">
    <div class="col-6 q-pa-lg editor-sections-container q-gutter-lg">
      <div v-for="section of sections" :key="section.deep" class="editor-section-row q-gutter-sm">
        <user-story-card :cardBackground="section.indicator"/>
        <user-story-card :cardBackground="section.indicator"/>
        <user-story-card :cardBackground="section.indicator"/>
      </div>
    </div>
    <q-separator vertical/>
    <div class="col-6 q-pa-lg editor-sections-container q-gutter-lg">
      <div v-for="section of sections" :key="section.deep" class="editor-section-row q-gutter-sm">
        <user-story-card :cardBackground="section.indicator" :story-hidden="section.hidden"/>
        <user-story-card :cardBackground="section.indicator" :story-hidden="section.hidden"/>
        <user-story-card :cardBackground="section.indicator" :story-hidden="section.hidden"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserStoryCard from "components/UserStoryCard/UserStoryCard";

export default {
  name: "Editor",
  components: {UserStoryCard},
  data() {
    return {
      sections: [
        {deep: 0, name: 'first', indicator: '115740', hidden: true, children: []},
        {deep: 1, name: 'second', indicator: '31577a', hidden: true, children: []},
        {deep: 2, name: 'third', indicator: '00363d', hidden: true, children: []},
        {deep: 3, name: 'fourth', indicator: '1c2d37', hidden: true, children: []},
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
