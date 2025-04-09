<script setup>
import { ref, watch, nextTick} from 'vue';
defineProps(['title'])
</script>
<template>
  <div>
    <h1>我是子组件</h1>
    这是父组件props ：{{ title }}
  </div>
</template>