<template>
  <v-container fluid>
    <v-form
            ref="form"
            v-model="valid"
            lazy-validation
    >
      <v-text-field
              v-model="form.name"
              :counter="8"
              :rules="rules.name"
              label="点参团名称"
              required
      ></v-text-field>

      <v-textarea
              v-model="form.description"
              label="描述"
              rows="2"
      >
      </v-textarea>

      <v-btn
              depressed
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="onCreateGroup"
              style="width: 100%"
      >
        创建点餐团
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
  import { addGroup } from "@/apis/group"

  export default {
    name: "Index",
    data: () => ({
      valid: true,
      form: {
        name: '',
        description: '',
      },
      rules: {
        name: [
          v => !!v || '点参团名称需要填写',
          v => (v && v.length <= 8) || '点参团名称需小于8个字符',
          v => (v && v.length >= 4) || '点参团名称需大于4个字符',
        ]
      }
    }),
    methods: {
      onCreateGroup() {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('openLoading')
          addGroup(this.form).then(res => {
            this.$store.dispatch('closeLoading')
            this.$router.push('/')
          })
        }
      }
    },
  }
</script>

<style scoped>

</style>
