<template>
  <v-app-bar
          app
          color="teal lighten-3"
          dark
  >
    <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

    <v-toolbar-title>CMRS</v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-menu
            left
            bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
                v-for="n in 5"
                :key="n"
                @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar"
  }
</script>

<style scoped>

</style>
