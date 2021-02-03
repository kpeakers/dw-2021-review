console.log ("hello")

var $one = $("#L1");
var $two = $("#L2");
var $three = $("#L3");

var $jk1 = $("#joke1");
var $jk2 = $("#joke2");
var $jk3 = $("#joke3");


$two.hide();
$three.hide();

$jk2.hide();
$jk3.hide();

// EMOJIS CYCLING

$one.on("click", function(){
	$(this).hide();
	$two.show();
})

$two.on("click", function(){
	$(this).hide();
	$three.show();
})

$three.on("click", function(){
	$(this).hide();
	$one.show();
})


// JOKES

$("#punch1").hide();
$("#punch2").hide();
$("#punch3").hide();

$("#setup1").on("click", function(){
	$(this).hide();
	$("#punch1").show();
})


$("#punch1").on("click", function(){
	$(this).hide();
	$jk2.show();
	$("#setup2").show();

	$('body').removeClass("sunset");
    $('body').addClass("sea");
})

$("#setup2").on("click", function(){
	$(this).hide();
	$("#punch2").show();
})

$("#punch2").on("click", function(){
	$(this).hide();
	$jk3.show();
	$("#setup3").show();

	$('body').removeClass("sea");
    $('body').addClass("rainbow");
})

$("#setup3").on("click", function(){
	$(this).hide();
	$("#punch3").show();
})


$("#punch3").on("click", function(){
	$(this).hide();
	$("#setup1").show();

	$('body').removeClass("rainbow");
    $('body').addClass("sunset");
})