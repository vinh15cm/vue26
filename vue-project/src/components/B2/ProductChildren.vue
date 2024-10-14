<template>
    <div>
      <h2>Dữ liệu trong component con</h2>
      <!-- Hiển thị thông tin sản phẩm trong component con -->
      <p>Id: {{ product.id }}</p>
      <p>Product name: {{ product.name }}</p>
      <p>Price: {{ product.price }} đ</p>
      <p>Quantity: {{ product.quantity }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductChildren',
    props: {
      product: Object,
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #666;
  }
  </style>
 