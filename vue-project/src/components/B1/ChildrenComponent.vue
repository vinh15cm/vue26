<template>
    <div>
      <h2>-------- Children Component --------</h2>
      <p>Children Company: {{ companyName }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildrenComponent',
    props: {
      companyName: String,
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #666;
  }
  </style>
  

  