<!--
 * Component: Input
 * Author: MasProxy
 * Date Created: 2024-06-10
 * Last Modified: 2024-09-19
 * Description: This is a component for input field.
-->

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  modelValue: {
    required: true,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  isCurrency: {
    type: Boolean,
    default: false,
  },
  isNumber: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'right',
  },
  small: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'iconClick', 'debounce'])

//ANCHOR - Function for validate a value
const validateValue = (value) => {
  if (props.isCurrency) {
    emit('update:modelValue', validateCurrency(value))
  } else if (props.isNumber) {
    emit('update:modelValue', validateNumber(value))
  } else {
    emit('update:modelValue', value)
  }
}

//ANCHOR - Function for validate number
const validateNumber = (value) => {
  let tempValue = value
  tempValue = value.replace(/\D/g, '')

  return tempValue
}

//ANCHOR - Function for validate a currency format
const validateCurrency = (value) => {
  let tempValue = value

  tempValue = value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  if (tempValue === '') {
    tempValue = '0'
  }
  if (tempValue.length > 1) {
    if (tempValue[0] === '0') {
      tempValue = tempValue.slice(1)
    }
  }

  return tempValue
}

watch(
  () => props.modelValue,
  (newValue) => {
    validateValue(newValue)
  },
  { deep: true }
)

const finalClass = computed(() => {
  let result = ''

  if (props.icon !== '' && props.iconPosition === 'left') {
    result = 'pl-8'
  } else if (props.icon !== '' && props.iconPosition === 'right') {
    result = 'pr-8'
  }

  if (props.small) {
    result += ' h-[36px]'
  }
  return result
})

const input = ref(null)

defineExpose({ input })
</script>

<template>
  <div class="relative">
    <input
      ref="input"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="finalClass"
      class="border-gray-300 focus:ring-primary focus:border-primary rounded-md shadow-sm block w-full disabled:bg-gray-50 disabled:text-gray-500" />
    <div
      v-if="icon !== ''"
      class="absolute inset-y-0 flex items-center text-black"
      @click="$emit('iconClick')"
      :class="iconPosition === 'left' ? 'left-0 ps-3' : 'right-0 pe-3'">
      <i class="bi" :class="'bi-' + icon"></i>
    </div>
  </div>
  <div v-if="errorMessage !== ''" class="text-xs text-danger font-medium mt-1">
    {{ errorMessage }}
  </div>
</template>
