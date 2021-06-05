let fs = require('fs');
 

// 비동기적 읽기
fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log('비동기적 읽기 ' + data);
});

// 동기적 읽기
let text = fs.readFileSync('text.txt', 'utf8');
console.log('동기적 읽기 ' + text);