$(document).ready(function () {

	var absouluteFloor1 = $(".absoulute-floor-1");
	var absouluteFloor2 = $(".absoulute-floor-2");
	var absouluteFloor3 = $(".absoulute-floor-3");
	var typeSecondFirstFloor = $(".first-floor-type-2");
	var typeSecondSecondFloor = $(".second-floor-type-2");
	var typeSecondThirdFloor = $(".fhird-floor-type-2");
	var floorCount = $(".floor-count");
	
	//от количества этажей появляются поля
	floorCount.on('change', function() {
		var result = $(this).val();
		if(result == 1) {
			absouluteFloor2.css('display', 'none');
			absouluteFloor3.css('display', 'none');
			typeSecondSecondFloor.css('display', 'none');
			typeSecondThirdFloor.css('display', 'none');
		}
		else if(result == 2) {
			absouluteFloor2.css('display', 'block');
			typeSecondSecondFloor.css('display', 'block');
		}
		else if(result == 3) {
			absouluteFloor2.css('display', 'block');
			absouluteFloor3.css('display', 'block');
			typeSecondSecondFloor.css('display', 'block');
			typeSecondThirdFloor.css('display', 'block');
		}
	});
	//обработчик клика расчета
	$(".calculator_btn").on("click", function (){
		var houseType = $('.type:checked').val();
		var floorHeightFirst = +($('.floor-height-first').val());
		var floorHeightSecond = +($('.floor-height_second').val());
		var floorHeightThird = +($('.floor-height_third').val());
		var lenght = +($('.input-3').val());
		var width = +($('.input-2').val());
		var doorHeight = +$('.height-door').val();
		var doorLenght = +$('.lenght-door').val();
		var doorCount = +$('.count-door').val();
		var windowCount = +$('.count-window').val();
		var windowHeight = +$('.height-window').val();
		var windowLenght = +$('.lenght-window').val();
		var roofChecked = $('.roof:checked').val();
		var roofHeight = +$('.roof-height').val();
		var roofLenght = +$('.roof-lenght').val();

		var floorHeightFirstTypeSecond = +$('.type-second-first-floor').val();
		var floorHeightSecondTypeSecond = +$('.type-second-second-floor').val(); 
		var floorHeightThirdTypeSecond = +$('.type-second-fhird-floor').val();
		var widthFirstSecondType = +$('.width-type-second-1').val();
		var widthSecondSecondType = +$('.width-type-second-2').val();
		var lenghtFirstSecondType = +$('.lenght-type-2-first').val();
		var lenghtSecondSecondType = +$('.lenght-type-2-second').val();

		if(houseType == 'type-1') {

			$('._block-interior').text('-');
			console.log(roofChecked);

			//угловой блок
			var blockAngular = Math.round(((floorHeightFirst + floorHeightSecond + floorHeightThird)/0.2) * 4);
			$('#count-blockAngular').html(blockAngular);
			var blockAngularMetr = $('#metres-blockAngular').html(blockAngular * 0.012);
			$('#total-blockAngular').html(+$('#price-blockAngular').text() * blockAngular);
			console.log("блок угловой: " + blockAngular);

			//периметр
			perimetrTypeFirst = (lenght + width) * 2;
			//поясной блок
			var blockWaist = Math.round(((+perimetrTypeFirst - 3.2)/0.4) * (+floorCount.val()));
			$('#count-blockWaist').html(blockWaist);
			var blockWaistMetr = $('#metres-blockWaist').html(blockWaist * 0.012);
			$('#total-blockWaist').html(+$('#price-blockWaist').text() * blockWaist);
			console.log("блок поясной: " +  blockWaist);

			//блок рядовой
			var blockPrivate = Math.round(((perimetrTypeFirst - 3.2) / 0.4 * ((floorHeightFirst + floorHeightSecond + floorHeightThird) / 0.2)) - blockWaist);
			console.log("блок рядовой: " + blockPrivate);


			//блок половинчатый
			var blockHalf = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2);
			$('#count-blockHalf').html(blockHalf);
			var blockHalfMetr = $('#metres-blockHalf').html(blockHalf * 0.012);
			$('#total-blockHalf').html(+$('#price-blockHalf').text() * blockHalf);
			console.log("блок половинчатый: " + blockHalf);

			//двери
			var doors = (doorLenght + 0.2) * doorHeight * 12.5 * doorCount;
			console.log("двери: " + doors);

			//окна
			var windows = (windowLenght + 0.2) * windowHeight * 12.5 * windowCount;
			console.log("окна: " + windows);

			//рядовой
			blockPrivate = Math.round((blockPrivate - doors - windows));
			console.log("блок рядовой без дверей и окон: " + blockPrivate);

			if(roofChecked == 'roof-1') {
				var treygArea = 0.5 * roofHeight * roofLenght;
				blockPrivate = Math.round	(blockPrivate + (treygArea*2)*12.5);
				console.log("блок рядовой с крышей: " + blockPrivate);
				$('#count-private').html(blockPrivate);
				var blockPrivateMetr = $('#metres-private').html(blockPrivate * 0.024);
				$('#total-private').html(+$('#price-private').text() * blockPrivate);
			}
			else if (roofChecked == 'roof-2') {
				blockPrivate = blockPrivate;
				$('#count-private').html(blockPrivate);
				var blockPrivateMetr = $('#metres-private').html(blockPrivate * 0.024);
				$('#total-private').html(+$('#price-private').text() * blockPrivate);
				console.log("блок рядовой без крыши: " + blockPrivate);
				$('#count-private').html(blockPrivate);
			}

			var totalCountBlocks = blockAngular + blockWaist + blockPrivate + blockHalf;
			console.log("общее количество блоков" + totalCountBlocks);
			console.log(blockAngularMetr + "-- angulaar");
			var totalMetres = (blockAngularMetr + blockWaistMetr + blockPrivateMetr + blockHalfMetr);
			console.log("общее количество метров3" + totalMetres);
			$('#total-counts').html(totalCountBlocks);
			$('#total-metres').html(totalMetres);

			

			
		}
		else if (houseType == 'type-2') {
			//угловой блок
			var blockAngularTypeSecond = Math.round(((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond) / 0.2) * 5);
			console.log("блок угловой: " + blockAngularTypeSecond);
			//внутренний блок
			var blockInteriorTypeSecond = Math.round((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond)/0.2);

			var perimetrTypeSecond = (widthFirstSecondType + widthSecondSecondType + lenghtFirstSecondType + lenghtSecondSecondType) * 2;

			//поясной блок
			var blockWaistTypeSecond = Math.round(((+perimetrTypeSecond - 4.2) / 0.4) * (+floorCount.val()));
			console.log("блок поясной: " + blockWaistTypeSecond);

			//блок рядовой
			var blockPrivateTypeSecond = Math.round(((perimetrTypeSecond - 4.2) / 0.4 * ((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond) / 0.2)) - blockWaistTypeSecond);
			console.log("блок рядовой: " + blockPrivateTypeSecond);

			var doors = (doorLenght + 0.2) * doorHeight * 12.5 * doorCount;
			console.log("двери: " + doors);
			//окна
			var windows = (windowLenght + 0.2) * windowHeight * 12.5 * windowCount;
			console.log("окна: " + windows);

			blockPrivateTypeSecond = Math.round((blockPrivateTypeSecond - doors - windows));
			console.log("блок рядовой без дверей и окон: " + blockPrivateTypeSecond);

			//блок половинчатый
			var blockHalfTypeSecond = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2);
			console.log("блок половинчатый: " + blockHalfTypeSecond);

			if (roofChecked == 'roof-1') {
				blockInteriorTypeSecond = blockInteriorTypeSecond + roofHeight / 0.2;
				blockAngularTypeSecond = blockAngularTypeSecond + roofHeight / 0.2;

				var treygArea = 0.5 * roofHeight * roofLenght;
				blockPrivateTypeSecond = blockPrivateTypeSecond + (treygArea * 2) * 12.5;
				console.log("блок рядовой с крышей: " + blockPrivateTypeSecond);
				console.log("угловой с учетом крыши: " + blockAngularTypeSecond);
				console.log("внутренний с учетом крыши: " + blockInteriorTypeSecond);
			}
			else if (roofChecked == 'roof-2') {
				blockInteriorTypeSecond = blockInteriorTypeSecond;
				blockAngularTypeSecond = blockAngularTypeSecond;
				console.log("угловой без крыши: " + blockAngularTypeSecond);
				console.log("внутренний без крыши: " + blockInteriorTypeSecond);
			}

		}
	});

		

});