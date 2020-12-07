var trigger = [
	["salama"],
	["i love you"],
	["are you ok"],
	["i run to you"]
];

var reply = [
	["hey" , "salama o"],
	["me too" , "i love you too"],
	["i'm fine" , "very well"],
	["really"]
];

var alternative = ["euh??..." , "haha...."];


document.querySelector("#input").addEventListener("keypress" , function(e){
	var key = e.which || e.keyCode;

	if(key == 13){//enter button
		var input = document.getElementById("input").value;
		document.getElementById("user").innerHTML = input;
		output(input);
	}
});

function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi , "");//remove all chars except words , space and number
		//text = text.replace(/ a /g, " ").replace(/ i feel /g, "");

		if(compare(trigger , reply , text)){
			var product = compare(trigger , reply , text);
		}
		else{
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}

	document.getElementById("chatbot").innerHTML = product;
	document.getElementById("input").value = "";//clear input value
}

function compare(arr , array , string){
	var item;
	for(var x = 0 ; x < arr.length ; x++){
		for(var y = 0 ; y < array.length ; y++){
			if(arr[x][y] == string){
				items = array[x];
				item = items[Math.floor(Math.random()*items.length)];
			}
		}
	}

	return item;
}