<template>
    <div>
        <h1>Bài 1</h1>
      <!-- Nhãn cho trường input -->
      <label for="email">Email</label>
      <!-- Trường input để nhập email và sử dụng v-model để ràng buộc với biến email -->
      <input type="email" v-model="email" id="email" />
  
      <!-- Hiển thị giá trị của email khi người dùng nhập -->
      <p>Giá trị: {{ email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailInput',
    data() {
      return {
        // Khởi tạo biến email rỗng
        email: '',
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  