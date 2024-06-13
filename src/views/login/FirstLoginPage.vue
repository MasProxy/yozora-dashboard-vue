<script setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
</script>

<template>
  <div class="p-5">
    <Button
      color="danger"
      class="w-[500px] mr-2"
      size="xl"
      href="test"
      target="_blank">
      Login
    </Button>
    <Button color="danger"></Button>
  </div>
  <div class="mt-5 pl-5 py-2 apperance-none">
    <Input />
  </div>
</template>
