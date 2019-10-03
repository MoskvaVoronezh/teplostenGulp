$(document).ready(function () {

	var absouluteFloor1 = $(".absoulute-floor-1");
	var absouluteFloor2 = $(".absoulute-floor-2");
	var absouluteFloor3 = $(".absoulute-floor-3");

	var floorCount = $(".floor-count");

		resultValue = floorCount.on('change', function() {
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
			var res = $('input[name="type"]:checked').val();
			console.log(res);
		});

	

});