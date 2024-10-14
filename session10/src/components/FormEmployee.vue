<template>
    <!-- Form thêm mới nhân viên -->
    <div class="overlay" hidden>
      <form class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>Chỉnh sửa nhân viên</h4>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div>
          <label class="form-label" for="userName">Họ và tên</label>
          <input v-model="employee.name" id="userName" type="text" class="form-control" />
          <!-- <div class="form-text error">Họ và tên không được để trống.</div> -->
        </div>
        <div>
          <label class="form-label" for="dateOfBirth">Ngày sinh</label>
          <input v-model="dateOfBirth" id="dateOfBirth" type="date" class="form-control" />
          <div v-if="!employee.name" class="form-text error2">Ho va ten ko duoc de trong</div>
        </div>
        <!-- <div class="form-text error">
            Ngày sinh không được lớn hơn ngày hiện tại.
          </div> -->
        <div>
          <label class="form-label" for="email">Email</label>
          <input v-model="email" id="email" type="email" class="form-control" />
        </div>
        <!-- <div class="form-text error">Email không được để trống.</div> -->
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea v-model="address"  class="form-control" id="address" rows="3" type="text"></textarea>
        </div>
        <div>
          <button class="w-100 btn btn-primary">Thêm mới</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
import { reactive } from 'vue';

  const emit = defineEmits("onClose");
  const handleClose = ()=>{
    emit("onClose")
  }
  const employee = reactive({
    id:Math.floor(Math.random()*10000000),
    name:"",
    dateOfBirth:"",
    email:"",
    address:"",
    status:""
  })
  </script>
  
  <style></style>