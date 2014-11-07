$(document).ready(function(){
/*about*/
  $(".about").hover(function() {
  	$(".splash").css({
  		'background-color': 'tomato',
  		'-webkit-transition' : 'background-color 500ms linear',
    	'-moz-transition' : 'background-color 500ms linear',
    	'-o-transition' : 'background-color 500ms linear',
    	'transition' : 'background-color 500ms linear'
  	});
  	$(".lgnd-about").slideDown(400);
  }, function() {
  	$(".splash").css('background', '#00CCCC');
  	$(".lgnd-about").slideUp(400);
  });

  $(".about").click(function(){
    $(".about-h").slideDown(900);
    $(".splash").slideUp(900);
    $(".splash").addClass('tomato');
  });

/*
WORK
*/

  $(".work").hover(function() {
  	$(".splash").css({
  		'background-color': '#7CE30B',
  		'-webkit-transition' : 'background-color 500ms linear',
    	'-moz-transition' : 'background-color 500ms linear',
    	'-o-transition' : 'background-color 500ms linear',
    	'transition' : 'background-color 500ms linear'
  	});
  	$(".lgnd-work").slideDown(400);
  }, function() {
  	$(".splash").css('background', '#00CCCC');
  	$(".lgnd-work").slideUp(400);
  });

  $(".work").click(function(){
    $(".work-h").slideDown(900);
    $(".splash").slideUp(900);
    $(".splash").addClass('tomato');
  });


  /*
CONTACT
*/


  $(".contact").hover(function() {
  	$(".splash").css({
  		'background-color': '#D99C35',
  		'-webkit-transition' : 'background-color 500ms linear',
    	'-moz-transition' : 'background-color 500ms linear',
    	'-o-transition' : 'background-color 500ms linear',
    	'transition' : 'background-color 500ms linear'
  	});
  	$(".lgnd-contact").slideDown(400);
  }, function() {
  	$(".splash").css('background', '#00CCCC');
  	$(".lgnd-contact").slideUp(400);
  });

  $(".contact").click(function(){
    $(".contact-h").slideDown(900);
    $(".splash").slideUp(900);
    $(".splash").addClass('tomato');
  });



/*TOP MENU*/

 $(".tp-home").click(function(){
    $(".tp-home").closest('.hider').slideUp(900);
 	$(".splash").slideDown(900);
  });
$(".tp-work").click(function(){
    $(".tp-home").closest('.hider').slideUp(900);
 	$(".work-h").slideDown(900);
  });
$(".tp-contact").click(function(){
    $(".tp-contact").closest('.hider').slideUp(900);
 	$(".contact-h").slideDown(900);
  });
 $(".tp-about").click(function(){
    $(".tp-about").closest('.hider').slideUp(900);
 	$(".about-h").slideDown(900);
  });


/*
IMGDECRIPTION*/

$('.fade').hover(function(){
	$(this).find('.caption').fadeIn(250);
}, function(){
	$(this).find('.caption').fadeOut(250);
});

$("#submit").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();

	var varData = 'name' + name + '&email' + email;
	console.log(varData);

	$.ajax({
		type: 'POST',
		url: './send-email.php',
		data: varData,
		succes: function(){
			alert("done");
		}

	});

});



});/*END READY*/



