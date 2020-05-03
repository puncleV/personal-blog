<template>
    <div class="v-box">
        <div class="content">
            <div class="v-box">
                <topic-preview v-for="topic in topics" v-bind:topic="topic" :key="topic.id"></topic-preview>
                <take-me-to-the-top></take-me-to-the-top>
            </div>
        </div>
    </div>
</template>
<script>
import TopicPreview from './topic-preview'
import TakeMeToTheTop from '../take-me-to-the-top'
import { mapState } from 'vuex'

export default {
  name: 'TopicsList',
  components: { TakeMeToTheTop, TopicPreview },
  created () {
    this.$store.dispatch('topics/getTopics')
  },
  computed: {
    ...mapState({
      topics: state => state.topics.all
    })
  }
}
</script>

<style scoped>
</style>
