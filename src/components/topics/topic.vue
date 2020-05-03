<template>
  <div class="topic">
    <div class="topic-body">
      <div class="header">
        <h1>{{ topic.title }}</h1>
        <h3>{{ topic.time | publishedFormat }}</h3>
        <tags></tags>
      </div>
      <div>
        <vue-simple-markdown :source="topic.text"> </vue-simple-markdown>
      </div>
      <take-me-to-the-top></take-me-to-the-top>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';
import TakeMeToTheTop from '../take-me-to-the-top';
import Tags from './tags';

export default {
  name: 'Topic',
  components: { Tags, TakeMeToTheTop },
  created() {
    const { id } = this.$route.params;

    this.$store.dispatch('topics/getTopic', id);
  },
  computed: {
    ...mapState({
      topic: state => state.topics.currentTopic || {}
    })
  },
  filters: {
    publishedFormat: value => {
      return moment(value).format('DD.MM.YYYY HH:mm');
    }
  }
};
</script>

<style scoped>
.markdown-body {
  font-size: 2rem;
}

.topic {
  display: flex;
  justify-content: center;
  color: #74788d;
}

.topic-body {
  max-width: 70rem;
  text-align: justify;
  background-color: white;
  padding: 20px;
  margin-top: 10px;
}

h1 {
  color: #48465b;
}
</style>
