// Vue Hello World instance
var app = new Vue({
    el: "#hello-world",
    data: {
        name: "Abhishek",
        seen: true
    },
    methods: {
        greeting: function() {
            return "Hello World, this is " + this.name + " !";
        }
    }
})