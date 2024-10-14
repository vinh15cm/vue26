.<template>
  <div>
    <h1>Counter:{{ count }}</h1>
    <button @click="handleIncreasement">Increase</button>
    <button @click="handleDecreasement">Decrease</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const count = computed(()=>store.state.count)
const handleIncreasement =()=>{
    store.commit("increasement")
}
const handleDecreasement = ()=>{
    store.commit("decreasment")
}
const doubleCount = computed(()=>store.getters.doubleCount)
</script>

<style>

</style>