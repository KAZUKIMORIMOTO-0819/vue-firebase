new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Ryu branch',
        url: "http://www.youtube.com", 
        classes: ["one", "two"]
    },
    methods: {
        greet(time){
            return 'Hello there '+time+this.name
        }
    }
})