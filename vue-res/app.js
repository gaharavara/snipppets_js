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
        seen: false,
        bind_blog_address: "https://gaharavara.github.io",
        blog_directive: `<a href="https://gaharavara.github.io">My blog address via vue directive</a>`

    }
})

// Events habndling in vue
// We use v-on directive => v-on:event_name="method or expression (ex. i++)" 
// @event_name="method" shorthand
// the list of event names is present on vuejs site
var app3 = new Vue({
    el: "#event-handling",
    data: {
        seen: false,
        num: 20
    },
    methods: {
            add: function (inc) {
                this.num += inc;
            },
            subtract: function(dec) {
                this.num -= dec;
            }
    }
})

// Event modifiers
//
// We can add event modifiers to our events like v-on:event.modifier_name ="method"
// ex. v-on:click.once="method_name()" to only allow the click event once
// ex. <a v-on:click.prevent="method_name" href="gaharavara.github.io"></a> : 
//      To prevent the user from clicking on the link, instead the method is
//      called. here the default action of visiting the site by clicking the link
//      is prevented.
// For more information visit official vuejs documentation


// Keyboard events and keyboard events modifier
//
// The above events where related to mouse events, now we look at key events
// v-on:key_event="method"
// v-on:key_event.key_modifier.key_modifier="method" (can support multiple modifiers)
// ex. <input type="text" v-on:keyup.enter="save_name" />
// keyup event activates for every key press, but addinf the enter modifier, modifies
// it to only call the method when the key pressed is enter
// We can change it to only call the methdo save_name in case alt+enter is pressed by
// adding the second modifier v-on:keyup.enter.alt = "save_name"


// Two way data-binding in vue ( sending input data to our variables inide
// our vue instances data:{})
//
// use <input_field v-model="variable_name_declared_inside_data" >"
// what it basically does is it passes all the inputs given to tha field
// to the metioned variable
// round about would be to extract the data using the old methods, which is longer
// and not preferred in vue


// Computed properties in vue
app4 = new Vue({
    el: "#computed-properties",
    data: {
        age: 20,
        A: 2,
        B: 2
    },
    /*
    method: {
        addToA: function(){
            this.A+=this.age;
        },
        addToB: function() {
            // Even if addToA is called since it involves this.age even, if it is 
            // unchanged vue will call addToB too since it also has this.age
            // thus making the code lesser efficient
            this.B+=this.age;
        }
    },
    */
    computed: {
        addToA: function() {
            this.A+=this.age;
            return this.A; 
            // Computed makes sure that only if the values are affected
            // then only we re-call this method to update the locations wherever this
            // method is called.
        },
        addToB: function() {
            this.B+=this.age;
            return this.B;
            // only this method is called since only B is updated and age is unaltered
            // since computed keeps a track of this, and only updates the needed methods
            // it is more efficient
        }
    }
})


// Dynamic CSS in vue
// here we can dynamically add or remove classes
// class is also an attribute and we can bind data to attributes in vue
// ex. <div class="menu-bar red">
//     in vue we can write:
//     <div v-bind:class="{menu-bar: true, red=true}">
//     major point to remember is we need to pass an object to the binded class attribute
app5 = new Vue({
    el: "#dynamic-css",
    data: {
        seen: false,
        toggle: true
    },
    computed: {
        computed_css : function() {
            return {
                // We can only pass object to binded attribute
                red: this.toggle,
                green: !this.toggle
            }
        }
    },
})


// Conditionals in vue
//
// v-if="bool_variable"
// v-else-if="second_bool_variable"
// Works like any other if else if conditon i.e. if the first condition is not satisfied
// then only we move to the else if part and check its condition
// An important point to note is in case of a false value the whole element is not even
// included in the dom
//
// with v-show="bool_variable" we include the element in the dom but display property is set to none in
// case of false


