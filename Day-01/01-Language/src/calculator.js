function add(x,y){
	function parseArg(n){
		if (n instanceof Array) return add.apply(this, n);
		if (typeof n === "function") return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
}

/*

arguments => array like object containing all the values passed to the function

this

*/

/*
sum(10,20,30,40)
	=> 10 + sum(20,30,40)
			=> 20 + sum(30,40)
					=> 30 + sum(40)
							=> 40
*/