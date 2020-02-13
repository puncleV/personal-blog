<template>
    <div class="topic">
        <div class="topic-body">
            <div class="header">
                <h1>{{title}}</h1>
                <h3>{{time | publishedFormat}}</h3>
            </div>
            <div>
                <vue-simple-markdown :source="text">
                </vue-simple-markdown>
            </div>
            <take-me-to-the-top></take-me-to-the-top>
        </div>
    </div>
</template>

<script>
    import moment from "moment";
    import TakeMeToTheTop from "../take-me-to-the-top";

    export default {
        name: "topic",
        components: {TakeMeToTheTop},
        data: () => ({
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n' +
                '\n' +
                'Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n' +
                '\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n' +
                '\n' +
                'Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n' +
                '\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n' +
                '\n' +
                'Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n' +
                '\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n' +
                '\n' +
                'Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n' +
                '\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n' +
                '\n' +
                'Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n' +
                '\n',
            time: Date.now(),
            title: 'Title'
        }),
        filters: {
            publishedFormat: (value) => {
                return moment(value).format('DD.MM.YYYY HH:mm')
            }
        }
    }
</script>

<style scoped>
    .header {

    }

    .topic {
        display: flex;
        justify-content: center;
        color: #74788d;
    }

    .topic-body {
        width: 70%;
        min-width: 450px;
        text-align: justify;
        background-color: white;
        padding: 20px;
        margin-top: 10px;
    }

    h1 {
        color: #48465b;
    }
</style>