// Looping with v-for
// data: { nakama: [ 
//                    {name: "luffy", position: "captain"}, 
//                    {name: "zoro", position:"firstman"}
//                  ] 
//        }
// Now to loop through this array and the objects inside and display the data we use
// v-for directive
// <template v-for="member in nakama">
//  <p v-for="(value, key) in member">
//     {{key}}: {{value}} 
//  </p>
//  <br />
// </template>
// 
// Using a template saves us from creating a needless div
// vue identifies the template and only adds the content present inside the template to
// the dom.


// Point to note from the punching bag example
// we can bind an object to the style property
// ex. v-bind:style="{ width: width_from_data + '%'}"
// we have escaped the '%' symbol as we are recieving the width in percent


// We can create multiple instances of vue for different widgets.
// Each instance can communicate with the other instances
// But a good practice would be to not build separate instances in case if a lot of
// communication is needed between two instaces, keeping it to just one instance would
// be more than enough.
//ex. 
//  app1 = new Vue({ data: { name: "Abhi" }});
//  console.log(app1.name) // Accessing outside any instance
//  app2 = new Vue({ data: { name: app1.name}}); // Accessing inside a vue instance


// Components in vue
// components are used to make reusable temaplates that have their own data and methods.
Vue.Component('greeting',{
template: "<p>Hi mate! {{ name }}</p>",
data: function() {
    return { name: "default-name"}
},
methods: {
    change_name: function() {
        this.name = "Luffy"
    }
}
})

// One point to note would be that most of the structure is same as creating a vue
// instance but we do use function to return the the data so that every time we use
// a template in a different Vue instance we have it's own unique set of values for 
// the data present in the template.
//
// We can simply create a component by inserting tags with the component's names in the
// dom.
// ex. <greeting> </greeting>
//      => <p>Hi mate! {{ name }}</p> => <p>Hi mate! default-name</p>
// In case if we call the method change_name for one vue instance, in case of multiple
// view instances, only the value of name for that particular instance would change to 
// Luffy, the rest instances still have the default-name value because we employed a 
// function to return data objects for every other instance.
//  this value can be accessed like any other value in the instance e.g. this.name


// $refs in vue
//
//  With vue we can simply insert ref="reference_name" in any of the tags, (mostly input)
// to fetch a reference of the tag which can then be used in our view instance to get
// all the properties associated with that tag
// ex. we can do this.$refs.reference_name.property_name = "something"
// A better practical example would be
// <label ref="label_1">Hello World</label>
// console.log(this.$refs.label_1.innerText); // Will print Hello World
// we can simply console.log(this.$refs) to get all the refs we have under this instance


// Installing @vue/cli vue-cli is depreceated
// > npm install -g @vue/cli

// Structuring and working with a vue cli project
// We usually divide the reuasable elements into separate components
// a component file is component_name.vue, It has all the html, js and css in that file
// itself, we export the js from the <script> to make the component available for other
// componentes or instances to use.
// Nesting and using a component as global
// 
// The first step is to import the component into the current file using import componet_name
// from './component_name.vue'
// 
// In case of nesting we create a components: { component_name, other_component name } inside 
// the vue instance where we want to have nesting and the component will only be available
// inside the nested instance
//
// In case of globally including a component we simply include it into the root component
// making it available for all other components


// template in view should have only one html element which can then enclose any number of
// html elements, like react ex. <template><div>Any Number Of elements</div></template>


// <style scoped> in vue
// We can use <style scoped> to employ the styling to that particular component only. Vue does
// this by adding a ex. h1[as35-afe3yt4n] kinda identifier to all the elements of that particular 
// component making sure, all the style properties mentioned are applied to the designated elements
// of that component.

// Props in vue
//
// Similar to react in vue too we can pass props from parent to child. We will need a reciever in
// the child for the incoming props. To set up a receiver for props:
// props : ['name_of_incoming_prop'] => this can be then used as any other data present in 
//          the component
//
// Validators in props
// a better way to recieve props is to validate what we are recieving, we can add a validator for
// props in vue
// props: {
//     name_of_incoming_prop: { type: Array, required: true }   
// }
// Thus we will reciever an error in the console in case of any other data than of type array.
//
// To send props we simply add an attribute by the name in the component tag included in the
// parents dom, by default the attribute will only pass the string provided to the attribute as
// hardcoded their, but to use that string to indicate a variable of the parent, we will need to
// bind the attribute using v-bind:
//ex.
// <child-component-name name_of_prop_to_send="variable_name" ></child-component-name> => x
// this will simply send the string "variable_name" to the child, so we v-bind the attribute
// <child-component-name v-bind:name_of_prop_to_send="variable_name" ></child-component-name>


