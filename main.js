//1.  Original function
var pluralize = function (word, number) {
	if(number === 1) {
		return word;
	}
	else {
		return word + "s";
	}
};

//1.  Rewritten with ternary operator
var pluralize = function (word, number) {
	return number === 1 ? word : word + "s";
};


//2. Original
var victim = {};

var getVictimInfo = function() {
	victim.name = prompt("Please enter your name:");
	victim.phone = prompt("Please enter your phone number:");
	victim.street = prompt("Please enter your street:");
};

getVictimInfo();

alert('Thank you! Victim entered: \n' +
	victim.name + ", " +
	victim.phone + ", " +
	victim.street);

//2. Functional
var getVictimInfo = function() {
	var victim = {};
	victim.name = prompt("Please enter your name:");
	victim.phone = prompt("Please enter your phone number:");
	victim.street = prompt("Please enter your street:");

	return victim;
};

var victim = getVictimInfo();

alert('Thank you! Victim entered: \n' +
	victim.name + ", " +
	victim.phone + ", " +
	victim.street);

