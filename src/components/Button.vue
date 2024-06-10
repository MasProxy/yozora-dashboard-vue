<!--
 * Component: Button
 * Author: MasProxy
 * Date Created: 2024-06-10
 * Last Modified: 2024-06-10
 * Description: This is a component for render a button.
-->

<script setup>
import { ref, onBeforeMount } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
  },
  color: {
    type: String,
    default: 'primary',
  },
  rounded: {
    type: String,
    default: 'md',
  },
  isOutline: {
    type: Boolean,
    default: false,
  },
  isTextOnly: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
})

const finalClass = ref('min-w-[80px] px-2 text-center font-medium')

//ANCHOR - function for initialize a button size
const initializeSize = () => {
  switch (props.size) {
    case 'xs':
      finalClass.value += ' h-[32px] text-xs'
      if (props.href !== '') {
        finalClass.value += ' pt-2'
      }
      break
    case 'sm':
      finalClass.value += ' h-[36px] text-sm'
      if (props.href !== '') {
        finalClass.value += ' pt-2'
      }
      break
    case 'md':
      finalClass.value += ' h-[40px] text-base'
      if (props.href !== '') {
        finalClass.value += ' pt-2'
      }
      break
    case 'lg':
      finalClass.value += ' h-[48px] text-base'
      if (props.href !== '') {
        finalClass.value += ' pt-3'
      }
      break
    case 'xl':
      finalClass.value += ' h-[52px] text-base'
      if (props.href !== '') {
        finalClass.value += ' pt-3.5'
      }
      break
    default:
      break
  }
}

//ANCHOR - function for initialize a button color
const initializeColor = () => {
  if (props.isOutline) {
    switch (props.color) {
      case 'primary':
        finalClass.value +=
          ' bg-white border border-primary hover:bg-primary hover:text-white text-primary '
        break
      case 'secondary':
        finalClass.value +=
          ' bg-white border border-secondary hover:bg-secondary text-secondary hover:text-white'
        break
      case 'success':
        finalClass.value +=
          ' bg-white border border-success hover:bg-success text-success hover:text-white'
        break
      case 'danger':
        finalClass.value +=
          ' bg-white border border-danger hover:bg-danger hover:text-white text-danger'
        break
      default:
        break
    }
  } else if (props.isTextOnly) {
    switch (props.color) {
      case 'primary':
        finalClass.value += ' text-primary'
        break
      case 'secondary':
        finalClass.value += ' text-secondary'
        break
      case 'success':
        finalClass.value += ' text-success'
        break
      case 'danger':
        finalClass.value += ' text-danger'
        break
      default:
        break
    }
  } else {
    switch (props.color) {
      case 'primary':
        finalClass.value += ' bg-primary hover:bg-primary-hover text-white '
        break
      case 'secondary':
        finalClass.value += ' bg-secondary hover:bg-secondary-hover text-white'
        break
      case 'success':
        finalClass.value += ' bg-success hover:bg-success-hover text-white '
        break
      case 'danger':
        finalClass.value += ' bg-danger hover:bg-danger-hover text-white '
        break
      case 'none':
        finalClass.value += ' bg-white border-black'
        break
      default:
        break
    }
  }
}

//ANCHOR - function for initialize a button corner
const initializeCorner = () => {
  switch (props.rounded) {
    case 'none':
      finalClass.value += ' rounded-none'
      break
    case 'sm':
      finalClass.value += ' rounded-[3px]'
      break
    case 'md':
      finalClass.value += ' rounded-[5px]'
      break
    case 'lg':
      finalClass.value += ' rounded-[8px]'
      break
    case 'full':
      finalClass.value += ' rounded-full'
      break
    default:
      break
  }
}

onBeforeMount(() => {
  initializeColor()
  initializeSize()
  initializeCorner()
})
</script>

<template>
  <template v-if="href === ''">
    <button :class="finalClass" v-bind="$attrs">
      <slot>Button</slot>
    </button>
  </template>
  <template v-else>
    <a class="inline-block" :class="finalClass" :href="href" v-bind="$attrs">
      <slot>Button</slot>
    </a>
  </template>
</template>
