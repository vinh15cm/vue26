.<template>
  <div>
    <h1>ChildrenComponent</h1>
    <input type="text" v-model="inputValue"/>
    <h2>Count:{{ count }}</h2>
    <button @click="handleCount">Count</button>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted ,onUnmounted,onUpdated,ref} from 'vue';
const count = ref(0)
const inputValue = ref("")
const handleCount = () =>{
    count.value++
}
// cac phuong thuc trong giai doan khoi tao
onBeforeMount(()=>{
    count.value = 5;
    console.log("Component before mount")
})

onMounted(()=>{
    count.value = 6;
    console.log("Component mounted")
})
// cac phuong thuc trong giai doan updation
onBeforeUpdate(()=>{
    document.title = inputValue
    console.log("Before update")
})
onUpdated(()=>{
    inputValue.value="Nguyen Van A"
    console.log("Component updated")
})
// cac phuong thuc trong giai doan unmount
onBeforeUnmount(()=>{
    console.log("Component before unmount")
})
onUnmounted(()=>{
    console.log("Component Mounted")
})

</script>

<style>

</style>