$(function(){
    $('.slider').slick({
        prevArrow: '<div class="comment__arrow comment__arrow_l"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="comment__arrow comment__arrow_r"><i class="fa fa-angle-right"></i></div>',
        dots: true,
        // dotsClass: 'round__item',
    });
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