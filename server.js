var express = require('express')
,app = express()
, server = require('http').createServer(app)
, io = require('socket.io').listen(server)
, DB = require('./database');

//global configuration
app.configure(function(){
	// serve static files
	app.use("/", express.static(__dirname + '/app'));
});

// get main html file
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {

	/**
   	* task:create
   	*
   	* called when we .save() our new task
   	*
   	* we listen on model namespace, but emit
   	* on the collection namespace
   	*/
	socket.on('task:create', function (data, callback) {
		//set id
		data._id = DB.get().length + 1;
		//add task to db
		DB.add(data);
		//send task to the client
		socket.emit('tasks:create', data);
		//send task to the other clients
		socket.broadcast.emit('tasks:create', data);
		callback(null, data);
	});

	/**
   	* task:read
   	*
   	* called when we .fetch() our collection
   	* in the client-side router
   	*/
	socket.on('tasks:read', function (data, callback) {
		callback(null, DB.get());
	});

	/**
	* task:update
	*
	* called when we .save() our model
	* after toggling its completed status
	*/
	socket.on('task:update', function (data, callback) {

		var dbId = data._id - 1;
		//get task from db
		var json = DB.get()[dbId] = data;
		//emit update for the client
		socket.emit('task/' + data._id + ':update', json);
		//emit update for the other clients
		socket.broadcast.emit('task/' + data._id + ':update', json);
		callback(null, json);
	});

   /**
	* task:delete
	*
	* called when we .destroy() our model
	*/
	socket.on('task:delete', function (data, callback) {

		var dbId = data._id - 1;
		//get task from db
		var json = DB.get()[dbId];
		//emit delete for the client
		socket.emit('task/' + data._id + ':delete', json);
		//emit delete for the other clients
		socket.broadcast.emit('task/' + data._id + ':delete', json);
		callback(null, json);
		//remove task from db
		DB.remove(dbId, 1);
	});

});

//start listening
var port = process.env.PORT || 80;

function start(){
	function cb(){
		server.listen(port, function() {
			console.log("Listening on " + port);
		});
	}

	DB.init(cb);
}


start();