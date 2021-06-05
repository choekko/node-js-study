let os = require('os');

console.log(os.tmpdir());
console.log(os.type());

let cpus = os.cpus();

for (let i = 0; i < cpus.length; i++) {
	console.log("CPU[" + (i+1) + "]");
	console.log("model: " + cpus[i].model);
	console.log("speed: " + cpus[i].speed);
}