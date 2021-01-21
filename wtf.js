

//weather
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Rockville&units=imperial&appid=b2f2b923be22181ef89baa544605b888", function(data) {

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);

var weather = data.weather[0].main;


$('.icon').attr('src', icon);
$(".temp").append(temp  + ' &#8457;');

$(".weather").append(weather );
});






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



$('.megamenu .nav-item').each(function() {
    if(!$(this).children().hasClass("small-dropdown-menu")){
			$(this).find('.submenu').addClass('hiddenLink')
    }
});



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
	$(this).find('img').attr('src', '../../siteassets/images/forms.svg')
})

$('.forms-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/form-icon.png')
})

$('.work-remote-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/remote.svg')
})

$('.work-remote-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/remote-icon.png')
})

$('.covid-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/COVID-19.svg')
})

$('.covid-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/covid-icon.png')
})

$('.benefits-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/b.svg')
})

$('.benefits-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/benefits-icon.png')
})

$('.oasys-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/oasys-icon.svg')
})

$('.oasys-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/oasys-icon.png')
})

$('.proposal-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/prop.svg')
})

$('.proposal-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/proposal-icon.png')
})

$('.ROS-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/ROS.svg')
})

$('.ROS-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/ros-icon.png')
})

$('.RR-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/rr.svg')
})

$('.RR-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/rr-icon.png')
})

$('.living-well-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/living.svg')
})

$('.living-well-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/living-icon.png')
})

$('.workday-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/w.svg')
})

$('.workday-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/workday-icon.png')
})


$('.IRB-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/IRB-icon.svg')
})

$('.IRB-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/IRB-icon.png')
})

$('.AIB-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/a.svg')
})

$('.AIB-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/a-icon.png')
})

$('.training-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/t.svg')
})

$('.training-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/training-icon.png')
})

$('.campus-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/campus.svg')
})

$('.campus-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/campus-icon.png')
})

$('.communication-icon').parent().mouseenter(function() {
	$(this).find('img').attr('src', '../../siteassets/images/communication.svg')
})

$('.communication-icon').parent().mouseleave(function() {
	$(this).find('img').attr('src', '../../siteassets/images/c-icon.png')
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





//jennifer's code


function onQuerySucceeded() {
	document.getElementById('username').innerHTML = currentUser.get_title();
}


function peopleSearch() {
	alert('411 search');
}
function peopleAdvanced() {
	alert('411 Advanced');
}
function sendFeedback() {

	var option;
	option = checkFeedbackValue();

	$().SPServices({
		operation: "UpdateListItems",
		async: false,
		batchCmd: "New",
		listName: "Site_Feedback",
		valuepairs: [["Comments", $('#message').val()], ["Angry_Happy", option]],
		completefunc: function (xData, Status) {
			//  alert("Data Saved! and Please check your List");
		}
	});
}
function sendContactUs() {

	var option;
	option = checkContactUsValue();

	$().SPServices({
		operation: "UpdateListItems",
		async: false,
		batchCmd: "New",
		listName: "Site_Help",
		valuepairs: [["Comments", $('#messageContact').val()], ["Help_Choice", option]],
		completefunc: function (xData, Status) {
			//  alert("Data Saved! and Please check your List");
		}
	});

}
function checkContactUsValue() {
	var ele = document.getElementsByName('time');
	var answer = "None";
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			answer = ele[i].value;
	}
	return answer;
}

function checkFeedbackValue() {
	var ele = document.getElementsByName('Q1');
	var answer = "None";
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			answer = ele[i].value;
	}
	return answer;
}
ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, 'sp.js');

function GetUserLoginName() {


	//close weather
	//getusername
	this.clientContext = new SP.ClientContext.get_current();
	this.oWeb = clientContext.get_web();
	currentUser = this.oWeb.get_currentUser();
	this.clientContext.load(currentUser);
	this.clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
	//close get username


}
