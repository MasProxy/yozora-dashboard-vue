<!--
 * Component: InputLabel
 * Author: MasProxy
 * Date Created: 2024-06-10
 * Last Modified: 2024-06-10
 * Description: This is a label for input field.
-->
<script setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <label v-bind="$attrs" class="block text-sm text-black font-medium mb-1">
    <span v-if="required" class="text-danger">*</span>
    <slot></slot>
    {{ value }}
  </label>
</template>
