/**
 * impliment Kafka
 *
 * 1. Client producer
 * 2. Transaction consumer
 * 3. Event consumer -> write to Database
 * 4. Web3 event producer, include web3 error handling
 * 
 */
var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client("127.0.0.1:2181"),
    producer = new HighLevelProducer(client);

function KafkaProducer() {
    
}

KafkaProducer.prototype.send = function(payloads) {
    return producer.on('ready', function () {
        return producer.send(payloads, function (err, data) {
            // FIXME error handling
            console.log(data);
            return data;
        });
    });
};

exports = module.exports = new KafkaProducer();


