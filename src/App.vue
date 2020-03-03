<template>
    <div id="app" class="app">
        <app-header></app-header>
        <router-view class="body"/>
    </div>
</template>

<script>


import AppHeader from "./components/app-header";
export default {
  name: 'app',
    components: {AppHeader},
}
</script>

<style lang="css">
    .app {
        background-color: #f2f3f8;
        min-height: 100%;
    }

    .v-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .h-box {
        display: flex;
        align-items: flex-start;
    }

    .content {
        max-width: 60rem;
        text-align: justify;
        padding: 0 2rem;
    }
</style>
