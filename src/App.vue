<template>
  <v-app>
    <app-bar></app-bar>
    <v-content>
      <loading></loading>
      <router-view/>
    </v-content>

    <bottom-nav></bottom-nav>
  </v-app>
</template>

<script>
  import {AppBar, BottomNav, Loading} from './components/core'

  export default {
    name: 'App',
    components: {
      AppBar,
      BottomNav,
      Loading
    }
  };
</script>
