const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);


let gameData = {
	rows: [
			['', '', ''],
			['', '', ''],
			['', '', '']
		  ],
	next: 'x',
	finished: false,
	draw: false
}

Socketio.on("connection", socket => {
	socket.emit("gameData", gameData);
	socket.on("updateTapClick", data => {
		gameData = data;
		Socketio.emit("gameData", gameData);
	});
});



Http.listen(3000, () => {
	console.log("Listning at: 3000.....");
});