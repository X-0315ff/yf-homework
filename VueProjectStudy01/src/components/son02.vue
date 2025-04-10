<template>
  <button @click="emitevent1">子组件按钮触发子传父</button>
</template>

<script setup>
import { defineEmits } from 'vue'
    const emit = defineEmits()
    const obj = {
      name: 'aaa',
      age : 12,
      house : ['a','b']
    }
    // 触发event1
    const emitevent1 = ()=>{
      emit('event1', obj)
    }

</script>