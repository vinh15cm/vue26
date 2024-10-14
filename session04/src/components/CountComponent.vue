<script setup>
import {ref} from "vue"
const count = ref(0)
const randomNumber = ref(1)
const arr = ref([])
// khi dung ref :
// de cap nhat laij gia tri thi bat buoc phai truy cap vao value
// khi su dung thi khong can dung value
const handleCount = () =>{
    // cap nhat lai gia tri cua count
    count.value++
};
const handleRandom =() =>{
    // tao so ngau nhien tu 1-10
    const random = Math.ceil(Math.random()*10)
    randomNumber.value = random
}
const handlePushNumber = () =>{
    const random = Math.ceil(Math.random()*10)
    //push so random vao mang va cap nhat lai gia tri cua chung
    numbers.value = [...arr.value,random]
}
</script>

<template>
<div>
    <h2>count:{{ count }}</h2>
    <h2>RandomNumber:{{ randomNumber }}</h2>
    <h2>PushNumber:{{ arr }}</h2>
    <button @click="handleCount">count</button>
    <button @click="handleRandom">random</button>
    <button @click="handlePushNumber">Push number</button>
</div>   
</template>