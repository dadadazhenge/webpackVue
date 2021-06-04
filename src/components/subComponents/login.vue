<template>
    <div>
        <h1>这里是login组件</h1>
        <router-link to='/login/name'>姓名</router-link>
        <router-link to='/login/age'>年龄</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>

</style>