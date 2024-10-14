.<template>
  <div>
    <B1/>
    <B2/>
    <B3/>
    <B4/>
    <B5/>
    <B6/>
    <B7/>
    <B8/>
<v-btn @click="handleClick">Click me</v-btn>

<v-combobox
v-model="city"
  label="City"
  :items="['Hanoi', 'NinhBinh', 'BacGiang', 'ThanhHoa', 'HoChiMinh', 'HaiPhong']"
></v-combobox>
<h3>Thanh pho:{{ city }}</h3>
  </div>
  
</template>

<script setup>
import { reactive, ref } from 'vue';
const city = ref("")
const cities = reactive([
  'Hanoi', 'NinhBinh', 'BacGiang', 'ThanhHoa', 'HoChiMinh', 'HaiPhong'
])

const handleClick=()=>{
  console.log("Clicked")
}
import B1 from './components/B1.vue';
import B2 from './components/B2.vue';
import B3 from './components/B3.vue';
import B4 from './components/B4.vue';
import B5 from './components/B5.vue';
import B6 from './components/B6.vue';
import B7 from './components/B7.vue';
import B8 from './components/B8.vue';

</script>

<style>

</style>