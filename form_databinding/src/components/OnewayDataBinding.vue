.<template>
   <div>
    <h1>Oneway data binding</h1>
    <h3>Username:{{ userName }}</h3>
    <input type="text" :value="userName"/>
    <button @click="handleChangeName">Change name</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const userName = ref("Nguyen van B")
const handleChangeName =() =>{
    userName.value = "Nguyen van A"
}

</script>

<style>

</style>