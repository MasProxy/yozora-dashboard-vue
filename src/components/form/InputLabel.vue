<script setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <label v-bind="$attrs" class="block text-sm text-black font-medium mb-1">
    <span v-if="required" class="text-danger">*</span>
    <slot></slot>
  </label>
</template>
