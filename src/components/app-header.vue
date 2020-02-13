<template>
    <header>
        <router-link
                v-for="element in elements"
                :to = "{name: element.routeName}"
                class='header-element'
        >
            {{element.name}}
        </router-link>
    </header>
</template>

<script>
    export default {
        name: "app-header",
        data: () => ({
            elements: [
                {
                    name: 'Home',
                    routeName: 'Home',
                },
                {
                    name: 'Blog',
                    routeName: 'Blog',
                },
                {
                    name: 'About',
                    routeName: 'About',
                }
            ]
        })
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        height: 3rem;
        background-color: #b356ff;
    }

    .header-element {
        margin: 0 5px;
        font-size: 2rem;
        text-transform: uppercase;
        line-height: 3rem;
        color: black;
        text-decoration: none;
    }

    .header-element.router-link-exact-active {
        opacity: 0.55;
    }
</style>
