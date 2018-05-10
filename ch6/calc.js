//register component.
Vue.component('button-number',{
    template: '<button>{{num}}</button>',
    data:function(){
        return {
            num: '0'
        }
    }
})

//create vue instance.
new Vue({
    el:'#root'
})