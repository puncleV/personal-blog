<template>
    <div id="app">
        <app-header></app-header>
        <router-view/>
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
</style>
