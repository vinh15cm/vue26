<template>
    <div>
      <h2>-------- Parent Component --------</h2>
      <p>Parent Company: {{ companyName }}</p>
      <ChildrenComponent :companyName="companyName" />
    </div>
  </template>
  
  <script>
  import ChildrenComponent from './ChildrenComponent.vue';
  
  export default {
    name: 'ParentComponent',
    components: {
      ChildrenComponent,
    },
    data() {
      return {
        companyName: 'Rikkei Academy',
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #333;
  }
  </style>