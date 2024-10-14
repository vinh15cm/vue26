<template>
    <div>
        <h1>Excercise1</h1>
      <h1>Hello, Vue!</h1>
    </div>
  </template>
  
  <script setup>
import { onMounted } from 'vue';

 onMounted(()=>{
    console.log("Component mounted");
    
 })
   
  </script>
  
  <style scoped>

  </style>
  