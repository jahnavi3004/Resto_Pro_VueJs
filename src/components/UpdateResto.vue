<template>
    <HeaderSite />
    <h1>Hello, Welcome to the Update Restaurant Page...</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
        <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
        <button type="button" v-on:click="updateResto">Update Restaurant</button>
    </form>
</template>
<script>
import HeaderSite from './HeaderSite.vue';
import axios from 'axios';
export default{
    name:'UpdateResto',
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
        async updateResto()
        {
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(result.status==200)
            {
                alert("Data Updated...")
                this.$router.push({name:'HomeSite'})
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
        this.restaurant=result.data
    }
}
</script>