<template>
    <header>
        <div
                v-for="element in elements"
                @click="$router.push({
                    name: element.routeName
                })"
                v-bind:class="{
                    active: $router.currentRoute.name === element.routeName
                }"
                class='header-element'
        >
            {{element.name}}
        </div>
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

</style>
