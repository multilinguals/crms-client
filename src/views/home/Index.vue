<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card
                color="#385F73"
                dark
        >
          <v-card-text class="white--text">
            <div class="headline mb-2">{{ group.name }}</div>
            {{ group.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn text @click="onOpenDetail(group.groupId)">查看详情</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { getGroup } from "@/apis/group"

  export default {
    name: "Home",
    data: () => {
      return {
        group: {
          name: '',
          description: ''
        }
      }
    },
    created() {
      getGroup().then(res => {
        this.group = Object.assign({}, res)
      })
    },
    methods: {
      onOpenDetail(id) {
        console.log('groupId:'+id)
        this.$router.push({
          name: 'group_detail',
          params: {id}
        })
      }
    }
  }
</script>

<style scoped>

</style>
