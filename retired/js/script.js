

$( document ).ready(function(){


	$('#everythingDiv').hide();
	resizeBoxes();

	$(window).resize(function(){
		resizeBoxes();
		

	});

	function resizeBoxes(){
		var windowWidth = $(window).width();

		if(windowWidth > 1400){
			windowWidth = windowWidth/5;
		} else if (windowWidth > 1200){
			windowWidth = windowWidth/4;
		} else if (windowWidth > 1000){
			windowWidth = windowWidth/3;
		} else if (windowWidth > 700){
			windowWidth = windowWidth/2;
		} else {
			windowWidth = windowWidth;
		}
		$('.boxes').css({'width':windowWidth ,'height':windowWidth });
		$('.theBox').css({'width':windowWidth ,'height':windowWidth });
		$('.theBoxOnTop').css({'width':windowWidth - 20 ,'height':windowWidth -20});
	}

	setTimeout(function(){	
		$("#overDiv").fadeOut();
	}, Math.random() * 2000 + 1000);

	if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
		window.location = "http://www.aakashadesara.com/Simple";
	} else {

		$('#loginBox').hide();
		var loginBoxHidden = true;

		$( "#contact" ).click(function() {
		  	if(loginBoxHidden){
		  		$('#loginBox').fadeIn(500);
				loginBoxHidden = false;
		  	} else {
		  		$('#loginBox').fadeOut(500);
		  		loginBoxHidden = true;
		  	}
		});

		$("#escapeButton").click(function(){
			$('#loginBox').fadeOut(500);
		  		loginBoxHidden = true;
		});

		$(document).keyup(function(e) {
		  if (e.keyCode == 27) { 
		  	$('#loginBox').fadeOut(500);
		  		loginBoxHidden = true;
		  }   // esc
		});

		/* LIST of elements 
		 * hshacksPebble
		 * tkd
		 * hshacks
		 * hackerbracket
		 * tinovation
		 * ahead
		 * chemwhiz
		 * airjam
		 * invaders
		 * royal
		 * techchallenge
		 * emergentxt
		 * paintboard
		 * photography
		 * monkeyCoderPebble
		 * threed
		 * tab
		 * tg
		 * pennAppsWatch
		 * rotundus
		 * biking
		 * eduable
		 * studentrnd
		 * simplex
		*/

		var theBoolean = true;

		function fadeAllOut() {
			$("#hshacksPebble").fadeOut();
			$("#tkd").fadeOut();
			$("#hshacks").fadeOut();
			$("#hackerbracket").fadeOut();
			$("#tinovation").fadeOut();
			$("#ahead").fadeOut();
			$("#chemwhiz").fadeOut();
			$("#airjam").fadeOut();
			$("#invaders").fadeOut();
			$("#royal").fadeOut();
			$("#techchallenge").fadeOut();
			$("#emergentxt").fadeOut();
			$("#paintboard").fadeOut();
			$("#photography").fadeOut();
			$("#monkeyCoderPebble").fadeOut();
			$("#threed").fadeOut();
			$("#tab").fadeOut();
			$("#tg").fadeOut();
			$("#pennAppsWatch").fadeOut();
			$("#rotundus").fadeOut();
			$("#biking").fadeOut();
			$("#eduable").fadeOut();
			$("#studentrnd").fadeOut();
			$("#simplex").fadeOut();
		}

		function fadeAllButtonsOut(){
			$("#everything").css({"backgroundColor":"white", "color":"black"});
			$("#hobbies").css({"backgroundColor":"white", "color":"black"});
			$("#awards").css({"backgroundColor":"white", "color":"black"});
			$("#hacks").css({"backgroundColor":"white", "color":"black"});
			$("#projects").css({"backgroundColor":"white", "color":"black"});
				
		}

		$("#everything").click(function(){
			fadeAllOut();
			fadeAllOut();
			fadeAllButtonsOut();
			$("#everything").css({"backgroundColor":"rgba(0,100,100,0.7)", "color":"white"});
			$("#hshacksPebble").fadeIn();
			$("#tkd").fadeIn();
			$("#hshacks").fadeIn();
			$("#hackerbracket").fadeIn();
			$("#tinovation").fadeIn();
			$("#ahead").fadeIn();
			$("#chemwhiz").fadeIn();
			$("#airjam").fadeIn();
			$("#invaders").fadeIn();
			$("#royal").fadeIn();
			$("#techchallenge").fadeIn();
			$("#emergentxt").fadeIn();
			$("#paintboard").fadeIn();
			$("#photography").fadeIn();
			$("#monkeyCoderPebble").fadeIn();
			$("#threed").fadeIn();
			$("#tab").fadeIn();
			$("#tg").fadeIn();
			$("#pennAppsWatch").fadeIn();
			$("#rotundus").fadeIn();
			$("#biking").fadeIn();
			$("#eduable").fadeIn();
			$("#studentrnd").fadeIn();
			$("#simplex").fadeIn();
		});

		$("#hobbies").click(function(){
			fadeAllOut();
			fadeAllOut();
			fadeAllButtonsOut();
			$("#hobbies").css({"backgroundColor":"rgba(0,100,100,0.7)", "color":"white"});
			$("#hshacksPebble").fadeOut();
			$("#tkd").fadeIn();
			$("#hshacks").fadeOut();
			$("#hackerbracket").fadeOut();
			$("#tinovation").fadeOut();
			$("#ahead").fadeOut();
			$("#chemwhiz").fadeOut();
			$("#airjam").fadeOut();
			$("#invaders").fadeOut();
			$("#royal").fadeOut();
			$("#techchallenge").fadeOut();
			$("#emergentxt").fadeOut();
			$("#paintboard").fadeOut();
			$("#photography").fadeIn();
			$("#monkeyCoderPebble").fadeOut();
			$("#threed").fadeOut();
			$("#tab").fadeOut();
			$("#tg").fadeOut();
			$("#pennAppsWatch").fadeOut();
			$("#rotundus").fadeOut();
			$("#biking").fadeIn();
			$("#eduable").fadeOut();
			$("#studentrnd").fadeOut();
			$("#simplex").fadeOut();
		});

		$("#awards").click(function(){
			fadeAllOut();
			fadeAllOut();
			fadeAllButtonsOut();
			$("#awards").css({"backgroundColor":"rgba(0,100,100,0.7)", "color":"white"});
			$("#hshacksPebble").fadeOut();
			$("#tkd").fadeOut();
			$("#hshacks").fadeOut();
			$("#hackerbracket").fadeOut();
			$("#tinovation").fadeOut();
			$("#ahead").fadeIn();
			$("#chemwhiz").fadeIn();
			$("#airjam").fadeIn();
			$("#invaders").fadeIn();
			$("#royal").fadeIn();
			$("#techchallenge").fadeIn();
			$("#emergentxt").fadeOut();
			$("#paintboard").fadeOut();
			$("#photography").fadeIn();
			$("#monkeyCoderPebble").fadeOut();
			$("#threed").fadeOut();
			$("#tab").fadeOut();
			$("#tg").fadeOut();
			$("#pennAppsWatch").fadeOut();
			$("#rotundus").fadeOut();
			$("#biking").fadeOut();
			$("#eduable").fadeIn();
			$("#studentrnd").fadeOut();
			$("#simplex").fadeIn();
		});

		$("#hacks").click(function(){
			fadeAllOut();
			fadeAllOut();
			fadeAllButtonsOut();
			$("#hacks").css({"backgroundColor":"rgba(0,100,100,0.7)", "color":"white"});
			$("#hshacksPebble").fadeIn();
			$("#tkd").fadeOut();
			$("#hshacks").fadeOut();
			$("#hackerbracket").fadeIn();
			$("#tinovation").fadeIn();
			$("#ahead").fadeIn();
			$("#chemwhiz").fadeIn();
			$("#airjam").fadeIn();
			$("#invaders").fadeIn();
			$("#royal").fadeOut();
			$("#techchallenge").fadeOut();
			$("#emergentxt").fadeIn();
			$("#paintboard").fadeIn();
			$("#photography").fadeOut();
			$("#monkeyCoderPebble").fadeIn();
			$("#threed").fadeIn();
			$("#tab").fadeOut();
			$("#tg").fadeOut();
			$("#pennAppsWatch").fadeIn();
			$("#rotundus").fadeIn();
			$("#biking").fadeOut();
			$("#eduable").fadeIn();
			$("#studentrnd").fadeOut();
			$("#simplex").fadeIn();
		});

		$("#projects").click(function(){
			fadeAllOut();
			fadeAllOut();
			fadeAllButtonsOut();
			$("#projects").css({"backgroundColor":"rgba(0,100,100,0.7)", "color":"white"});
			$("#hshacksPebble").fadeOut();
			$("#tkd").fadeOut();
			$("#hshacks").fadeIn();
			$("#hackerbracket").fadeOut();
			$("#tinovation").fadeIn();
			$("#ahead").fadeOut();
			$("#chemwhiz").fadeOut();
			$("#airjam").fadeOut();
			$("#invaders").fadeOut();
			$("#royal").fadeIn();
			$("#techchallenge").fadeIn();
			$("#emergentxt").fadeOut();
			$("#paintboard").fadeOut();
			$("#photography").fadeIn();
			$("#monkeyCoderPebble").fadeOut();
			$("#threed").fadeOut();
			$("#tab").fadeIn();
			$("#tg").fadeIn();
			$("#pennAppsWatch").fadeOut();
			$("#rotundus").fadeOut();
			$("#biking").fadeOut();
			$("#eduable").fadeOut();
			$("#studentrnd").fadeIn();
			$("#simplex").fadeOut();
		});
	}

});