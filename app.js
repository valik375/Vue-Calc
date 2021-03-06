var app = new Vue({
    el: '#app',
    data: {
        value: '',
        endValue: [],
        buttons: [
          {
            "btnValue": "1",
            "btnId": "1"
          },
          {
            "btnValue": "2",
            "btnId": "2"
          },
          {
            "btnValue": "3",
            "btnId": "3"
          },
          {
            "btnValue": "4",
            "btnId": "4"
          },
          {
            "btnValue": "5",
            "btnId": "5"
          },
          {
            "btnValue": "6",
            "btnId": "6"
          },
          {
            "btnValue": "7",
            "btnId": "7"
          },
          {
            "btnValue": "8",
            "btnId": "8"
          },
          {
            "btnValue": "9",
            "btnId": "9"
          },
          {
            "btnValue": "0",
            "btnId": "zero"
          },
          {
            "btnValue": "+",
            "btnId": "plus"
          },
          {
            "btnValue": "-",
            "btnId": "minus"
          },
          {
            "btnValue": "*",
            "btnId": "multiply"
          },
          {
            "btnValue": "%",
            "btnId": "division"
          }
        ]
    },
    methods:{
        getInputValue(item){
            if ( Number.isInteger(this.value) )
            this.value = ''; 
            this.value += item;
        },
        getResolts(){
            this.value = eval(this.value);
        }   
    }
})