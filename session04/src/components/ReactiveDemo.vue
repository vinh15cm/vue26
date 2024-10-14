<template>
  <div>
    <h1>reactive</h1>
    <p>Id: {{ userInfo.id }}</p>
    <p>userName:{{ userInfo.username }}</p>
    <button @click="handleIncreasedId">IncreaedId</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const userInfo =reactive({
    id:1,
    username:"Nguyen Van A"
});
const handleIncreasedId = () =>{
userInfo.id++
}

</script>

<style>

</style>