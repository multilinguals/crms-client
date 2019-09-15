<template>
  <v-app>
    <app-bar></app-bar>

    <v-content>
      <main-content></main-content>
    </v-content>

    <bottom-nav></bottom-nav>
  </v-app>
</template>

<script>
  import {AppBar, BottomNav, MainContent} from './components/core'

  export default {
    name: 'App',
    components: {
      AppBar,
      BottomNav,
      MainContent
    },
    data: () => ({
      bottomNav: 'recent',
    }),
  };
</script>
