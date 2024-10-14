.<template>
  <div>
    <h1>Todolist</h1>
    <input type="text" v-model="">
    <ul>
        <li></li>
        {{ store.state }}
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const listJob= computed(()=>store.state.todoListModule.jobs) 

</script>

<style>

</style>