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

        <popAuthMenu :message="messagePop" v-if="showPopMenu" />
        <div class="Register-wraper">
            <div class="Register-Form">
                <div class="header">
                    <h1>Login Form</h1>
                </div>

                <div class="inputs">

                    <div class="input">
                          <input type="email" class="x" placeholder="Input Your Email" required v-model="email">
                    </div>

                    <div class="input">
                         <input 
                         type="password" 
                         class="x" 
                         placeholder="Input Password" 
                         required 
                         v-model="password"
                         id="password">
                         <span
                         class="material-icons password-toggle"
                         @click="tooglePassword"
                         v-html="currStatues">

                         </span>
                    </div>
                    <button @click="login">LOGIN</button>
                    
                    <RouterLink to="/Registration">Don't have an account</RouterLink>
                    
                </div>
                
                    
                
            </div>
        </div>
    </div>
</template>


<script>
import { RouterLink } from 'vue-router';
import axios from 'axios'
import popAuthMenu from "../components/popAuthMenu.vue";

export default{

  components: { popAuthMenu},
    data() {
        return {
            currStatues: " visibility_off",
            username: null,
            password: null,
            showPopMenu: false,
            messagePop: " ",
           
        };
    },
    methods: {

        displaymenu(value){
            this.messagePop = value;
            this.showPopMenu = true;
            setTimeout(() =>{
                this.showPopMenu = false;
            },3000);
        },

      tooglePassword() {
      let checktype = document.getElementById("password");
      if (this.currStatues == "visibility") {
        this.currStatues = "visibility_off";
        checktype.type = "password";
      } else {
        this.currStatues = "visibility";
        checktype.type = "text";
      }
    },

       login() {


        if (this.email == null || this.password == null){
            this.displaymenu("All fields required!!");
        }else{
            this.displaymenu("Authenticating!");
            let data = {
                email: this.email,
                password: this.password,
            };
            axios.post("/authenticate", data)
                .then((res) => 
                {
                this.displaymenu("Successfully logged in!");
                setTimeout(() =>{
                    let token = res.data.token;
                    localStorage.setItem("token", token);
                    this.$router.push({ name: "HomeView" });
                    // let hello= localStorage.getItem("token");
                    // console.log(hello);
                },2000);
                 })     
                 .catch((err) => {
                    this.messagePop = err.response.data;
                    if (err.response.data == "" || err.response.data == null){
                        this.messagePop = "Wrong password!!";
                    }

                    console.log(this.messagePop);
                    this.showPopMenu = true;

                    setTimeout(() => {
                        this.showPopMenu = false;
                    },2000 )
                 }) ;  
            } 
        },


        logout() {
            localStorage.removeItem("token");
            this$router.push({ name: "Login" });
        }

    
      }
    

     
    };
    

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
.password-toggle {
  font-size: 2rem;
  position: absolute;
  /* right: 65rem;
  bottom: 31.5rem; */
  left: 31rem;
  cursor: pointer;
}

.Register-Form{
    width: 30rem;
    height: 17rem;
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