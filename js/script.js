$(".gamb").click(function(){
    $("#menu2").toggleClass("active-menu"); 
});

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
    // separateDialCode: true,
    geoIpLookup: function(callback) { $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) { var countryCode = (resp && resp.country) ? resp.country : ""; callback(countryCode); }); }, utilsScript: "utils.js", //для форматирования/плейсхолдера и т.д. // 
});

$('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      success: function(result) {
        $('#exampleModal1').arcticmodal();
      },
    });
  });

  jQuery(document).ready(function() {
    jQuery("a.arrow").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      return false;
    });
  });
 




