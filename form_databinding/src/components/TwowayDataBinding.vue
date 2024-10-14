./<template>
  <div>
    <form @submit.prevent="handleSubmit" >
        <h2>Username:{{ userInfo.userName }}</h2>
    <h2>Date of birth :{{ userInfo.dateOfBirth }}</h2>
    <h2>Gender:{{ userInfo.gender }}</h2>
    <h2>Hobbies:{{ userInfo.hobbies }}</h2>
    <h1>them nguoi dung moi</h1>
    <div>Ho va ten :<input type="text" placeholder="nhap ten" v-model="userInfo.userName"/></div>
    <div>Ngay sinh:<input type="date" v-model="userInfo.dateOfBirth"/></div>
    <div>gioi tinh :</div>
    <div>
        Nam <input type="radio" name="gender" value="0" v-model="userInfo.gender">
         Nu <input type="radio" name="gender" value="1" v-model="userInfo.gender">
          Khac <input type="radio" name="gender" value="2" v-model="userInfo.gender">
    </div>
  <div>so thich</div>
  <div>
    choi game <input v-model="userInfo.hobbies" value="games" type="checkbox"/>
    Code <input v-model="userInfo.hobbies" value="code" type="checkbox"/>
    boi loi <input v-model="userInfo.hobbies" value="swim" type="checkbox"/>
    bong chuyen <input v-model="userInfo.hobbies" value="volleyball" type="checkbox"/>
</div>
<button>them</button>
    </form>
  </div>
</template>

<script setup>

import { reactive } from 'vue';
const userInfo =reactive({
    userName :"",
 dateOfBirth : "",
 gender :"0",
 hobbies :[] 
})
const handleSubmit = (e) =>{
    const user ={
        username:userName.value,
        dateOfBirth:dateOfBirth.value,
        gender:gender.value,
        hobbies:hobbies.value
    };
    console.log("Submited",user)
}
</script>

<style>

</style>