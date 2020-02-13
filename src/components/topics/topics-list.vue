<template>
    <div>
        <topic v-for="topic in topics" v-bind:text="topic.text"></topic>
    </div>
</template>
<script>
    import Topic from "./topic";

    export default {
        name: "TopicsList",
        components: {Topic},
        created() {
          this.topics = Array(20).fill().map((t, i) => ({
              id: i,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n' +
                  '\n' +
                  'Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n' +
                  '\n' +
                  'Sed eu viverra metus. Proin nec dolor sodales, rutrum urna ut, vehicula neque. Suspendisse eu malesuada velit, vel vehicula augue. Cras ullamcorper accumsan odio, in lacinia purus. Quisque suscipit id ligula ac accumsan. Nunc dolor tellus, convallis a metus ac, semper fermentum quam. Pellentesque sit amet lectus massa. Proin efficitur elementum ligula non ultrices. Integer molestie turpis vel aliquam facilisis. Fusce pulvinar accumsan ipsum, ut laoreet orci tempor in. Nam a lorem dignissim, cursus mauris sed, mattis neque. Phasellus nec gravida diam. Duis viverra diam a dui tincidunt, sed aliquet enim tincidunt.\n' +
                  '\n' +
                  'Nunc id vulputate orci. Sed pharetra elit vel eleifend tristique. Quisque laoreet luctus viverra. Aenean tortor ipsum, cursus nec porta in, ullamcorper a turpis. Nam id sapien justo. Aenean elementum nisl at nisi cursus dictum ut vel arcu. Nulla nec leo in elit posuere tristique. Sed maximus tincidunt tempus. Sed rhoncus vitae erat consequat molestie. Suspendisse dignissim, erat a ullamcorper ornare, dolor ipsum interdum nisl, id scelerisque turpis lorem blandit velit.\n' +
                  '\n' +
                  'Fusce malesuada augue sit amet dolor fermentum, et sodales nunc porttitor. Suspendisse leo tellus, pulvinar id vulputate quis, hendrerit vel justo. Ut leo est, volutpat vitae vestibulum vitae, suscipit sit amet ante. Nam id tristique erat. Aenean quis elit libero. Sed dapibus gravida orci eu bibendum. Nullam lorem lacus, porttitor vulputate leo ac, consectetur viverra urna.'
          }))
        },
        data: () => ({
            topics:[]
        })
    }
</script>

<style scoped>

</style>
