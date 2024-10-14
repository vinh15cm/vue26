<template>
 <div>
    computed demo
    <p>tai vi tri thu {{ index }} thi so Fib = {{ caculatedFibonacy}}</p>
    <button @click="handleIncrease">Increase Index</button>
 </div> 
</template>

<script setup>
import { computed, ref } from 'vue';
const index = ref(0);
const caculatedFibonacy= computed(() =>{
    const fib=(n)=>{
if(n<=1) return n;
return fib(n-1) + fib(n-2);
    }
    return fib(index.value);
})
const handleIncrease= ()=>{
    index.value++
}

</script>

<style>

</style>