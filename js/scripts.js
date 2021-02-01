console.log ("hello")

$(".joke").text("Jokety Joke Joke")

var $one = $("#L1");
var $two = $("#L2");
var $three = $("#L3");

$one.on("click", function(){
	$(this).hide();
	$two.show();
})

$two.on("click", function(){
	$(this).hide();
	$three.show();
})