.<template>
  <div>
    <h1>Danh sách sản phẩm </h1>
    <button @click="handleAddProduct">Thêm mới sản phẩm</button>
    <table border="2">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <table>Option</table>
            </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
            <tr>
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{product.price  }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{  product.description}}</td>
                <td>
                    <button>Info</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref,onMounted } from 'vue';
const products = ref([]);
const fetchData =async()=>{
    try{
    const response = await axios.get("  http://localhost:8080/products")
.then((response) =>{
    products.value = response.data
} )
}catch(error) {

}
};

onMounted(()=>{
    fetchData()
})
//hàm lấy thông tin chi tiết 1 sản phẩm theo id
const getProductById = async (id)=>{
    try{
    const response = await axios.get(`http://localhost:8080/products/${id}`)
    console.log("Data:",response.data);
}catch(error){
    //xử lí lỗi
}
}
// Ham them moi san pham
const handleAddProduct=()=>{
    try {
        axios.post("http://localhost:8080/products",{
            name:"men men",
            price:20000,
            quantity:10,
            description:"hoi kho"
        })
        console.log("Response:",response)
        fetchData();
    } catch (error) {
        
    }
}
</script>

<style>

</style>