const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);



var rows = [
	  ['', '', ''],
	  ['', '', ''],
	  ['', '', '']
	],
	next = 'x',
	finished = false,
	draw = false;


Socketio.on("connection", socket => {
	socket.emit("rows", rows);
	socket.on("updateRows", data => {
		rows = data;
		Socketio.emit("rows", rows);
	});
});



Http.listen(3000, () => {
	console.log("Listning at: 3000.....");
});