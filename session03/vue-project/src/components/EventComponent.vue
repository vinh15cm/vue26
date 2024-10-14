.<template>
  <div>
    <button v-on:click="handleClick">Click me</button>
    <button v-on:click="handleDelete(1)">delete</button>
    <button @click="handleGetEvent">Event info</button>
    <form @submit.prevent="handleSubmit">
        <button type="submit">Submit</button>
    </form>
    <button @keydown.esc="handleCloseForm">dong form</button>
  </div>
</template>

<script setup>
const handleClick = () =>{
    console.log("clicked")
};
const handleDelete = (id) =>{
    console.log("Id",id)
}
const handleGetEvent= (event) =>{
    console.log("Event",event)
}
const handleSubmit = () =>{
    alert("submited")
}
// duoc kich hoat khi nguoi dung nhan vao nut dong form hoac nhan phim 'esc'
const handleCloseForm = () =>{
alert("dong form")
}
</script>

<style>

</style>