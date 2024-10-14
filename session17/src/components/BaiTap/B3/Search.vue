<template>
    <div>
      <input v-model="searchQuery" placeholder="Nhập từ khóa" />
      <button @click="search">Tìm kiếm</button>
      <p>Value: {{ searchQuery }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  // Sử dụng Vue Router hooks
  const router = useRouter();
  const route = useRoute();
  
  // Khởi tạo biến searchQuery và lấy giá trị từ query parameter 'q'
  const searchQuery = ref(route.query.q || '');

  // Hàm xử lý khi nhấn nút tìm kiếm
  const search = () => {
    // Điều hướng đến đường dẫn /search với query parameter q là searchQuery
    router.push({ path: '/search', query: { q: searchQuery.value } });
  };
  
  // Theo dõi sự thay đổi của query parameter để cập nhật searchQuery khi route thay đổi
  watch(
    () => route.query.q,
    (newQuery) => {
      searchQuery.value = newQuery || '';
    }
  );
  </script>
  
  <style>
  </style>
  