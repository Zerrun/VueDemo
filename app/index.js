
var app  = document.createElement('div');
app.innerHTML = '<div id="example"><child my-message="hello!"></child></div>';
document.body.appendChild(app);

var Vue = require("vue")

var Child = Vue.extend({
    template: '<div>A Child component !</div>'
})

Vue.component('child', {
    props: ['myMessage'],
    template: '<h1>{{ myMessage }}</h1>'
})

Vue.component('parent-component', {
    template: '<my-component></my-component>',
    components: {'my-component': Child}
})

new Vue({
  el: '#example'
})


