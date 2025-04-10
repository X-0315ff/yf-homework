<template>
  <button @click="$emit('event2',msg)">子组件二</button>
</template>

<script setup>
  const msg = 'Hello Vue !'
</script>