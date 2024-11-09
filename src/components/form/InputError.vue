<!--
 * Component: InputError
 * Author: MasProxy
 * Date Created: 2024-06-10
 * Last Modified: 2024-08-17
 * Description: This is a error message for input field.
-->

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: '',
    required: true,
  },
})
</script>

<template>
  <div class="mt-1 text-sm text-danger">
    {{ message }}
  </div>
</template>
