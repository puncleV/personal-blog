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

export default {
  name: 'TopicsList',
  components: { TakeMeToTheTop, TopicPreview },
  created () {
    this.topics = Array(20).fill().map((t, i) => ({
      id: i,
      title: `TiTlE ${i} Lorem ipsum dolor `,
      published: new Date(),
      tags: new Array(~~(Math.random() * 5)).fill().map((o, i) => ({
        name: `tag ${i}`
      })),
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n' +
                  '\n' +
                  'Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n' +
                  '\n'
    }))
  },
  data: () => ({
    topics: []
  })
}
</script>

<style scoped>
</style>
