


$(document).ready(function () {

   var checkboxHouseFirst = $('#type-house-first');
   var checkboxHouseSecond = $('#type-house-second');

   checkboxHouseFirst.on('click', function () {
      $(this).addClass('type-house-first-active');
      if (checkboxHouseSecond.hasClass('type-house-second-active')) {
         checkboxHouseSecond.removeClass('type-house-second-active');
      }
      if (checkboxHouseSecond.prop('checked') == true) {
         console.log('2 зачекан');
         checkboxHouseSecond.prop('checked', false);
      }
      $('.input-4').attr('disabled', true);
      $('.input-5').attr('disabled', true);
      $('.input-6').attr('disabled', true);
      $('.input-7').attr('disabled', true);
      $('.input-8').attr('disabled', true);
      $('.input-1').attr('disabled', false);
      $('.input-2').attr('disabled', false);
      $('.input-3').attr('disabled', false);
   });

   checkboxHouseSecond.on('click', function () {
      $(this).addClass('type-house-second-active');
      if (checkboxHouseFirst.hasClass('type-house-first-active')) {
         checkboxHouseFirst.removeClass('type-house-fitst-active');
      }
      if (checkboxHouseFirst.prop('checked') == true) {
         console.log('зачекан 1');
         checkboxHouseFirst.prop('checked', false);
      }
      $('.input-1').attr('disabled', true);
      $('.input-2').attr('disabled', true);
      $('.input-3').attr('disabled', true);
      $('.input-4').attr('disabled', false);
      $('.input-5').attr('disabled', false);
      $('.input-6').attr('disabled', false);
      $('.input-7').attr('disabled', false);
      $('.input-8').attr('disabled', false);
   });
});