<template>
<div>
  我子组件的输入内容：<input type="text" v-model="model">
</div>
</template>

<script setup>
  const model = defineModel('ttc1')
</script>