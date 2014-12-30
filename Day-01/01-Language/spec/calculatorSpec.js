describe("A Calculator", function(){
	it("should be able to add two numbers", function(){
		//Arrange
		var n1 = 100,
			n2 = 200,
			expectedResult = 300;
		//Act
		var result = add(n1,n2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add two numbers in string format", function(){
		//Arrange
		var n1 = "100",
			n2 = "200",
			expectedResult = 300;
		//Act
		var result = add(n1,n2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to treat non numeric strings as zero", function(){
		//Arrange
		var n1 = 100,
			n2 = "abc",
			expectedResult = 100;
		//Act
		var result = add(n1,n2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add two functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 100},
			f2 = function(){ return 200},
			expectedResult = 300;
		//Act
		var result = add(f1,f2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add two functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return "100"},
			f2 = function(){ return "200"},
			expectedResult = 300;
		//Act
		var result = add(f1,f2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add two functions returning functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return "100"};},
			f2 = function(){ return function(){ return "200"};},
			expectedResult = 300;
		//Act
		var result = add(f1,f2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add only one number", function(){
		//Arrange
			var n1 = 100,
			expectedResult = 100;
		//Act
		var result = add(n1)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should return zero when no arguments are passed", function(){
		//Arrange
		var	expectedResult = 0;
		//Act
		var result = add();

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add more than two numbers", function(){
		//Arrange
		var	expectedResult = 1500;
		//Act
		var result = add(100,200,300,400,500)

		//Assert
		expect(result).toBe(expectedResult);
	});	

	it("should be able to add arrays of numbers", function(){
		//Arrange
		var nos1 = [100,200],
			nos2 = [300,400];
		var	expectedResult = 1000;
		//Act
		var result = add(nos1, nos2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add arrays of numbers and numbers in string format", function(){
		//Arrange
		var nos1 = [100,"200"],
			nos2 = [300,"400"];
		var	expectedResult = 1000;
		//Act
		var result = add(nos1, nos2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add functions returning arrays of numbers and numbers in string format", function(){
		//Arrange
		var f1 = function(){ return [100,"200"]},
			f2 = function(){ return [300,"400"]};
		var	expectedResult = 1000;
		//Act
		var result = add(f1, f2)

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to add array of functions returning arrays of numbers and numbers in string format", function(){
		//Arrange
		var f1 = function(){ return [100,"200"]},
			f2 = function(){ return [300,"400"]};
		var	expectedResult = 1000;
		//Act
		var result = add([f1, f2]);

		//Assert
		expect(result).toBe(expectedResult);
	});

});