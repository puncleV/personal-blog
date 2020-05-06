<template>
  <div id="app" class="app">
    <app-header></app-header>
    <router-view class="body" />
  </div>
</template>
<style>
@import 'https://fonts.googleapis.com/css?family=Tomorrow&display=swaps';
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/default.min.css';
@import '/node_modules/vue-simple-markdown/dist/vue-simple-markdown.css';

body,
html {
  font-family: 'Tomorrow', sans-serif;
  font-size: 14px;
  margin: 0;
  min-height: 100%;
}
</style>
<script>
import AppHeader from './components/app-header';

export default {
  name: 'App',
  components: { AppHeader }
};
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
