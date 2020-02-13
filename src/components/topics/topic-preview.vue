<template>
    <div class="topic-preview">
        <div class="header">
            <router-link class='title' :to="'sdas'">{{topic.title}}</router-link>
            <div class="time">{{topic.published | publishedFormat}}</div>
        </div>
        <div>{{topic.preview}}</div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "topic-preview",
        props: ['topic'],
        filters: {
            publishedFormat: (value) => {
                return moment(value).format('DD.MM.YYYY HH:mm')
            }
        }
    }
</script>

<style scoped>
    .topic-preview {
        width: 40%;
        margin: 10px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid;
        vertical-align: bottom;
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
    }

    .title {
        color: black;
        text-decoration: none;
        font-size: 2.5rem;
    }

    .title:hover {
        text-decoration: underline;
    }

    .time {
        font-size: 1.25rem;
        line-height: 3.5rem;
    }
</style>
