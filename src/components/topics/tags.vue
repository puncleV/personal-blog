<template>
  <div class="h-box">
    <div v-for="tag of tags" :key="tag.name" class="tag">{{ tag.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data: () => ({
    tags: new Array(Math.floor(Math.random() * 5)).fill().map((o, i) => ({
      name: `tag ${i}`
    }))
  })
};
</script>

<style scoped>
.tag {
  background-color: #f0f3ff;
  color: #5578eb;
  text-transform: uppercase;
  padding: 0.25rem;
  margin: 0 5px;
}

.tag:first-child {
  margin: 0 5px 0 0;
}
</style>
