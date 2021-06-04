<template>
    <div>
        <h1>这是App组件</h1>
        <router-link to='/login'>登录</router-link>
        <router-link to='/registry'>注册</router-link>
        <router-view></router-view>
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
    
</style>