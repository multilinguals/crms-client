<template>
  <v-footer app style="padding: 0;">
    <v-bottom-navigation
            v-model="bottomNav"
    >
      <v-btn value="recent">
        <span>首页</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>历史</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>我的</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
  export default {
    name: "BottomNav"
  }
</script>

<style scoped>

</style>
