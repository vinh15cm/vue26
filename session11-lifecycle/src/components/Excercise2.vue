<template>
    <div>
        <h1>Excercise2</h1>
      <h1>Count: {{ count }}</h1>
      <button @click="increaseCount">Counter</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        count: 0, // Biến count khởi tạo ban đầu
      };
    },
    methods: {
      increaseCount() {
        this.count += 1;
      },
    },
    // Lifecycle hook để in ra thông báo khi component được mount vào DOM
    mounted() {
      console.log('Component mounted');
    },
    // Watcher để theo dõi sự thay đổi của count
    watch: {
      count(newValue, oldValue) {
        console.log('Dữ liệu đã thay đổi: ', oldValue, ' -> ', newValue);
      },
    },
  };
  </script>
  
  <style scoped>
  /* CSS cho component nếu cần */
  </style>
  