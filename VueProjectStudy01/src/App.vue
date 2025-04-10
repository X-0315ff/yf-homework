<template>
  <son-02 @event1="msg" />
  <!-- <son03 @event2="logmsg" /> -->
  <hr>
  <modelson v-model="count"/>
  <hr>
  <span>父组件显示：{{ modmsg }}</span>
  <modelson02 v-model="modmsg" />
  <hr>

  <chacao>
    插槽内容
  </chacao>
</template>



<script setup>   
import { ref, watch, nextTick } from 'vue';
// import Father from './components/Father.vue'
import son02 from './components/son02.vue';
import son03 from './components/son03.vue';
import modelson from './components/modelson.vue';
import modelson02 from './components/modelson02.vue';
import chacao from './components/chacao.vue';




const count = ref(0)
const modmsg = ref('')
const msg = (data)=>{
  data.age++
  console.log(data.age);
  
}
</script>