<template>
    <img class="logo" src="../assets/Resto-logo.jpg" alt="logo" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Already signed up?</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios' // it is used to call api and to install use:- npm install axios 
//import { json } from 'body-parser';
export default{
    name:"SignUp",
    data() {
        return {
            name:"",
            email:"",
            password:""
        }
    },
    methods: {
        async signUp()
        {
            console.warn(this.name,this.email,this.password)
            let result=await axios.post("http://localhost:3000/users", {
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.warn(result)
            if(result.status==201)
            {
                //alert("Sign Up Done...")
                localStorage.setItem("user-info",JSON.stringify(result.data))
                //stringify method is used to covert object data into string.
                //we must convert data into string format because local storage can't store object.
                this.$router.push({name:'HomeSite'})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'HomeSite'})
        }
    },
}
</script>