<template>
    <div class="progress-container">
      <!-- Tiến độ trước khi thay đổi -->
      <div>
        <p>Trước khi thay đổi:</p>
        <p class="progress-text">Tiến độ hoàn thành: {{ progressValue }} %</p>
        <input type="range" v-model="progressValue" class="slider" min="0" max="100" />
      </div>
  
      <!-- Tiến độ sau khi thay đổi (mô phỏng giá trị cố định) -->
      <div>
        <p>Sau khi thay đổi:</p>
        <p class="progress-text">Tiến độ hoàn thành: 43 %</p>
        <input type="range" class="slider" value="43" disabled />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        progressValue: 0, // Giá trị tiến độ ban đầu là 0
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  