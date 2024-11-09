<!--
 * Component: Textarea
 * Author: MasProxy
 * Date Created: 2024-08-22
 * Last Modified: 2024-08-22
 * Description: This is a component for textarea field.
-->

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])

const input = ref(null)

defineExpose({ input })
</script>

<template>
  <div class="relative">
    <textarea
      ref="input"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border-gray-300 focus:ring-primary focus:border-primary rounded-md shadow-sm mt-1 block w-full"></textarea>
  </div>
  <div v-if="errorMessage !== ''" class="text-xs text-danger font-medium mt-1">
    {{ errorMessage }}
  </div>
</template>
