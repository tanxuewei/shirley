function LazyMan(name) {
	this.name = name
}

function log(tip) {
	console.log(tip)
}

LazyMan.prototype.sleep = function(time) {
	log('Hi This is ' + this.name + '!')
	setTimeout(function(){
		log('Wake up after ' + time)
	})
}

LazyMan.prototype.sleepFirst = function(time){
	setTimeout(function(){
		log('Wake up after ' + time)
		log('Hi This is ' + this.name + '!')
	})
}

LazyMan.prototype.eat = function(type) {
	log('Eat ' + type + '~')
}

var x = new LazyMan('Hank')
x.sleep(10)