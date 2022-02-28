<template>
  <q-layout view="hHh lpR fff">
    <app-header/>
    <q-page-container class="">
      <router-view class="col" style="min-height: inherit"/>
    </q-page-container>
    <app-footer/>
  </q-layout>
</template>

<script>
import AppHeader from "components/AppHeader";
import AppFooter from "components/AppFooter";

export default {
  name: 'MainLayout',
  components: {AppFooter, AppHeader},
  data() {
    return {
      left: false
    }
  }
}
</script>

