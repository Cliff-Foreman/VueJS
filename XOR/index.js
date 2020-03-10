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
        leading: function() {
            console.log(this.greeting[0]);
        },
        testing: async function() {
            const model = await tf.loadLayersModel('asdf.json');
            console.log("test");
            const input = [parseInt(this.giss[0]), parseInt(this.giss[2])];
            const a = model.predict(tf.tensor2d([input], [1,2])).dataSync();
            if(a[0] > 0.5) {
                this.greeting = 1;
            }
            else {
                this.greeting = 0;
            }
        }
    }
});

