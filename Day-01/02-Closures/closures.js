var spinner = (function(){
	var counter = 0;
	function increment(){
		return ++counter;
	}	
	function decrement(){
		return --counter;
	}
	return {
		up : increment,
		down : decrement
	};	
})();

var isPrime = (function(){
	function isPrime(n){
		if (n <= 3) return true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0) return false;
		return true;
	}
	var cache = {};
	return function(n){
		if (typeof cache[n] !== "undefined"){
			console.log("from cache");
			return cache[n];
		}
		console.log("Juz processed..");
		cache[n] = isPrime(n);
		return cache[n];
	}
})();

function add(x,y){
	return x + y;
}


function memoize(fn){
	var cache={};
	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] !== "undefined"){
			console.log("from cache");
			return cache[key];
		}
		console.log("juz processed");
		cache[key] = fn.apply(this,arguments);
		return cache[key];
	}
}

function memoize(fn){
	var cache={};
	return function(){
		var key = JSON.stringify(arguments);
		cache[key] = cache[key] || fn.apply(this,arguments);
		return cache[key];
	}
}