<template>
  <div id="app">
    <sidebar-panel />
    <settings-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SidebarPanel from './components/SidebarPanel.vue';
import SettingsPage from './components/SettingsPage.vue';

@Component({
  components: {
    SidebarPanel,
    SettingsPage
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import "./assets/fonts/fonts.less";
@import "./assets/styles/elements.less";

body {
    margin: 0;
    padding: 0;
    background: #F5F5F7;
    min-width: 1038px;
}
</style>
