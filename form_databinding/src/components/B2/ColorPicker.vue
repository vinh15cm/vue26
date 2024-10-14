<template>
    <div>
        <h1>Bài 2</h1>
      <!-- Nhãn cho trường chọn màu -->
      <label for="color-picker">Màu sắc</label>
      <!-- Trường input để chọn màu -->
      <input type="color" v-model="color" id="color-picker" />
  
      <!-- Hiển thị ô màu và mã màu được chọn -->
      <div :style="{ backgroundColor: color, width: '100px', height: '50px', border: '1px solid #000', marginTop: '16px' }"></div>
      <p>Mã màu: {{ color }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ColorPicker',
    data() {
      return {
        // Khởi tạo biến color với giá trị màu mặc định là đen (#000000)
        color: '#000000',
      };
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  