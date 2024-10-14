<template>
 <div>
    <h1 v-if="isShow">hien thi phan tu</h1>
    <h1 v-if="isShow">an phan tu</h1>
    <h1 v-if="isShow">ConditionRendering Condition</h1>
    <Button @click="handleToggle">Toggle</Button>
    <!-- v-if va v-else duoc su dung khi khoi lenh co hai dieu kien -->
    <h1 v-if="age >= 18">du tuoi thi</h1>
    <h1 v-else>chua du tuoi thi</h1>
    <h1>tuoi {{ age }}</h1>

    <button @click="handleIncreaseAge">tang tuoi</button>
    <button v-on:click="handleDecreaseAge">giam tuoi</button>
    <!-- v-if va v-else duoc su dung khi khoi lenh co tu 3 dieu kien tro len -->
    <h1 v-if="role === 'adim'">Quyen Admin</h1>
    <h1 v-else-if="role === 'user'">Quyen user</h1>
    <h1 v-else-if="role === 'edit'">Quyen edit</h1>
    <h1 v-else>Quyen other</h1>
    <!-- v-show:m hien thi du lieu co dieu kien, tuy nhien la du lieu do khong bi xoa khoi 
     dom ma no chi bi an di thong qua display: none -->
     <h1 v-show="isShowForm">Form Content</h1>
 </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true);

const handleToggle =()=>{
    isShow.value = !isShow.value;
};
// tao 1 bien tuoi, neu tuoi tren 18 thi hien thi "da du tuoi" nguoc lai thi hien thi "chua du tuoi" 
const age = ref(0);
const handleIncreaseAge =()=>{
    // cap nhat gia trij cua bien age
    age.value++;
};
const handleDecreaseAge =()=>{
    // cap nhat gia trij cua bien age
    age.value--;
};

// tao 1 bien co gia tri co the la : admin, user, edit, other
// kiem tra dieu kien va render ra ten quyen tuong ung 
</script>

<style>

</style>