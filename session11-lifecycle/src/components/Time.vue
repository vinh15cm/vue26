<template>
    <div>
      <h1>Time: {{ time }}</h1>
    </div>
  </template>
  
  <script setup>
  import {
    onBeforeMount,
    onBeforeUpdate,
    onMounted,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref,
  } from "vue";
  
  const time = ref(0);
  let timerId;
  //giai doan mounting
  onBeforeMount(() => {
    console.log("Component before mount");
  });
  onMounted(() => {
    timerId = setInterval(() => {
      time.value++;
    }, 1000);
  
    console.log("component mounted");
  });
  
  // giai toan updatint
  onBeforeUpdate(() => {
    console.log(" Component Before update");
  });
  
  onUpdated(() => {
    console.log("component updated");
  });
  
  // giai doan unmount
  onBeforeUnmount(() => {
    console.log("component before unmount");
    clearInterval(timerId);
  });
  onUnmounted(() => {
    console.log("component mounted");
  });
  </script>
  
  <style></style>
  