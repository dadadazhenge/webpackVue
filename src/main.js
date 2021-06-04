//安装玩webpack后，会提示安装webpack-cli
//这时候打包还是会出现错误，需要在webpack.config.js里面配置里面的内容

import $ from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './components/App.vue';
import login from './components/subComponents/login.vue';
import registry from './components/subComponents/registry.vue';
import name from './components/subComponents/name.vue';
import age from './components/subComponents/age.vue';



var router=new VueRouter({
    routes: [
        {   
            path: '/login', 
            component: login, 
            children: [
                { path: 'name', component: name },
                { path: 'age', component: age },
            ]
        },
        {path: '/registry', component: registry},
    ]
})

$(function(){
    var vm=new Vue({
        el: '#app',
        data:{

        },
        router,
        render: function (c){
            return c(App);
        }
    })
})