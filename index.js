new Vue({
    el: '#root',
    data: {
        greeting: "test",
        giss: ""
    },
    methods: {
        addName: function() {
            this.greeting = this.giss;
        },
        testing: async function() {
            const model = await tf.loadLayersModel('');
            console.log("test");
            model.predict([0,1]).print();
        }
    }
});

