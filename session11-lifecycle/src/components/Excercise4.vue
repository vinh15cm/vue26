<template>
    <div>
      <h1>Current Company: {{ currentCompany }}</h1>
      <h2>Age: {{ age }}</h2>
      <button @click="randomizeAge" style="background-color: blue; color: white; padding: 10px; border: none; border-radius: 5px;">
        Random
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompanyComponent',
    data() {
      return {
        age: 1, // Khởi tạo biến age với giá trị mặc định là 1
        companies: ['Rikkei Academy', 'Rikkei Education', 'Rikkei Fukuoka'], // Mảng các công ty
        currentCompany: 'Rikkei Academy', // Tên công ty mặc định
      };
    },
    methods: {
      // Phương thức để random giá trị age từ 1 đến 10
      randomizeAge() {
        this.age = Math.floor(Math.random() * 10) + 1;
      },
    },
    watch: {
      // Theo dõi sự thay đổi của age và cập nhật tên công ty dựa trên giá trị của age
      age(newAge) {
        this.currentCompany = this.companies[(newAge - 1) % this.companies.length];
      },
    },
  };
  </script>
  
  <style scoped>
  /* CSS cho component nếu cần */
  </style>
  