//register component.
Vue.component('button-number',{
    template: '<button>{{number}}</button>',
    props:['number'],
    data:function(){
        return {
        }
    }
})

//create vue instance.
new Vue({
    el:'#root'
})
