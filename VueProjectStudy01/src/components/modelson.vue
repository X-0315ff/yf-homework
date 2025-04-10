<template>
  <div>
    <h3>父组件中的model数据 ： {{ count }}</h3>
    <button @click="update">model实现组件双向绑定</button>
  </div>
</template>

<script setup>
import { defineModel } from 'vue'
  const count = defineModel()
  const update = ()=>{
    count.value++
  }
</script>