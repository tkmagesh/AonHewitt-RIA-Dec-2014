var products = [
	{id : 6, name : "Pen", units : 60, cost : 50, category : 1},
	{id : 9, name : "Hen", units : 50, cost : 90, category : 2},
	{id : 3, name : "Ten", units : 80, cost : 60, category : 1},
	{id : 5, name : "Den", units : 30, cost : 70, category : 2},
	{id : 2, name : "Zen", units : 90, cost : 30, category : 1},
	{id : 8, name : "Ken", units : 70, cost : 40, category : 2}
]

console.log("Default products list")
console.table(products);

var sort = function(){
	for(var i=0;i<products.length-1;i++)
		for(var j=i+1;j<products.length;j++){
			if (products[i].id > products[j].id){
				var temp = products[i];
				products[i] = products[j];
				products[j] = temp;
			}
		}
}

console.log("After sorting by Id")
sort();
console.table(products);

var sort = function(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

console.log("After sorting by name")
sort(products, "name");
console.table(products);

console.log("After sorting by cost")
sort(products,"cost");
console.table(products);

console.log("After sorting by units")
sort(products, "units");
console.table(products);

var sort = function(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (comparerFn(list[i], list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

var productComparerByValue = function (p1, p2){
	var p1Value = p1.cost * p1.units,
		p2Value = p2.cost * p2.units;

	if (p1Value < p2Value) return -1;
	if (p1Value > p2Value) return 1;
	return 0;
}

console.log("After sorting by Product Value [cost * units]");
sort(products,productComparerByValue);
console.table(products);

var filter = function(list, predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result.push(list[i]);
	return result;
}

var costlyProductPredicate = function(p){
	return p.cost > 50;
}

console.log("All costly products");
var costlyProducts = filter(products,costlyProductPredicate);
console.table(costlyProducts);

var inversePredicate = function(predicate){
	return function(){
		return !predicate.apply(this,arguments);
	}
}

var affordableProductPredicate = inversePredicate(costlyProductPredicate);
console.log("All affordable products");
var affordableProducts = filter(products,affordableProductPredicate);
console.table(affordableProducts);

//min
//max
//sum
//avg
//countBy
//all
//any
//map
//reduce

var groupBy = function(list, keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}


