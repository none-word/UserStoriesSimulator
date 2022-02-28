<template>
  <q-header class="app-header">
    <q-toolbar class="row items-center">
      <q-avatar>
        <q-icon name="task" size="md" class="app-header-icon"/>
      </q-avatar>
      <q-toolbar-title>
        User stories simulator
      </q-toolbar-title>
      <div>
        <img src="../assets/imgs/UI_LOGO.png" height="27"/>
      </div>
    </q-toolbar>
    <q-tabs align="left" class="app-header-tabs" no-caps>
      <q-route-tab to="/page1" label="Exercise 1"/>
      <q-route-tab to="/page2" label="Exercise 2"/>
      <q-route-tab to="/page3" label="Exercise 3"/>
    </q-tabs>
  </q-header>
</template>

<script>

import university_logo from '../assets/imgs/UI_LOGO.png'

export default {
  name: "AppHeader"
}
</script>

<style scoped>
.app-header {
  background-color: #f3f4f7;
  color: #002f56
}

.app-header-tabs {
  background-color: #00273f;
  color: #f3f4f7
}

.app-header-icon {
  color: #006570;
}
</style>
