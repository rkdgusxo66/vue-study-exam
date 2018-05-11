//register component.

Vue.component('button-number',{
    template: '<button v-on:click="onClickButton">{{number}}</button>',
    props:['number'],
    methods:{
        onClickButton:function(){
            this.$emit('numberClick',this.number);
        }
    }
})

Vue.component('numpad',{
    template: 
    '<div>\
        <button-number v-on:numberClick="onNumberClick" v-for="i in (0,9)" :key="i" :number="i"/>\
    </div>',
    methods:{
        onNumberClick:function(number){
            this.$emit('numberClick2',number);
        }
    }
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
        <numpad v-on:numberClick2="onInputNum"/>\
    </div>',
    data:function(){
        return{
            message: 'this my calculator',
            expression: ''
        }
    },
    methods:{
        onInputNum:function(input_number){
            this.expression+=input_number;
        }
    }
})

//create vue instance.
new Vue({
    el:'#root'
})
