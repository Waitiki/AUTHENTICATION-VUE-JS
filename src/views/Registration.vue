<template>
    <div class="page-wrap">
        <div class="container">

            <ul>
                <li>HOME</li>
                <li>HOME</li>
                <li>HOME</li>
                <li>HOME</li>     
            </ul>
            
        </div>
        <div class="Register-wraper">
            <div class="Register-Form">
                <div class="header">
                    <h1>Sign Up</h1>
                </div>

                <div class="inputs">
                    <input type="text" class="x" placeholder="Input First Name" required v-model="firstname">

                    <input type="text" class="x" placeholder="Input Second Name" required v-model="secondname">

                    <input type="email" class="x" placeholder="Input Your Email" required v-model="email">

                    <input type="password" class="x" placeholder="Input Password" required v-model="password">

                    <button @click="signUp">Sign Up</button>
                    
                    <!-- <a href="/Login">Login Now</a> -->
                    <RouterLink to="/Login">Login Now</RouterLink>
                </div>
                
                    
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';


export default{
    data(){
        return{
            firstname: null,
            secondname: null,
            email: null,
            password: null,
        }
    },

    methods: {
        signUp(){
            let data = {
                firstname: this.firstname,
                secondname: this.secondname,
                email: this.email,
                password: this.password
            };
            axios.post("/register", data)
            .then((res) => 
                res=res.data
            )
        }
    }

}

</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}
.page-wrap{
    width: 100vw;
    height: 100vh;
}



.pelet-1{
    width: 7rem;
    height: 3rem;
    background-color: deeppink;

}

.Register-Form{
    width: 30rem;
    height: 23rem;
    background-color: aqua;
    border-radius: 15px;
    
    
    
}
.Register-wraper{
    padding-top: 3rem;
    padding-left: 5rem;
}
/* .container{
    display: flex;  
    flex-direction: row-reverse;
    gap: .5rem;
} */

.container ul{

    list-style: none;
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;   
    background-color: aqua;
    padding: 25px;
}
.inputs{
    display: grid;
    gap: .8rem;
    justify-content: center;
    padding-top: 1rem;
}
.header{

    display: grid;
    justify-content: center;
    padding-top: 1rem;
}
.x{
    /* width: 100%; */
    padding: .5rem;
    border-radius: 5px;
    width: 25rem;
    
    
}








.container li:hover{
    
    background-color: gold;
}
</style>