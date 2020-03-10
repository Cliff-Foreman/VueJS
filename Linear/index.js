new Vue({
    el: '#root',
    data: {
        message: "Test"
    },
    methods: {

    }
});

async function training() {
    const xs = tf.tensor2d([[0], [1], [2], [3], [4]], [5,1]);
    const ys = tf.tensor2d([[0], [1], [2], [3], [4]], [5,1]);

    var model = tf.sequential();
    var hidden = tf.layers.dense({
        units: 3, 
        activation: 'relu',
        inputShape: [1]
    });
    var output = tf.layers.dense({
        units: 10,
        activation: 'softmax'
    });

    model.add(hidden);
    model.add(output);

    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'adam'
    });

    model.fit(xs, ys, { epochs: 100 });

    model.predict([0]).print();

}

training();