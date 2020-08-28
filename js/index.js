$(document).ready(function() {


	if ($(window).width() >= 1199){

		$(".navbar .dropdown-toggle").mouseenter(function () {
			$(this).parent().toggleClass("show");
			$(this).parent().find(".dropdown-menu").toggleClass("show");
		});


		$( ".navbar .dropdown-menu" ).mouseleave(function() {
			$(this).removeClass("show");
		});


		$(".right .nav-link").click(function () {

			$('.contactUsOverlay').show();

			$(".right .menu2").toggleClass("showIt");
		});

		$('.contactUsOverlay').on('click', function(e) {

			if ($(".right .menu2").hasClass('showIt')) {
				$(".right .menu2").toggleClass("showIt");
				$('.contactUsOverlay').hide();
			}

		})

	}


	var sheets = $('.corresponding').width() + 11

	$('.corresponding').css({
		'position' : 'absolute',
		'top' : '-18px',
		'left' : -(sheets)
	})


var allStickyRels = $(".stickyBar .rel");
$(allStickyRels).attr("tabIndex", "0")

var closeAllStickyRels = function(){
	for( i=0; i<allStickyRels.length; i++ ){
		$(allStickyRels[i]).removeClass("showDiv");
	}
}

$(".stickyBar .rel").mouseenter(function(){
	if($(this).hasClass('showDiv')) {
		/* already open */
	} else {
		closeAllStickyRels();
		$(this).addClass("showDiv");
	};
});
$(".stickyBar .rel").focus(function(){
	if($(this).hasClass('showDiv')) {
		/* already open */
	} else {
		closeAllStickyRels();
		$(this).addClass("showDiv");
	};
});

$(".stickyBar .rel .corresponding").mouseleave(function(){
  $(this).parent().removeClass("showDiv");
})



	// $(".stickyBar .rel").mouseenter(function () {
	// 		$(this).addClass("showDiv");
	//
	//
	// 		if($(this).hasClass('showDiv')) {
	// 			$(this).find('.corresponding').show()
	// 		}
	//
	//
	// 	});
	//
	// 	$(".stickyBar .rel").mouseleave(function() {
	// 		$(this).removeClass("showDiv");
	// 		if(!$(this).hasClass('showDiv') ) {
	// 			$(this).find('.corresponding').hide()
	// 		}
	//
	// 	});
	//
	// 	$(".outer").mouseleave(function(){
	//
	// 		$(this).find('.corresponding').hide()
	//
	// 	});




	var Ip = 'https://ipinfo.io/json';

	$.getJSON(Ip, function(data) {
		var city = data.city;
		var region = data.region;
		var country = data.country;


		var proxy = 'https://cors-anywhere.herokuapp.com/';

		var URL = 'http://api.openweathermap.org/data/2.5/weather?id=4367175&appid=b2f2b923be22181ef89baa544605b888'


		$.getJSON(proxy + URL, function(data) {
			var type = data.weather[0].main;  //array 0 index
			var id = data.weather[0].id; //array 0 index
			var city = data.name;

			var tempCel = Math.round(data.main.temp - 273.15);
			var tempC = tempCel + '°C';
			var weather = data.weather[0].description;
			// var tempF = Math.round(tempCel * (9 / 5) + 32) +  "<p>" +  "&deg; F" + "</p>" ;
			var icon = data.weather[0].icon;
			var tempBool = true;

			//Output data to display on the page
			$('#city').text(city);
			$('#state').text(region);
			$("#temp").html("<p>" + Math.round(tempCel * (9 / 5) + 32) +  "&deg; F" + "</p>");
			var weatherIcon = 'http://openweathermap.org/img/w/' + icon + '.png';
			$('#wIcon').html('<img src=' + weatherIcon + '>');


		});
	});

	//508 tabbing

	$("a, button, input, [tabIndex='0']").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabIndex='0']").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	//adding Popular resources




});
