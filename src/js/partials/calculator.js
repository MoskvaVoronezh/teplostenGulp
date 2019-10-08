$(document).ready(function () {

	// var absouluteFloor1 = $(".absoulute-floor-1");
	var absouluteFloor2 = $(".absoulute-floor-2");
	var absouluteFloor3 = $(".absoulute-floor-3");
	// var typeSecondFirstFloor = $(".first-floor-type-2");
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
			var blockAngularMetr = +((blockAngular * 0.03).toFixed(2));
			console.log("blockAngularMetr: " + blockAngularMetr);
			$('#metres-blockAngular').html(blockAngularMetr);
			
			$('#total-blockAngular').html(+$('#price-blockAngular').text() * blockAngular);
			if(blockAngularMetr > 0.45 && blockAngularMetr <= 10.44) {
				$('#sale-blockAngular').html('1%');
			}
			else if(blockAngularMetr >= 10.45 && blockAngularMetr < 20.45) {
				$('#sale-blockAngular').html('2%');
			}
			else if(blockAngularMetr >= 20.45 && blockAngularMetr < 30.44)	{
				$('#sale-blockAngular').html('3%');
			}
			else if(blockAngularMetr >= 30.45 && blockAngularMetr < 40.44)	{
				$('#sale-blockAngular').html('4%');
			}
			else if(blockAngularMetr >= 40.45)	{
				$('#sale-blockAngular').html('5%');
			}
			else {
				$('#sale-blockAngular').html('0');
			}

			console.log("блок угловой: " + blockAngular);
			console.log(blockAngularMetr);

			//периметр
			perimetrTypeFirst = (lenght + width) * 2;
			//поясной блок
			var blockWaist = Math.round(((+perimetrTypeFirst - 3.2)/0.4) * (+floorCount.val()));
			$('#count-blockWaist').html(blockWaist);
			var blockWaistMetr = +(blockWaist * 0.014).toFixed(2);
			$('#metres-blockWaist').html(blockWaistMetr);
			$('#total-blockWaist').html(+$('#price-blockWaist').text() * blockWaist);
			if(blockWaistMetr > 0.45 && blockWaistMetr <= 10.44) {
				$('#sale-blockWaist').html('1%');
			}
			else if(blockWaistMetr >= 10.45 && blockWaistMetr < 20.45) {
				$('#sale-blockWaist').html('2%');
			}
			else if(blockWaistMetr >= 20.45 && blockWaistMetr < 30.44)	{
				$('#sale-blockWaist').html('3%');
			}
			else if(blockWaistMetr >= 30.45 && blockWaistMetr < 40.44)	{
				$('#sale-blockWaist').html('4%');
			}
			else if(blockWaistMetr >= 40.45)	{
				$('#sale-blockWaist').html('5%');
			}
			else {
				$('#sale-blockWaist').html('0');
			}
			console.log("блок поясной: " +  blockWaist);
			console.log(blockWaistMetr);

			//блок рядовой
			var blockPrivate = Math.round(((perimetrTypeFirst - 3.2) / 0.4 * ((floorHeightFirst + floorHeightSecond + floorHeightThird) / 0.2)) - blockWaist);
			console.log("блок рядовой: " + blockPrivate);


			//блок половинчатый
			var blockHalf = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2);
			$('#count-blockHalf').html(blockHalf);
			var blockHalfMetr = +(blockHalf * 0.012).toFixed(2)
			$('#metres-blockHalf').html(blockHalfMetr);
			$('#total-blockHalf').html(+$('#price-blockHalf').text() * blockHalf);
			if( blockHalfMetr > 0.45 &&  blockHalfMetr <= 10.44) {
				$('#sale-blockHalf').html('1%');
			}
			else if( blockHalfMetr >= 10.45 &&  blockHalfMetr < 20.45) {
				$('#sale-blockHalf').html('2%');
			}
			else if( blockHalfMetr >= 20.45 &&  blockHalfMetr < 30.44)	{
				$('#sale-blockHalf').html('3%');
			}
			else if( blockHalfMetr >= 30.45 &&  blockHalfMetr < 40.44)	{
				$('#sale-blockHalf').html('4%');
			}
			else if( blockHalfMetr >= 40.45)	{
				$('#sale-blockHalf').html('5%');
			}
			else {
				$('#sale-blockHalf').html('0');
			}
			console.log("блок половинчатый: " + blockHalf);

			//двери
			var doors =  Math.round((doorLenght + 0.2) * doorHeight * 12.5 * doorCount);
			console.log("двери: " + doors);

			//окна
			var windows =  Math.round((windowLenght + 0.2) * windowHeight * 12.5 * windowCount);
			console.log("окна: " + windows);

			//рядовой
			blockPrivate = Math.round((blockPrivate - doors - windows));
			console.log("блок рядовой без дверей и окон: " + blockPrivate);

			if(roofChecked == 'roof-1') {
				//площадь треугольника крыши
				var treygArea = 0.5 * roofHeight * roofLenght;
				blockPrivate = Math.round	(blockPrivate + (treygArea*2)*12.5);
				console.log("блок рядовой с крышей: " + blockPrivate);
				$('#count-private').html(blockPrivate);
				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2)
				$('#metres-private').html(blockPrivateMetr);
				$('#total-private').html(+$('#price-private').text() * blockPrivate);
				if(blockPrivateMetr > 0.45 && blockPrivateMetr <= 10.44) {
					$('#saleprivate').html('1%');
				}
				else if(blockPrivateMetr >= 10.45 && blockPrivateMetr < 20.45) {
					$('#saleprivate').html('2%');
				}
				else if(blockPrivateMetr >= 20.45 && blockPrivateMetr < 30.44)	{
					$('#saleprivate').html('3%');
				}
				else if(blockPrivateMetr >= 30.45 && blockPrivateMetr < 40.44)	{
					$('#saleprivate').html('4%');
				}
				else if(blockPrivateMetr >= 40.45)	{
					$('#saleprivate').html('5%');
				}
				else {
					$('#saleprivate').html('0');
				}
			}
			else if (roofChecked == 'roof-2') {
				blockPrivate = blockPrivate;
				$('#count-private').html(blockPrivate);
				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2);
				$('#metres-private').html(blockPrivateMetr);
				$('#total-private').html(+$('#price-private').text() * blockPrivate);
				if(blockPrivateMetr > 0.45 && blockPrivateMetr <= 10.44) {
					$('#saleprivate').html('1%');
				}
				else if(blockPrivateMetr >= 10.45 && blockPrivateMetr < 20.45) {
					$('#saleprivate').html('2%');
				}
				else if(blockPrivateMetr >= 20.45 && blockPrivateMetr < 30.44)	{
					$('#saleprivate').html('3%');
				}
				else if(blockPrivateMetr >= 30.45 && blockPrivateMetr < 40.44)	{
					$('#saleprivate').html('4%');
				}
				else if(blockPrivateMetr >= 40.45)	{
					$('#saleprivate').html('5%');
				}
				else {
					$('#saleprivate').html('0');
				}
				console.log("блок рядовой без крыши: " + blockPrivate);
				$('#count-private').html(blockPrivate);
			}

			var totalCountBlocks = blockAngular + blockWaist + blockPrivate + blockHalf;
			console.log("общее количество блоков" + totalCountBlocks);

			var totalMetres = +((+(blockAngular * 0.012).toFixed(2)) + (+(blockWaist * 0.012).toFixed(2)) + (+(blockPrivate * 0.024).toFixed(2)) +(+(blockHalf * 0.012).toFixed(2))).toFixed(2);
			console.log("общее количество метров3" + totalMetres);
			$('#total-counts').html(totalCountBlocks);
			$('#total-metres').html(totalMetres);

			var totalPriceNoSale = (+($('#price-blockAngular').text() * blockAngular)) + (+$('#price-blockWaist').text() * blockWaist) + (+$('#price-blockHalf').text() * blockHalf) + (+$('#price-private').text() * blockPrivate);
			$('#total-price-no-sale').html(totalPriceNoSale);
			
			
			
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

			var doors = Math.round((doorLenght + 0.2) * doorHeight * 12.5 * doorCount);
			console.log("двери: " + doors);
			//окна
			var windows = Math.round((windowLenght + 0.2) * windowHeight * 12.5 * windowCount);
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