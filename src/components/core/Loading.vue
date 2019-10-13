<template>
  <div class="text-center">
    <v-overlay
            :value="loading"
            absolute
    >
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>

  export default {
    name: "Loading",
    computed: {
      loading() {
        return this.$store.state.loading
      },
    }
  }
</script>

<style scoped>

</style>
