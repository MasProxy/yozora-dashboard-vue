<!--
 * Component: Select
 * Author: MasProxy
 * Date Created: 2024-06-10
 * Last Modified: 2024-09-26
 * Description: This is a component for select.
-->

<script setup>
const props = defineProps({
  modelValue: {
    required: true,
  },
  small: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <select
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="small ? 'h-[36px]' : 'h-[42px]'"
    class="text-sm border-gray-300 focus:ring-primary focus:border-primary rounded-md shadow-sm block w-full disabled:bg-gray-50 disabled:text-gray-500">
    <slot></slot>
  </select>
</template>