// Pimitive types and Reference types
//
// The non primitive data types are passed as a reference to the original data via props resulting
// into updation in all the places wherever that data is used.
//
// In case of primitive data type ex. string, we pass a copy of the data thus the change in data is
// local to that particular component only.


// Events in vue ( Creating our own custom events from child to parent )
//
// One use case could be when we want to update a primitive data in all the places where it is being
// used.
//
// The procedure is create $emit('event-name', data_you_wanna_send_with_the_event);
// just execute the above line and an event would be emiited all the way to the parent.
//
// To revcieve/catch the event add an event listener in the child-component tag which is included
// in the parent. ex.
//
//  <child-from-which-we-are-expecting-signal v-on:event-name="do_this($event)">
//  </child-from-which-we-are-expecting-signal>
//
// In the above example we see use of v-on to listen for our custom event event-name, we use the 
// do_this method declared in the parent to update the respective data/state so that it is updated
// in all the places where that data is use ( for ex. in case of primitive data )
// all the data passed to the event is caught by the $event and is passed to the do_this(any_local_name)
// method. How you use it to update your current state depends on methods.


// The event bus
//
// The above method of updating the entries relies on updating the value at parent which then results
// into updating all other places where the data was used.
// What if we only want to do it for some other childs only, not for parent! We could use the
// concept of event bus to change the values in needed child directly without involving the parent.
//
// How to do it? ex.:
//
// Create a new vue instance in the root file and maybe name it bus for better resemblance
// const bus = new Vue(); // Done
// export bus;
//
// in child component1:
// import {bus} from '../app' //import the bus instance from app.js
// ................
//  methods: { do_something() {
//     this.value_name = "new_value";
//     this.$emit("event-name", this.value_name); => pass any data that helps
//  }}
//
// in child component2: import the bus instance and create a lifecycle hook so that an event listener
// is created as soon as this component is created.
// import {bus} from '../app'
// .........................
// data: {},
// created() { // a lifecycle hook method, called when the component is created
//    this.$on(event-name, (data_recieved_from_the_event) => {
//              ** do something **
//     })
// }


// Lifecycle hooks
// We have several lifecycle methods that can be invoked at at particualar, more details on the
// official vue js site.
// ex. beforeCreated, created, beforeMounted, mounted, beforeUpdate, updated() etc.


// Slots
// slots are used to insert html elements inside our custom created component tags, we can create 
// slot with any kind of elements and can give them their own names later they can be sorted and 
// re arranged on the basis of their names.
// ex. <form-header><div slot="slot-name"><h1>This is the form title</h1></div></form-header>


// Dynamic Components
// <component is="component-name">
// We can use the above syntax to display component with a name of component-name
// To dynamically switch the components being displayed we could bind the is attribute
// ex. <component v-bind:is="component_to_display">
// 
// Down below we can change the values of this.component_to_display to alter the components dynamically
// A point to note is we need to import the components we will be using.
//
// <keep-alive></keep-alive> Can be used to retain the data inside the component around which it is 
// wrapped. ( the data inside the input fields are retained as they were before in case if the 
// component is dynamically switched with any other component, thus we don't loose any data)


// Input Binding
// use v-model to bind the data of the input to any variable of your choice
// ex. <input type="text" v-model="variable_name">
// we can use v-model.lazy where lazy is a modifier, so we don't update the variable every time a
// new alphabet is inserted instead when we are done and switch to other field the variable is 
// updated with the final value.


// http request
// npm install axios
// use jsonplaceholder for dev purpose get etc/ requests 


// Routing in vue
// npm install vue-router
// The best way is to read the simple documentation or use `vue add route`, a built in
// command in vue cli to creata dummy routes and do all the configuration for you needed
// to set up the routes 