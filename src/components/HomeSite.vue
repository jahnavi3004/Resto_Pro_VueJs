<template>
    <HeaderSite />
    <h1>Hello {{name}}, Welcome to the Home Page...</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td>
                <router-link :to="'/updateresto/'+item.id">Update</router-link>
                <button v-on:click="deleteResto(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';
import HeaderSite from './HeaderSite.vue'
export default{
    name:'HomeSite',
    data() {
        return {
            name:'',
            restaurants:[]
        }
    },
    components: {
    HeaderSite
    },
    methods: {
        async deleteResto(id)
        {
            let result = await axios.delete('http://localhost:3000/restaurant/'+id)
            if(result.status==200)
            {
                alert("Restaurent Deleted...")
                this.loadResto()
            }
        },
        async loadResto()
        {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get('http://localhost:3000/restaurant')
            console.warn(result)
            this.restaurants=result.data
        },
    },
    mounted() {
        this.loadResto()
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
td button{
    margin-left: 10px;
}
</style>