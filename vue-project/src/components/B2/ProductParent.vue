<template>
    <div>
      <h2>Thông tin sản phẩm trong Component cha</h2>
      <!-- Hiển thị thông tin sản phẩm trong component cha -->
      <p>Product ID: {{ product.id }}</p>
      <p>Product Name: {{ product.name }}</p>
      <p>Product Price: {{ product.price }} đ</p>
      <p>Product Quantity: {{ product.quantity }}</p>
  
      <!-- Truyền dữ liệu xuống component con -->
      <ProductChildren :product="product" />
    </div>
  </template>
  
  <script>
  import ProductChildren from './ProductChildren.vue';
  
  export default {
    name: 'ProductParent',
    components: {
      ProductChildren,
    },
    data() {
      return {
        product: {
          id: 1,
          name: 'Bưởi Ba Roi',
          price: '12.000',
          quantity: 10,
        },
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #333;
  }
  </style>
  