<template>
    <div>
        <h1>Bài 3</h1>
      <!-- Nhãn cho trường chọn ngày sinh -->
      <label for="birthdate">Ngày sinh:</label>
      <!-- Trường input để chọn ngày với v-model ràng buộc với biến birthdate -->
      <input type="date" v-model="birthdate" id="birthdate" />
  
      <!-- Hiển thị giá trị ngày sinh được chọn theo định dạng chuẩn (yyyy-mm-dd) -->
      <p>Ngày sinh: {{ birthdate }}</p>
  
      <!-- Hiển thị giá trị ngày sinh theo định dạng mm/dd/yyyy -->
      <p>{{ formatDate(birthdate) }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DatePicker',
    data() {
      return {
        // Khởi tạo biến birthdate rỗng
        birthdate: '',
      };
    },
    methods: {
      // Hàm để định dạng ngày sinh theo định dạng mm/dd/yyyy
      formatDate(date) {
        if (!date) return '';
        const [year, month, day] = date.split('-');
        return `${month}/${day}/${year}`;
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  