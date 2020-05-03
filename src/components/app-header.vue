<template>
    <header>
        <router-link
                v-for="element in elements"
                :to="{name: element.routeName}"
                class='header-element'
                :key="element.routeName"
        >
            {{element.name}}
        </router-link>
    </header>
</template>

<script>
export default {
  name: 'app-header',
  data: () => ({
    elements: [
      {
        name: 'Home',
        routeName: 'Home'
      },
      {
        name: 'Blog',
        routeName: 'Blog'
      },
      {
        name: 'About',
        routeName: 'About'
      }
    ]
  })
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        height: 4rem;
        background-color: #242939;
    }

    .header-element {
        margin: 0 5px;
        font-size: 3rem;
        text-transform: uppercase;
        line-height: 4rem;
        text-decoration: none;
        color: #646c9a;
    }

    .header-element.router-link-exact-active {
        color: white;
    }
</style>
