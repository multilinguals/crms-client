<template>
  <v-bottom-sheet v-model="sheet">
    <v-sheet class="text-center" height="200px">
      <v-row>
        <v-col cols="12">
          <v-combobox
                  v-model="select"
                  :items="items"
                  label="选择参团用户"
                  multiple
                  chips
                  style="padding-left: 20px; padding-right: 20px"
          >
            <template v-slot:selection="data">
              <v-chip
                      :key="JSON.stringify(data.item)"
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      :disabled="data.disabled"
                      @click:close="data.parent.selectItem(data.item)"
              >
                <v-avatar
                        class="accent white--text"
                        left
                        v-text="data.item.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item }}
              </v-chip>
            </template>
          </v-combobox>
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
  export default {
    name: "SelectMemberDialog",
    data: () => ({
      sheet: false,
      select: ['用户1'],
      items: [
        '用户1',
        '用户2',
      ],
    }),
    methods: {
      open() {
        this.sheet = true
      }
    }
  }
</script>

<style scoped>

</style>
