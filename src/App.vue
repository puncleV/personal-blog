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
</style>
