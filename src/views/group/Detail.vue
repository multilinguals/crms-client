<template>
  <v-container fluid>
    <v-card
            class="mx-auto"
            max-width="344"
            outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ group.createdAt | moment("YYYY-MM-DD") }}</div>
          <v-list-item-title class="headline mb-1">{{ group.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ group.description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
                tile
                size="80"
                color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text @click="onOpenMemberDialog">新增成员</v-btn>
        <v-btn text>编辑信息</v-btn>
      </v-card-actions>
    </v-card>

    <v-list>
      <v-subheader>参与人员</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
                v-for="(item, i) in members"
                :key="i"
        >
          <v-list-item-icon>
            <vue-letter-avatar :name="item.realName" size="40" :rounded=true />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.realName"></v-list-item-title>
            <v-list-item-subtitle>{{ item.groupRoleLocalNames | roleNames }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <select-member-dialog ref="memberDialog"></select-member-dialog>
  </v-container>
</template>

<script>
  import SelectMemberDialog from './dialog/SelectMemberDialog'
  import {getGroupDetail, getGroupMembers} from "@/apis/group"

  export default {
    name: "Detail",
    components: {
      SelectMemberDialog
    },
    computed: {
      id() {
        return this.$route.params.id
      }
    },
    data: () => {
      return {
        group: {},
        item: 1,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
        members: []
      }
    },
    filters: {
      roleNames(roles) {
        console.log(roles)
        return Object.values(roles).join(',')
      }
    },
    async created() {
      const group = await getGroupDetail(this.id)
      const members = await getGroupMembers(this.id)

      this.group = Object.assign({}, group)
      this.members = members.content
      console.log(members)
    },
    methods: {
      onOpenMemberDialog() {
        console.log(this.$refs)
        this.$refs['memberDialog'].open()
      }
    }
  }
</script>

<style scoped>

</style>
