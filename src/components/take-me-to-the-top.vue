<template>
  <div
    class="button"
    :class="{
      visible: windowTop > 30
    }"
    @click="takeMeToTheTop"
  >
    ^^^^^^^
  </div>
</template>

<script>
export default {
  name: 'TakeMeToTheTop',
  data: () => ({
    windowTop: window.top.scrollY
  }),
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    takeMeToTheTop: () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    onScroll() {
      this.windowTop = window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    }
  }
};
</script>

<style scoped>
.button {
  position: fixed;
  left: 20px;
  bottom: 20px;
  cursor: pointer;
  display: none;
}

.button.visible {
  display: block;
}
</style>
