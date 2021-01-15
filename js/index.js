$(document).ready(function() {

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Rockville&units=imperial&appid=b2f2b923be22181ef89baa544605b888", function(data) {

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);

var weather = data.weather[0].main;


$('.icon').attr('src', icon);
$(".temp").append(temp  + ' &#8457;');

$(".weather").append(weather );
});



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
	//



	var slideIt2 = function() {

	if($('.toggleDiv').is(':visible'))  {

		$('.viewMore').html('View More')
		$('.toggleDiv').slideUp();
	}
	else if ($('.toggleDiv').is(':hidden')){

	$('.viewMore').html('View Less')

		$('.toggleDiv').slideDown().css('display', 'flex');
	}
}
$('.viewMore').keypress(
	slideIt2
).click(
	slideIt2
);



$('.forms-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/forms.svg')
})

$('.forms-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/form-icon.png')
})

$('.work-remote-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/remote.svg')
})

$('.work-remote-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/remote-icon.png')
})

$('.covid-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/COVID-19.svg')
})

$('.covid-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/covid-icon.png')
})

$('.benefits-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/b.svg')
})

$('.benefits-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/benefits-icon.png')
})

$('.oasys-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/oasys-icon.svg')
})

$('.oasys-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/oasys-icon.png')
})

$('.proposal-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/prop.svg')
})

$('.proposal-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/proposal-icon.png')
})

$('.ROS-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/ROS.svg')
})

$('.ROS-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/ros-icon.png')
})

$('.RR-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/rr.svg')
})

$('.RR-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/rr-icon.png')
})

$('.living-well-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/living.svg')
})

$('.living-well-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/living-icon.png')
})

$('.workday-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/w.svg')
})

$('.workday-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/workday-icon.png')
})


$('.IRB-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/IRB-icon.svg')
})

$('.IRB-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/IRB-icon.png')
})

$('.AIB-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/a.svg')
})

$('.AIB-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/a-icon.png')
})

$('.training-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/t.svg')
})

$('.training-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/training-icon.png')
})

$('.campus-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/campus.svg')
})

$('.campus-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/campus-icon.png')
})

$('.communication-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', 'images/communication.svg')
})

$('.communication-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', 'images/c-icon.png')
})







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

			$('.navbar').addClass('zIndex0')
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
		$('.navbar').addClass('zIndex0')

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

				$('.navbar').removeClass('zIndex0')

			$('#slideOut2 .form-control').attr('tabindex', '-1');

			$('#slideOut2 .modal-header a').attr('tabindex', '-1')

			$('#closeThisPlease').attr('tabindex', '-1');

			$('#sendMessage').attr('tabindex', '-1');
			$('.form-check-input').attr('tabindex', '-1');

			$("#slideOut2").removeClass('showslideOut2');
			$('.contactUsOverlay').hide();
				$("#one, #two").removeClass('blueTab');

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

		$('.navbar').removeClass('zIndex0')

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
				$('.navbar').removeClass('zIndex0')
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




//hover for dropdown items in main navbar

  // var $dropdown = $(".navbar-nav .nav-item");
  // var $dropdownToggle = $(".dropdown-toggle");
  // var $dropdownMenu = $(".dropdown-menu");
  // var showClass = "show";
	//
  // $(window).on("load resize", function() {
  //   if (this.matchMedia("(min-width: 768px)").matches) {
  //     $dropdown.hover(
  //       function() {
	//
  //         var $this = $(this);
  //         $this.addClass(showClass);
  //         $this.find($dropdownToggle).attr("aria-expanded", "true");
  //         $this.find($dropdownMenu).addClass(showClass);
  //       },
  //       function() {
	//
  //         var $this = $(this);
  //         $this.removeClass(showClass);
  //         $this.find($dropdownToggle).attr("aria-expanded", "false");
  //         $this.find($dropdownMenu).removeClass(showClass);
  //       }
  //     );
  //   } else {
  //     $dropdown.off("mouseenter mouseleave");
  //   }
  // });

//
// var dropdownButton = $(".btn-group .dropdown-menu")
//
//   dropdownButton.on('mouseleave', function() {
//
//     dropdownButton.removeClass('show');
//
//   })


$('.dropdown').on("mouseenter", function(e){
$('.dropdown-big').show()
$('.enclosing').show()
})


$(window).on('load', function() {
// var grid = $('.grid-container').children()

$('.grid-container').each(function() {

if ($(this).children().length  > 8) {
	$(this).closest('.grid-container').addClass('twoColumns')
}

// if ($(this).children().length  > 10) {
// 	$(this).closest('.grid-container').addClass('largeColumns')
// }


})




})



  // $('.submenu').not('.hiddenLink').on("mouseenter", function(e){

  $('.submenu').on("mouseenter", function(e){
    $(this).next('.small-dropdown-menu').show();
		$(this).addClass('newBackground')
    e.stopPropagation();
    // e.preventDefault();
  });

		var leaving2 = $('.submenu').closest('.nav-item')

	  $(leaving2).on("mouseleave", function(e){

			$('.submenu').removeClass('newBackground')

		})

	var leaving = $('.small-dropdown-menu').closest('.nav-item')

  $(leaving).on("mouseleave", function(e){
    $('.small-dropdown-menu').hide();



  });


$('nav').on('mouseleave', function() {
	$('.dropdown-big').hide()
	$('.enclosing').hide()
})

//
// if ($('.megamenu .nav-item').not(':has(.small-dropdown-menu)')) {
// 	$(this).find('.submenu').addClass('hiddenLink')
//
// }


$('.megamenu .nav-item').each(function() {
    if(!$(this).children().hasClass("small-dropdown-menu")){
			$(this).find('.submenu').addClass('hiddenLink')
    }
});



// $('.hiddenLink').parent().css('border-bottom', '1px solid #edfcfc')
//


var totalItems = $('.item').length;
var currentIndex = $('div.active').index() + 1;

$('.carousel').on('slid.bs.carousel', function () {
	var carouselData = $(this).data('bs.carousel')

	currentIndex = $('div.active').index()

	$('.sliderBlock').removeClass('active-p').eq(currentIndex).addClass('active-p')
})



jQuery("#carousel").owlCarousel({
	autoplay: true,
	lazyLoad: true,
	loop: true,
	margin: 10,
	/*
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	*/
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 7000,
	smartSpeed: 800,
	nav: true,
	responsive: {
		0: {
			items: 1
		},

		600: {
			items: 3
		},

		1024: {
			items: 4
		},

		1366: {
			items: 3
		}
	}
});

$("[data-toggle=popover]").on("mouseenter", function() {
	var _this = this;
	$(this).popover("show");
	$(".popover").on("mouseleave", function() {
		$(_this).popover('hide');
	});
})
.on("mouseleave", function() {
	var _this = this;
	setTimeout(function() {
		if (!$(".popover:hover").length) {
			$(_this).popover("hide");
		}
	}, 300);

})

$(function () {
$('[data-toggle="popover"]').popover()
})


// $(function() {
//   let e = $('[data-toggle="popover"]').popover().data('bs.popover').getTipElement();
//
// 	$(e).addClass('custom');
// });


// $('[data-toggle="popover"]').popover().on("show.bs.popover", function(){
//     $(".popover").addClass("custom");
// });
//


$("[data-toggle=popover]").popover({
				html : true,
				trigger: 'focus',
				content: function() {
						var content = $(this).attr("data-popover-content");
						return $(content).children(".popover-body").html();
				}
		});




});
