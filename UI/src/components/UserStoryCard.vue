<template>
  <q-card class="" :style="{'background-color':'#'+cardBackground, 'color':'white'}">
    <q-card-section>
      <div class="text-subtitle1">User story</div>
        <div class="user-story-text" style="max-width:200px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
    </q-card-section>

    <q-card-actions>
      <!--      <q-btn flat no-caps>Action 1</q-btn>-->
      <!--      <q-btn flat no-caps>Action 2</q-btn>-->
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "UserStoryCard",
  props: {
    cardBackground: String
  },
}
</script>

<style scoped>
.user-story-text {
  font-size: 11px;
}
</style>
