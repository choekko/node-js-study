let EventEmitter  = require('events').EventEmitter;
let evt = new EventEmitter();

evt.on('helloNode', function(str) {
    console.log('Hello!' + str);
});

setTimeout(function() {
    evt.emit('helloNode', 'Node.js');
}, 3000);