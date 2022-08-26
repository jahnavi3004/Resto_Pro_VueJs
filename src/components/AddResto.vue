<template>
    <HeaderSite />
    <h1>Hello, Welcome to the Add Restaurant Page...</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
        <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
        <button type="button" v-on:click="addResto">Add New Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios'
import HeaderSite from './HeaderSite.vue'
export default{
    name:'AddResto',
    components: {
    HeaderSite
    },
    data() {
        return {
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods: {
        async addResto()
        {
            const result = await axios.post("http://localhost:3000/restaurant", {
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            console.warn(result)
            alert("Restaurant added...")
            if(result.status==201)
            {
                localStorage.setItem("restaurants",JSON.stringify(result.data))
                this.$router.push({name:'HomeSite'})
            }
        }
    },
}
</script>