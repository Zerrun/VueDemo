
var app  = document.createElement('div');
app.innerHTML = '<div id="example"><parent-component :pmessage="message"></parent-component></div>';
document.body.appendChild(app);

var Vue = require("vue")

var Child = Vue.extend ({
    // props: ['myMessage'],
    template: '<div><input v-model="parentMsg"><br><child v-bind:my-message="parentMsg"></child></div>'
})

// <template id="Child">
//     <input v-model="msg">
//     <button v-on:click="notify">Dispatch Event</button>
// </template>

Vue.component('parent-component', {
    props: ['pmessage'],
    template: '<div id="app"><h1>{{ pmessage }}</h1><input v-model="pmessage"></div>',
    // components: {'Child': Child},
})

new Vue({
  el: '#example',
  data: {
      message: 'Hello Vue.js!'
  }
})


