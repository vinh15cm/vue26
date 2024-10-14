<!-- <template>
    <div class="todo-app">
      <h2>Quản lý công việc</h2>
      
      <!-- Input và nút Thêm công việc -->
      <div class="input-group">
        <input 
          v-model="newTask" 
          placeholder="Nhập tên công việc" 
          @keyup.enter="addTask" 
        />
        <button @click="addTask">Thêm công việc</button>
      </div>
  
      <!-- Bộ lọc công việc -->
      <div class="filters">
        <button 
          :class="{ active: filter === 'all' }" 
          @click="filter = 'all'"
        >Tất cả</button>
        <button 
          :class="{ active: filter === 'completed' }" 
          @click="filter = 'completed'"
        >Hoàn thành</button>
        <button 
          :class="{ active: filter === 'active' }" 
          @click="filter = 'active'"
        >Đang thực hiện</button>
      </div>
  
      <!-- Danh sách công việc -->
      <ul class="task-list">
        <li v-for="(task, index) in filteredTasks" :key="task.id">
          <div class="task-item">
            <input 
              type="checkbox" 
              v-model="task.completed" 
            />
            <span :class="{ completed: task.completed }">{{ task.name }}</span>
  
            <!-- Nút sửa và xóa công việc -->
            <button class="edit-btn" @click="editTask(index)">✏️</button>
            <button class="delete-btn" @click="removeTask(index)">🗑️</button>
          </div>
        </li>
      </ul>
  
      <!-- Nút xóa công việc hoàn thành và xóa tất cả công việc -->
      <div class="actions">
        <button @click="removeCompletedTasks">Xóa công việc hoàn thành</button>
        <button @click="removeAllTasks">Xóa tất cả công việc</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Danh sách công việc
  const tasks = ref([
    { id: 1, name: 'Quét nhà', completed: false },
    { id: 2, name: 'Giặt quần áo', completed: true },
    { id: 3, name: 'Nấu cơm', completed: false }
  ])
  
  // Trạng thái bộ lọc công việc
  const filter = ref('all')
  
  // Công việc mới
  const newTask = ref('')
  
  // Thêm công việc mới
  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push({
        id: Date.now(),
        name: newTask.value,
        completed: false
      })
      newTask.value = ''
    }
  }
  
  // Xóa công việc theo chỉ mục
  const removeTask = (index) => {
    tasks.value.splice(index, 1)
  }
  
  // Chỉnh sửa tên công việc
  const editTask = (index) => {
    const newName = prompt('Sửa tên công việc', tasks.value[index].name)
    if (newName !== null && newName.trim() !== '') {
      tasks.value[index].name = newName
    }
  }
  
  // Xóa tất cả công việc
  const removeAllTasks = () => {
    tasks.value = []
  }
  
  // Xóa các công việc đã hoàn thành
  const removeCompletedTasks = () => {
    tasks.value = tasks.value.filter(task => !task.completed)
  }
  
  // Tính toán danh sách công việc sau khi áp dụng bộ lọc
  const filteredTasks = computed(() => {
    if (filter.value === 'completed') {
      return tasks.value.filter(task => task.completed)
    } else if (filter.value === 'active') {
      return tasks.value.filter(task => !task.completed)
    } else {
      return tasks.value
    }
  })
  </script>
  
  <style scoped>
  .todo-app {
    width: 400px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    color: #333;
  }
  
  .input-group {
    display: flex;
    margin-bottom: 20px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .filters button {
    flex: 1;
    margin-right: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .filters button.active {
    background-color: #007bff;
    color: #fff;
  }
  
  .task-list {
    list-style: none;
    padding: 0;
  }
  
  .task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .completed {
    text-decoration: line-through;
    color: #999;
  }
  
  .edit-btn, .delete-btn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 5px;
  }
  
  .edit-btn:hover {
    color: #007bff;
  }
  
  .delete-btn:hover {
    color: #dc3545;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .actions button {
    flex: 1;
    margin-right: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #dc3545;
    color: #fff;
    border-radius: 5px;
  }
  
  .actions button:hover {
    background-color: #c82333;
  }
  </style>
   -->