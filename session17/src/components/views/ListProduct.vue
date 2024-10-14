.<template>
  <div>
    Listproduct
    <input type="text">
    <button @click="handleSearch">Search</button>
    <h1>Product name:{{ result.productName }}</h1>
    <h2>Price:{{ result.price }}</h2>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
const keySearch = ref("")
const priceValue = ref(0);
const route = useRoute();// lay du lieu tren url
const router = useRouter();// chuyen trang
const queryParam = reactive({
    productName:"",
    price:0,
})
// lay gia tri tren URL
computed(()=>{
    queryParam.productName = route.query.productName;
    queryParam.price = route.query.price;

})
const handleSearch =()=>{
    router.push({
        path:"list-product",
        query:{prodcutName :keySearch.value, price:priceValue.value}
    })
}
</script>

<style>

</style>