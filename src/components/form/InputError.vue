<script setup>
const props = defineProps({
  errorMessage: {
    type: String,
    default: '',
    required: true,
  },
})

</script>

<template>
  <div class="mt-1 text-sm text-danger">
    {{ errorMessage }}
  </div>
</template>
