<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-8 card">
        {{ $t('counter', { counter }) }}
        <v-btn @click="increment">
          {{ $t('increment') }}
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    counter() {
      return this.$store.getters.getCounter
    }
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const stock = this.$api.stock.getUsers()
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    }
  }
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>
