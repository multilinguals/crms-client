<template>
  <v-footer app style="padding: 0;position: absolute">
    <v-bottom-navigation
            v-model="bottomNav"
            color="deep-purple accent-4"
    >
      <template v-for="nav in navs">
        <router-link :key="nav.url" :to="nav.url">
          <v-btn :value="nav.url" style="height: 100%;">
            <span>{{ nav.name }}</span>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-btn>
        </router-link>
      </template>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
  export default {
    name: "BottomNav",
    data: () => ({
      bottomNav: '/',
      navs: [
        {
          name: '首页',
          icon: 'mdi-home',
          url: '/'
        },
        {
          name: '历史',
          icon: 'mdi-history',
          url: '/history'
        },
        {
          name: '我的',
          icon: 'mdi-account',
          url: '/my'
        }
      ]
    }),
    methods: {
      changNav(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>
  .v-application a {
    color: unset;
  }

</style>
