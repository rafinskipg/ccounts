var fs = require('fs');
var DATABASE = 'TODO.json';
var db = [];
var locked = false;

var writeFile = require('write-file-queue')({
    retries : 1000
    , waitTime : 1000
    , debug : console.error
});

//Initialize
function init(cb){
	fs.exists(DATABASE, function(exists){
		if(!exists){
			writeDatabase(cb);
		}else{
			readDatabase(cb);
		}
	});
}

function writeDatabase(cb){
	writeFile(DATABASE, JSON.stringify(db), function(err){
		if (err) throw err;
		cb ? cb() : console.log('Database updated');
	});
}

function readDatabase(cb){
	fs.readFile(DATABASE, function (err, data) {
	  if (err) throw err;
	  db = JSON.parse(data);
	  console.log('Database loaded');
	  cb();
	});
}

function remove(dbId, amount){
	db.splice(dbId, amount);
	writeDatabase();
}

function add(item){
	db.push(item);
	writeDatabase();
}

function get(){
	return db;
}

module.exports = {
	init : init,
	add : add,
	remove : remove,
	get: get
}