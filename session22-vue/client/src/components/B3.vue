<template>
    <div>
        <h1>bai 3</h1>
      <h1>Student List</h1>
      <!-- Bảng hiển thị dữ liệu sinh viên -->
      <table>
        <thead border="1">
          <tr>
            <th>Id</th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Thời gian thêm</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.student_name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.address }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.status ? 'Hoạt động' : 'Không hoạt động' }}</td>
            <td>{{ new Date(student.created_at).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  // Danh sách sinh viên
  const students = ref([]);
  
  // Hàm lấy danh sách sinh viên và hiển thị ra console
  const getAllStudent = async () => {
    try {
      const response = await axios.get('http://localhost:8080/students');
      console.log('Danh sách sinh viên:', response.data);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sinh viên:', error);
    }
  };
  
  // Hàm lấy thông tin chi tiết một sinh viên theo id
  const getStudentById = async (id) => {
    try {
      // Gọi API với id cụ thể
      const response = await axios.get(`http://localhost:8080/students/${id}`);
      
      // Kiểm tra nếu có dữ liệu thì hiển thị ra console
      if (response.data) {
        console.log(`Thông tin chi tiết sinh viên (ID: ${id}):`, response.data);
      }
    } catch (error) {
      // Nếu không tìm thấy bản ghi, hoặc xảy ra lỗi, hiển thị thông báo
      if (error.response && error.response.status === 404) {
        console.log('Không tìm thấy bản ghi');
      } else {
        console.error('Lỗi khi tìm kiếm sinh viên:', error);
      }
    }
  };
  
  // Hàm lấy dữ liệu và gán vào biến students
  const fetchStudents = async () => {
    const data = await getAllStudent();
    if (data) {
      students.value = data;
    }
  };
  
  // Gọi hàm fetchStudents khi component được mount
  onMounted(() => {
    fetchStudents();
  
    // Gọi hàm getStudentById để kiểm tra theo ID cụ thể, ví dụ là ID = 1
    getStudentById(1); // Có thể thay đổi ID để kiểm tra
  });
  </script>
  
  <style scoped>
  h1 {
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>
  