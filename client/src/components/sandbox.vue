<template>
  <span>Sandbox component</span>

  <q-input
    v-model="input"
    outlined
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input: string = ref(null)
</script>
