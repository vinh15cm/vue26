.<template>
  <div>
    <div v-if="isShow">
        <!-- <ChildrenComponent/> -->
         <Time></Time>
    </div>
    <h1>ParentComponent</h1>
    <button @click="handleShow">click</button>
  </div>
</template>

<script setup>
// import ChildrenComponent from './ChildrenComponent.vue';
import Time from './Time.vue';
import { ref } from 'vue';
const isShow = ref(false)
const handleShow=()=>{
    (isShow.value = !isShow.value) 
}
</script>

<style>

</style>