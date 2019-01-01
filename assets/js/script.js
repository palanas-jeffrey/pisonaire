
function getPlayer(){
var player = document.getElementById ("playerName").value;
document.getElementById("nameTag").innerHTML= player;
document.getElementById("nameTag2").innerHTML= player;
document.getElementById("wNameTag").innerHTML= player;
document.getElementById("nameTag2-c").innerHTML= player;
document.getElementById("nameTag3").innerHTML= player;
document.getElementById("nameTag4").innerHTML= player;
document.getElementById("nameTag5").innerHTML= player;
document.getElementById("nameTag6").innerHTML= player;
document.getElementById("nameTag7").innerHTML= player;
};

function logInHide(){
	$("#login").css("position", "absolute");
	$("#login").css("top", "0px");
	$("#login").css("left", "-12000px");
};


$("#start").click(function() {
	logInHide();		
	$("#afterLogin").fadeIn();
	getPlayer();
});

$("#toLevel1").click(function() {		
	$("#question1").fadeIn();
	$("#afterLogin").fadeOut();
});

$("#a-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question1").fadeOut();		
});


$("#c-answer").click(function() {
	$("#wrong").fadeIn();	
	$("#question1").fadeOut();
});

$("#d-answer").click(function() {
	$("#wrong").fadeIn();	
	$("#question1").fadeOut();
});

$("#continueB4Exit").click(function(){
	$("#goingExit").fadeIn();
	$("#wrong").fadeOut();
});
$("#b-answer1").click(function() {
	$("#correct").fadeIn();
	$("#question1").fadeOut();	
	getPlayer();
	$("#earningTag").html("1");
});

$("#continueLevel2").click(function(){
	$("#question2").fadeIn();
	$("#correct").fadeOut();
});


//=======q2============
$("#a2-answer").click(function() {
	$("#question2").fadeOut();
	$("#wrong").fadeIn();
	$("#warningETag").html("1");
});
$("#b2-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question2").fadeOut();
	$("#warningETag").html("1");
});

$("#c2-answer").click(function() {
	$("#correct2").fadeIn();
	$("#question2").fadeOut();
	getPlayer();
	$("#earningTag2").html("3");
});


$("#continueLevel3").click(function(){
	$("#question3").fadeIn();
	$("#correct2").fadeOut();	
});

$("#d2-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question2").fadeOut();
	$("#warningETag").html("1");
});


//===================q3

$("#a3-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question3").fadeOut();
	$("#warningETag").html("3");
});
$("#b3-answer").click(function() {
	$("#correct3").fadeIn();
	$("#question3").fadeOut();
	getPlayer();
	$("#earningTag3").html("6");
});

$("#c3-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question3").fadeOut();
	$("#warningETag").html("3");
});

$("#d3-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question3").fadeOut();
	$("#warningETag").html("3");
});

$("#continueLevel4").click(function(){
	$("#question4").fadeIn();
	$("#correct3").fadeOut();	
});

//===================q4

$("#a4-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question4").fadeOut();
	$("#warningETag").html("6");
});
$("#b4-answer").click(function() {
	$("#correct4").fadeIn();
	$("#question4").fadeOut();
	getPlayer();
	$("#earningTag4").html("10");
});

$("#c4-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question4").fadeOut();
	$("#warningETag").html("6");
});

$("#d4-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question2").fadeOut();
	$("#warningETag").html("6");
});

$("#continueLevel5").click(function(){
	$("#question5").fadeIn();
	$("#correct4").fadeOut();	
});

//================================q5

$("#a5-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question5").fadeOut();
	$("#warningETag").html("10");
});
$("#b5-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question5").fadeOut();
	$("#warningETag").html("10");
});

$("#c5-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question5").fadeOut();
	$("#warningETag").html("10");
});

$("#d5-answer").click(function() {
	$("#correct5").fadeIn();
	$("#question5").fadeOut();
	getPlayer();
	$("#earningTag5").html("15");
});

$("#continueLevel6").click(function(){
	$("#question6").fadeIn();
	$("#correct5").fadeOut();	
});

// =====================q6
$("#a6-answer").click(function() {
	$("#correct6").fadeIn();
	$("#question6").fadeOut();
	getPlayer();
	$("#earningTag6").html("21");
});
$("#b6-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question6").fadeOut();
	$("#warningETag").html("15");
});

$("#c6-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question6").fadeOut();
	$("#warningETag").html("15");
});

$("#d6-answer").click(function() {
	$("#wrong").fadeIn();
	$("#question6").fadeOut();
	$("#warningETag").html("15");
});

$("#continueLevel7").click(function(){
	$("#question7").fadeIn();
	$("#correct6").fadeOut();	
});


function answerMatch(){
	var answerWord = document.getElementById("inputAnswer").value;
	var input1 = answerWord;
	if (input1=="echo") {
	console.log("true");
	$("#question7").fadeOut();
	$("#correct7").fadeIn();
	getPlayer();
	$("#earningTag7").html("28");
} else {
	console.log("false");
	$("#wrong").fadeIn();
	$("#question7").fadeOut();
	$("#warningETag").html("21");
};
};

$("#input7").click(function(){
	answerMatch();
});

$("#playAgain").click(function(){
	$("#correct7").fadeOut();
	logInShow();
});

function logInShow(){
	$("#login").css("position", "");
	$("#login").css("top", "");
	$("#login").css("left", "");
};