<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'right',
  },
})

defineEmits(['update:modelValue', 'iconClick'])
</script>

<template>
  <template v-if="icon !== ''">
    <div class="relative w-fit">
      <input
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="iconPosition === 'left' ? 'pl-8' : 'pr-8'"
        class="block appearance-none border w-full placeholder-slate-300 disabled:bg-disabled-second disabled:border-gray border-black text-black font-medium rounded-[5px] px-2 py-2 text-sm h-[35px] focus:invalid:border-danger focus:outline-none focus:border-primary-hover focus:ring-1 focus:ring-primary-hover" />
      <div
        v-if="icon !== ''"
        class="absolute inset-y-0 flex items-center text-black"
        @click="$emit('iconClick')"
        :class="iconPosition === 'left' ? 'left-0 ps-2' : 'right-0 pe-3'">
        <i class="bi" :class="'bi-' + icon"></i>
      </div>
    </div>
  </template>
  <div v-if="errorMessage !== ''" class="text-xs text-danger font-medium mt-1">
    {{ errorMessage }}
  </div>
</template>
