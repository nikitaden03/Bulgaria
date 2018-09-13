$(function(){
    $('.slider').slick({
        prevArrow: '<div class="comment__arrow comment__arrow_l"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="comment__arrow comment__arrow_r"><i class="fa fa-angle-right"></i></div>',
        dots: true,
        // dotsClass: 'round__item',
    });
<<<<<<< HEAD
});

$("#phone").intlTelInput({ 
    defaultCountry: [],
    preferredCountries: ['ru' , 'ua'], 
    separateDialCode: true,
    geoIpLookup: function(callback) { $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) { var countryCode = (resp && resp.country) ? resp.country : ""; callback(countryCode); }); }, utilsScript: "utils.js", //для форматирования/плейсхолдера и т.д. // 
});


$("#phone").on("countrychange", function(e, countryData) {
    $("#phone").val('');
    var mask1 = $("#phone").attr('placeholder').replace(/[0-9]/g, 0);
    $('#phone').mask(mask1);
});

$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
            $('#myModal').modal({
                keyboard: false
              })
		});
		return false;
	});
});

=======
});
>>>>>>> parent of aee9115... Начинаем форму
