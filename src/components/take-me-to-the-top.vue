<template>
    <div
        class='button'
        @click="takeMeToTheTop"  v-bind:class="{
            visible: windowTop > 30
        }"
    >
        ^^^^^^^
    </div>
</template>

<script>
    export default {
        name: "take-me-to-the-top",
        mounted() {
            window.addEventListener("scroll", this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        },
        methods: {
            takeMeToTheTop: () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },
            onScroll(e) {
                this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
            }
        },
        data: () => ({
            windowTop: window.top.scrollY
        })
    }
</script>

<style scoped>
    .button {
        position: fixed;
        left: 20px;
        bottom: 20px;
        cursor: pointer;
        display: none;
    }

    .button.visible {
        display: block;
    }
</style>
