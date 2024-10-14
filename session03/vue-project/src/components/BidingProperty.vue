<template>
    <div>
      <img v-bind:src="url" alt=""/>
    <!-- <img :src="url" alt=""/> -->
     <button v-bind:disabled="isDisabled">click me</button>
  
    <input type="text" :disabled="isEnter"/>
  
    <div v-bind="divAtribute">container</div>
    <!-- binding 2 thuoc tinh id "paragraph", area="paragraph" -->
    <p v-bind="paragraphAttributes">noi dung</p>
    <!-- vbind cho class va style -->
    <div v-bind:class="{textRed:isTextRed}">Hello world</div>
    </div>
    
  </template>
  
  <script setup>
  const url ="https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g";
  const isDisabled = true;
  
  const isEnter = false
  
  const divAtribute ={
    id:"container-id",
    class:"container-class"
  }
  const paragraphAttributes={
    id:"paragraph",
    area:"paragraph"
  }
  const isTextRed = true;
  </script>
  
  <style>
  .textRed{
    color:red;
  }
  </style>