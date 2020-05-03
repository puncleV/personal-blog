<template>
    <div class="topic-preview">
        <div class="header">
            <router-link tag="div" class='title' :to="{
                name: 'Topic',
                params: {
                    id: topic.id
                }
            }">{{topic.title}}</router-link>
            <div class="time">
                {{topic.published | publishedFormat}}
            </div>
        </div>
        <tags></tags>
        <div class="preview">{{topic.preview}}</div>
    </div>
</template>

<script>
import moment from 'moment'
import Tags from './tags'

export default {
  name: 'topic-preview',
  components: { Tags },
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
        min-width: 300px;
        margin: 10px 0;
        padding: 20px;
        vertical-align: bottom;
        background-color: white;
        box-shadow: 0 0 13px 0 rgba(82,63,105,.05);
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        align-items: baseline;
        flex-wrap: wrap;
    }

    .title {
        color: #48465b;
        text-decoration: none;
        font-size: 2.5rem;
        cursor: pointer;
    }

    .title:hover {
        text-decoration: underline;
    }

    .time {
        color: #74788d;
        font-size: 1.25rem;
        font-weight: bold;
    }

    .preview {
        color: #74788d;
        text-align: justify;
    }
</style>
