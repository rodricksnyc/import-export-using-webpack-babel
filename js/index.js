$(document).ready(function() {

	$('#slideOut2 .modal-header a').attr('tabindex', '-1')

	var open = function() {

	$('.changeTitle').html('We value your feedback!')
		$('.contactUsOverlay').show();

		$('#theform input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '0');
		});

		$('#slideOut2 .modal-header a').attr('tabindex', '0')

		$('.form-check-input').attr('tabindex', '0');

		$('.form-control').attr('tabindex', '0');

		$('#closeThisPlease').attr('tabindex', '0');

		$('#sendMessage').attr('tabindex', '0');

		$('.modal-content').addClass('opened')
		$("#slideOut2").addClass('showslideOut2');
		$("#one").addClass('blueTab');
		$("#two").removeClass('blueTab');


				$('.firstBlock').addClass('hide1').fadeOut()
				$('.secondBlock').removeClass('hide1').fadeIn()

		setTimeout(function() {
			$('body').addClass('showContact')
		}, 300)

	}
	$('#one').keypress(
		open

	).click(
		open
	);




	var open2 = function() {

		$('.changeTitle').html('Need Help?')
		$('.contactUsOverlay').show();

		$('#theform input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '0');
		});

		$('#slideOut2 .modal-header a').attr('tabindex', '0')

		$('.form-check-input').attr('tabindex', '0');

		$('.form-control').attr('tabindex', '0');

		$('#closeThisPlease').attr('tabindex', '0');

		$('#sendMessage').attr('tabindex', '0');

		$('.modal-content').addClass('opened')
		$("#slideOut2").addClass('showslideOut2');
		$("#two").addClass('blueTab');
		$("#one").removeClass('blueTab');

		$('.firstBlock').removeClass('hide1').fadeIn()
		$('.secondBlock').addClass('hide1').fadeOut()

		setTimeout(function() {
			$('body').addClass('showContact')
		}, 300)

	}
	$('#two').keypress(
		open2

	).click(
		open2
	);




	$('.contactUsOverlay').on('click', function(e) {

		if($('body').hasClass('showContact')) {

				console.log("eriugbierib")

			$('#slideOut2 .form-control').attr('tabindex', '-1');

			$('#slideOut2 .modal-header a').attr('tabindex', '-1')

			$('#closeThisPlease').attr('tabindex', '-1');

			$('#sendMessage').attr('tabindex', '-1');
			$('.form-check-input').attr('tabindex', '-1');

			$("#slideOut2").removeClass('showslideOut2');
			$('.contactUsOverlay').hide();

			setTimeout(function() {
				$('body').removeClass('showContact')
			}, 300)

		}
	})


	var close = function() {
		$('.contactUsOverlay').hide();
		$('#slideOut2 .form-control').attr('tabindex', '-1');
		$('#closeThisPlease').attr('tabindex', '-1');
		$('#sendMessage').attr('tabindex', '-1');
		$("#slideOut2").removeClass('showslideOut2');
		$('.form-check-input').attr('tabindex', '-1');
		$('#slideOut2 .modal-header a').attr('tabindex', '-1')

			$("#one, #two").removeClass('blueTab');

	}

	$('#close').keypress(
		close

	).click(
		close
	);


	$("#closeThisPlease").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {

			$('#one').focus().css('outline', 'dashed 3px #4599ff')
		}

	})



  $('.textArea').keydown(function (event) {
    $('#sendMessage .buttonOverlay').remove()

  });
	$('.textArea2').keydown(function (event) {
    $('#sendMessage2 .buttonOverlay').remove()

  });


$('.slideOutTab').on('mouseenter', function() {
	if (!$('#slideOut2').hasClass('showslideOut2')) {
	$('#one, #two').animate({
			'right': "138px"
		}, 200, function() {

		});

		$('#one').addClass('hoverColor1')
		$('#two').addClass('hoverColor2')

	}

	})

	$('.slideOutTab').on('mouseleave', function() {
		$('#one, #two').animate({
				'right': "45px"
			}, 200, function() {

			});

			$('#one').removeClass('hoverColor1')
			$('#two').removeClass('hoverColor2')

		})




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




	var elements = $(document).find('select.form-control');
for (var i = 0, l = elements.length; i < l; i++) {
  var $select = $(elements[i]), $label = $select.parents('.form-group').find('label');

  $select.select2({
    allowClear: false,
    placeholder: $select.data('placeholder'),
    minimumResultsForSearch: 0,
    theme: 'bootstrap',
		width: '100%' // https://github.com/select2/select2/issues/3278
  });

  // Trigger focus
  $label.on('click', function (e) {
    $(this).parents('.form-group').find('select').trigger('focus').select2('focus');
  });

  // Trigger search
  $select.on('keydown', function (e) {
    var $select = $(this), $select2 = $select.data('select2'), $container = $select2.$container;

    // Unprintable keys
    if (typeof e.which === 'undefined' || $.inArray(e.which, [0, 8, 9, 12, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 44, 45, 46, 91, 92, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 124, 144, 145, 224, 225, 57392, 63289]) >= 0) {
      return true;
    }

    // Opened dropdown
    if ($container.hasClass('select2-container--open')) {
      return true;
    }

    $select.select2('open');

    // Default search value
    var $search = $select2.dropdown.$search || $select2.selection.$search, query = $.inArray(e.which, [13, 40, 108]) < 0 ? String.fromCharCode(e.which) : '';
    if (query !== '') {
      $search.val(query).trigger('keyup');
    }
  });

  // Format, placeholder
  $select.on('select2:open', function (e) {
		var $select = $(this), $select2 = $select.data('select2'), $dropdown = $select2.dropdown.$dropdown || $select2.selection.$dropdown, $search = $select2.dropdown.$search || $select2.selection.$search, data = $select.select2('data');

    // Above dropdown
    if ($dropdown.hasClass('select2-dropdown--above')) {
      $dropdown.append($search.parents('.select2-search--dropdown').detach());
    }

    // Placeholder
    $search.attr('placeholder', (data[0].text !== '' ? data[0].text : $select.data('placeholder')));
  });
}



$('b[role="presentation"]').hide();
$('.select2-selection__arrow').append('<i class="fa fa-angle-down"></i>');










});
