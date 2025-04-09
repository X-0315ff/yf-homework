<script setup>
import { reactive , computed , ref,watch, nextTick} from 'vue';
const msg = ref('Vue 3');
const picked = ref('one');
let selected = ref('');
const pick = ref('')
const first = '猫咪'
const second = '小狗'
const count = ref(0)
let isUpdating = false;
watch(count,(newvalue,oldvalue)=>{
  if (newvalue !== oldvalue && !isUpdating) {
    isUpdating = true;
    setTimeout(() => {
      if (newvalue > 50) {
        count.value = 0;  // 重置 count
      } else {
        count.value = newvalue + 1;  // 延迟修改 count
      }
      isUpdating = false;
    }, 0);
  }
})
</script>

<template>
  <div>
    <button @click.middle="greet">greet</button>
    <hr>
    <input  v-model="msg">
    <h1>{{ msg }}</h1>
    <hr>
    <div>选中的是：{{ picked }}</div>
    <input type="radio" id="one" value="one" v-model="picked">
    <input type="radio" id="two" value="two" v-model="picked">
    <hr>
    <div>selected is :{{ selected }}</div>
    <select name="ce" id="1" v-model="selected">
      <option value="1">one</option>
      <option value="2">two</option>
      <option value="3">three</option>    
    </select>
    <hr>
    <div>我最喜欢的宠物是：{{ pick }}</div>
    <input type="radio" id="cat" :value="first" v-model="pick">
    <input type="radio" id="dog" :value="second" v-model="pick">
  </div>
  <hr>
  <div>
    <h3>count is :{{ count }}</h3>
  </div>
  <button @click="count++">count</button>

</template>