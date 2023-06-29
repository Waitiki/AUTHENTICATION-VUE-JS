<template>
    <div class="pope-wraper">
       
            <div class="popeSpace">
            <h2> {{ messagePop }} </h2>
            </div>
        
    </div>
</template>

<script>
export default{
    data(){
        return {

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
.pope-wraper{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    right: 0;
    left: 0;
}
.popeSpace{
    width: 30rem;
    height: 17rem;
    background-color: aqua;
    border-radius: 15px;
    
}

/* .container{
    display: flex;  
    flex-direction: row-reverse;
    gap: .5rem;
} */


</style>