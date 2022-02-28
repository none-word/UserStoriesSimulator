<template>
  <q-header class="app-header">
    <q-toolbar class="row items-center">
      <q-avatar>
        <q-icon name="task" size="md" class="app-header-icon"/>
      </q-avatar>
      <q-toolbar-title class="text-weight-medium">
        User stories <span class="">simulator</span>
      </q-toolbar-title>
      <div>
        <img src="../assets/imgs/UI_LOGO.png" height="27"/>
      </div>
    </q-toolbar>
    <div class="row full-width app-header-options items-center justify-between">
      <q-tabs align="left" no-caps>
        <q-route-tab to="/page1" label="Exercise 1"/>
        <q-route-tab to="/page2" label="Exercise 2"/>
        <q-route-tab to="/page3" label="Exercise 3"/>
      </q-tabs>
      <div class="row q-gutter-sm q-mr-sm">
        <div>
          <reset-solution-button/>
        </div>
        <div>
          <show-solution-button/>
        </div>
      </div>
    </div>
  </q-header>
</template>

<script>

import university_logo from '../assets/imgs/UI_LOGO.png'
import ResetSolutionButton from "components/ResetSolutionButton";
import ShowSolutionButton from "components/ShowSolutionButton";

export default {
  name: "AppHeader",
  components: {ShowSolutionButton, ResetSolutionButton}
}
</script>

<style scoped>
.app-header {
  background-color: #f3f4f7;
  color: #002f56
}

.app-header-options {
  background-color: #00273f;
  color: #f3f4f7
}

.app-header-icon {
  color: #006570;
}
</style>
