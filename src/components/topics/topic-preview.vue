<template>
    <div class="topic-preview">
        <div>{{topic.published}}</div>
        <div>{{topic.title}}</div>
        <div>{{topic.preview}}</div>
    </div>
</template>

<script>
    export default {
        name: "topic-preview",
        props: ['topic'],
    }
</script>

<style scoped>
    .topic-preview {
        width: 40rem;
        margin: 10px 0;
    }
</style>
