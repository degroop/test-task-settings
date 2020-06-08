<template>
    <div id="app">
        <the-sidebar-panel />
        <the-settings-page />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TheSidebarPanel from './components/TheSidebarPanel.vue';
    import TheSettingsPage from './components/TheSettingsPage.vue';

    @Component({
        components: {
            TheSidebarPanel,
            TheSettingsPage
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
