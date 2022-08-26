<template>
    <div class="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/addresto">Add Restaurent</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default{
    name:'HeaderSite',
    methods: {
        logout()
        {
            localStorage.clear(); //also we can use localStorage.removeItem('user-info') 
            this.$router.push({name:'LoginSite'})
        }
    },
}
</script>

<style>
.nav{
    background-color:orange;
    overflow: hidden;
}
.nav a{
    float:left;
    color:#f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.nav a:hover{
    background-color: black;
    color: orange;
}
</style>