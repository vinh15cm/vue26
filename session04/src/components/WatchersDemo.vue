<template>
  <div>
    <h1>watchers</h1>
    <button @click="handleCount">Count</button>
  </div>
  
</template>

<script setup>

import { ref,watch } from 'vue';
const count = ref(0);
const handleCount =()=>{
    count.value++
}

watch(count,(newValue,oldValue)=>{
    // lang nghe su thay doi cua count
    console.log(`Old value: ${oldValue} - New value :${newValue}`)
})
</script>

<style>

</style>