<template>
    <div class="home">
        <div class="about">
            <div>
                <h1>Hello visitor!</h1>
                <p>
                    My name is Viktor, I am software engineer. This is my personal blog where I am going to share with you anything I want and have time to write about.
                    Currently I am living in Russia with my girlfriend and a cat but I am going to go somewhere else.
                    <router-link class="link" tag="label" :to="{
                        name: 'About'
                    }">Continue...</router-link>
                </p>

            </div>
        </div>
        <topics-list></topics-list>
    </div>
</template>

<script>

import TopicsList from "./topics/topics-list";
export default {
  name: 'Home',
    components: {TopicsList},
}

</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about > div {
        width: calc(40% + 40px);
        text-align: justify;
    }

    h1 {
        color: #48465b;
        font-size: 3.5rem;
    }

    p {
        color: #74788d;
        font-size: 1.25rem;
    }

    .link {
        cursor: pointer;
        color: #5d78ff;
    }

    .link:hover {
        text-decoration: underline;
    }
</style>
