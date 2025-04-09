<script setup>
import { ref, watch, nextTick } from 'vue';
import Son01 from './son01.vue';


const title = ref('父组件');
</script>

<template>
  <div>
    <h1>我是父组件</h1>
    <son01 :title="title"/> 
  </div>
</template>

