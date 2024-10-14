.<template>
  <div>App
    <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{name:'about'}">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <button @click="goToHome">Home</button>
    <button @click="goToAbout">About</button>
    <button @click="goToContact">Contact</button>
      <RouterView/>
    </nav> -->

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// const router = useRouter();
// const goToHome= ()=>{
//   // dieu huong qua trang home
//   router.push("/")
// }
// const goToAbout =()=>{
//   // dieu huong qua about
//   router.push({name:"about"})
// }
// const goToContact=()=>{
//   // dieu huong qua contact
//   router.replace({name:"contact"})
// }

</script>

<style>

</style>