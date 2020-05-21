// Vue Hello World instance
var app1 = new Vue({
    el: "#hello-world",
    data: {
        name: "Abhishek",
        seen: false
    },
    methods: {
        greeting: function() {
            return "Hello World, this is " + this.name + " !";
        }
    }
})

// Ways of data binding in vue
// Using the directive v-bind or : (shorthand)
// v-bind:href="variable_name" where variable: "https://gaharavara.github.io"
// or :href="variable_name" where variable: "https://gaharavara.github.io"

// Using directive
// <p v-html="linkTag"></p> where linkTag: '<a href="gaharavara.github.io">Check It Out</a>'
// in app1 v-if was an example of vue directive 
var app2 = new Vue({
    el: "#data-binding",
    data: {
        name: "Abhishek",
        seen: true,
        bind_blog_address: "https://gaharavara.github.io",
        blog_directive: `<a href="https://gaharavara.github.io">My blog address via vue directive</a>`

    },
    methods: {
        greeting: function() {
            return "Hello World, this is " + this.name + " !";
        }
    }
})

