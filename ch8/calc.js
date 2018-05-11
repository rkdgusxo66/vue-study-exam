//register component.

Vue.component('button-number',{
    template: '<button>{{number}}</button>',
    props:['number']
})

Vue.component('numpad',{
    template: 
    '<div>\
        <button-number v-for="i in (0,9)" :key="i" :number="i"/>\
    </div>'
})

Vue.component('screen',{
    template: '<input type="text" v-model="expression" />',
    props:['expression']
})

Vue.component('calculator',{
    template: 
    '<div>\
        <div>{{message}}</div>\
        <screen :expression="expression"/>\
        <numpad/>\
    </div>',
    data:function(){
        return{
            message: 'this my calculator',
            expression: ''
        }
    }
})

//create vue instance.
new Vue({
    el:'#root'
})
