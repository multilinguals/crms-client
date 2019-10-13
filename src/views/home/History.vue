<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card
                color="#385F73"
                dark
        >
          <v-card-text class="white--text">
            <div class="headline mb-2">xxxx餐厅</div>
            History
          </v-card-text>

          <v-card-actions>
            <v-btn text>2019年09月15日</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { getGroup } from "@/apis/group"

  export default {
    name: "History",
    created() {
      getGroup().then(res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>
