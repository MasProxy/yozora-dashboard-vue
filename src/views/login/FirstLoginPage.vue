<script setup>
import { ref } from 'vue'

import Button from '@/components/Button.vue'
import Input from '@/components/form/Input.vue'
import InputLabel from '@/components/form/InputLabel.vue'
import InputError from '@/components/form/InputError.vue'

const form = ref({
  email: '',
})
</script>

<template>
  <div class="p-5">
    <Button class="w-[500px] mr-2" size="xl" href="test" target="_blank">
      Login
    </Button>
    <Button color="danger"></Button>
  </div>
  <div class="mt-5 pl-5 py-2">
    <InputLabel required for="email">test</InputLabel>
    <Input />
    <InputError message="uhuy" />
  </div>
</template>
