$(document).ready(function() {


		// var Ip = 'https://ipinfo.io/json';
		//
		// $.getJSON(Ip, function(data) {
		// 	var city = data.city;
		// 	var region = data.region;
		// 	var country = data.country;
		//
		//
		// 	var proxy = 'https://cors-anywhere.herokuapp.com/';
		//
		// 	var URL = 'http://api.openweathermap.org/data/2.5/weather?id=4367175&appid=b2f2b923be22181ef89baa544605b888'
		//
		//
		// 	$.getJSON(proxy + URL, function(data) {
		// 		var type = data.weather[0].main;  //array 0 index
		// 		var id = data.weather[0].id; //array 0 index
		// 		var city = data.name;
		//
		// 		var tempCel = Math.round(data.main.temp - 273.15);
		// 		var tempC = tempCel + '°C';
		// 		var weather = data.weather[0].description;
		// 		// var tempF = Math.round(tempCel * (9 / 5) + 32) +  "<p>" +  "&deg; F" + "</p>" ;
		// 		var icon = data.weather[0].icon;
		// 		var tempBool = true;
		//
		// 		//Output data to display on the page
		// 		$('#city').text(city);
		// 		$('#state').text(region);
		// 		$("#temp").html("<p>" + Math.round(tempCel * (9 / 5) + 32) +  "&deg; F" + "</p>");
		// 		var weatherIcon = 'http://openweathermap.org/img/w/' + icon + '.png';
		// 		$('#wIcon').html('<img src=' + weatherIcon + '>');
		//
		//
		// 	});
		// });

	$(document).keyup(function (e) {
      if (e.keyCode == 16) {
          if (e.originalEvent.location == 1)
              console.log('Left SHIFT pressed.');
          else
              console.log('Right SHIFT pressed.');
      }

		else	if (e.keyCode == 17) {
          if (e.originalEvent.location == 1)
              console.log('Left CTRL pressed.');
          else
              console.log('Right CTRL pressed.');
      }

	else	if (e.keyCode == 18) {
          if (e.originalEvent.location == 1) {
              console.log('Left ALT pressed.');
              $('#ms-designer-ribbon').toggleClass('hidden');

				}
          else {
              console.log('Right ALT pressed.');
              $('#ms-designer-ribbon').toggleClass('hidden');

          e.preventDefault();

				}
      }
});



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


$('.collapse').on('show.bs.collapse', function () {

	$(this).closest('.sideBlock').addClass('aquaBackground')

	$(this).closest('.sideBlock').find('.borderShow').show()

	$('a[href="#' + this.id + '"] .caret-down').css({
		transform: "rotate(180deg)"
	});

});
$('.collapse').on('hide.bs.collapse', function () {
		$(this).closest('.sideBlock').find('.borderShow').hide()

	$(this).closest('.sideBlock').removeClass('aquaBackground')

	$('a[href="#' + this.id + '"] .caret-down').css({
		transform: "rotate(0deg)"
	});

});


var pathMobile = window.location.href

$('.side-menu-container .navbar-nav  a').each(function() {
	if (this.href === pathMobile) {
		$(this).closest('li').addClass('active');
	}
	else {
		$(this).closest('li').removeClass('active');
	}

	if ($('li.active').parent().parent().hasClass('panel-body')){
		$('li.active').closest('.panel-collapse').addClass('show')
		$('li.active').closest('.sideBlock').addClass('aquaBackground')
 		$('li.active').closest('.sideBlock').find('.borderShow').show()

	}

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
