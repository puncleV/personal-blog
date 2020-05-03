<template>
  <div class="v-box">
    <div class="content">
      <div class="v-box">
        <topic-preview v-for="topic in topics" :key="topic.id" :topic="topic"></topic-preview>
        <take-me-to-the-top></take-me-to-the-top>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import TopicPreview from './topic-preview';
import TakeMeToTheTop from '../take-me-to-the-top';

export default {
  name: 'TopicsList',
  components: { TakeMeToTheTop, TopicPreview },
  created() {
    this.$store.dispatch('topics/getTopics');
  },
  computed: {
    ...mapState({
      topics: state => state.topics.all
    })
  }
};
</script>

<style scoped></style>
