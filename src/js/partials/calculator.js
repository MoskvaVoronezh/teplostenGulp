$(document).ready(function () {

	var absouluteFloor1 = $(".absoulute-floor-1");
	var absouluteFloor2 = $(".absoulute-floor-2");
	var absouluteFloor3 = $(".absoulute-floor-3");

	var floorCount = $(".floor-count");


		floorCount.on('change', function() {
			var result = $(this).val();
			if(result == 1) {
				absouluteFloor2.css('display', 'none');
				absouluteFloor3.css('display', 'none');
			}
			else if(result == 2) {
				absouluteFloor2.css('display', 'block');
			}
			else if(result == 3) {
				absouluteFloor2.css('display', 'block');
				absouluteFloor3.css('display', 'block');
			}
		});
	
		$(".calculator_btn").on("click", function (){
			var houseType = $('input[name="type"]:checked').val();
			if(houseType == 'type-1') {
				var floorHeightFirst = +($('.floor-height-first').val());
				var floorHeightSecond = +($('.floor-height_second').val());
				var floorHeightThird = +($('.floor-height_third').val());
				var lenght = +($('.input-3').val());
				var width = +($('.input-2').val());

				var blockAngular = ((floorHeightFirst + floorHeightSecond + floorHeightThird)/0.2) * 4;
				console.log(blockAngular);

			}
			else if (houseType == 'type-2') {
			}
		});

		

});