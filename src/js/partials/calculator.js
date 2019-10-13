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

			//расчет метров
			var blockAngularMetr = +((blockAngular * 0.03).toFixed(2));
			console.log("blockAngularMetr: " + blockAngularMetr);
			//запись метров в таблицу
			$('#metres-blockAngular').html(blockAngularMetr);
			//расчет без скидки
			var priceBlockAngular = +(+$('#price-blockAngular').text() * blockAngular)
			//запись в прайс
			$('#total-blockAngular').html( priceBlockAngular);
			// расчет скидки

			if(+blockAngularMetr > 0.45 && +blockAngularMetr <= 10.44) {
				var one = 1;
				$('#sale-blockAngular').html(one + '%');
				var blockAngularWithSale = (+$('#price-blockAngular').text() * one/100 * blockAngular);
				
				blockAngularSale = priceBlockAngular - blockAngularWithSale;
				$('#summ-sale-blockAngular').html(blockAngularSale);
				//скидка останется, вдруг потребуют изменить поле
				// $('#with-sale-blockAngular').html(blockAngularWithSale);
				$('#with-sale-blockAngular').html(blockAngularSale);
			}
			else if(+blockAngularMetr >= 10.45 && +blockAngularMetr < 20.45) {
				var two = 2;
				var blockAngularWithSale = (+$('#price-blockAngular').text() * two/100 * blockAngular);
				$('#sale-blockAngular').html(two + '%');
				
				blockAngularSale = priceBlockAngular - blockAngularWithSale;
				$('#summ-sale-blockAngular').html(blockAngularSale);
				// $('#with-sale-blockAngular').html(blockAngularWithSale);
				$('#with-sale-blockAngular').html(blockAngularSale);
			}
			else if(+blockAngularMetr >= 20.45 && +blockAngularMetr < 30.44)	{
				var three = 3;
				var blockAngularWithSale = (+$('#price-blockAngular').text() * three/100 * blockAngular);
				$('#sale-blockAngular').html(three + '%');
				
				blockAngularSale = priceBlockAngular - blockAngularWithSale;
				$('#summ-sale-blockAngular').html(blockAngularSale);
				// $('#with-sale-blockAngular').html(blockAngularWithSale);
				$('#with-sale-blockAngular').html(blockAngularSale);
			}
			else if(+blockAngularMetr >= 30.45 && +blockAngularMetr < 40.44)	{
				var blockAngularWithSale = (+$('#price-blockAngular').text() * four/100 * blockAngular);
				var four = 4;
				$('#sale-blockAngular').html(four + '%');
				
				blockAngularSale = priceBlockAngular - blockAngularWithSale;
				$('#summ-sale-blockAngular').html(blockAngularSale);
				// $('#with-sale-blockAngular').html(blockAngularWithSale);
				$('#with-sale-blockAngular').html(blockAngularSale);
			}
			else if(+blockAngularMetr >= 40.45)	{
				var five = 5;
				var blockAngularWithSale = (+$('#price-blockAngular').text() * five/100 * blockAngular);
				$('#sale-blockAngular').html(five + '%');
				
				blockAngularSale = priceBlockAngular - blockAngularWithSale;
				$('#summ-sale-blockAngular').html(blockAngularSale);
				// $('#with-sale-blockAngular').html(blockAngularWithSale);
				$('#with-sale-blockAngular').html(blockAngularSale);
			}
			else {
				var zero = 0;
				$('#sale-blockAngular').html(zero);
			}

			console.log("блок угловой: " + blockAngular);
			console.log(blockAngularMetr);

			//---------------УГЛОВОЙ БЛОК ЗАКОНЧИЛСЯ -------------------------------------


			//периметр
			perimetrTypeFirst = (lenght + width) * 2;
			//поясной блок
			var blockWaist = Math.round(((+perimetrTypeFirst - 3.2)/0.4) * (+floorCount.val()));
			$('#count-blockWaist').html(blockWaist);
			var blockWaistMetr = +(blockWaist * 0.014).toFixed(2);
			$('#metres-blockWaist').html(blockWaistMetr);

			//расчет без скидки
			var priceBlockWaist = +(+$('#price-blockWaist').text() * blockWaist)
			$('#total-blockWaist').html(priceBlockWaist);

			if(+blockWaistMetr > 0.45 && +blockWaistMetr <= 10.44) {
				var one = 1;
				$('#sale-blockWaist').html(one + '%');
				var blockWaistWithSale = (+$('#price-blockWaist').text() * one/100 * blockWaist);
				

				blockWaistSale = priceBlockWaist - blockWaistWithSale;
				$('#summ-sale-blockWaist').html(blockWaistSale);
				
				// $('#with-sale-blockWaist').html(blockWaistWithSale);
				$('#with-sale-blockWaist').html(blockWaistSale);
			}
			else if(+blockWaistMetr >= 10.45 && +blockWaistMetr < 20.45) {
				var two = 2;
				$('#sale-blockWaist').html(two + '%');
				var blockWaistWithSale = (+$('#price-blockWaist').text() * two/100 * blockWaist);
			

				blockWaistSale = priceBlockWaist - blockWaistWithSale;
				$('#summ-sale-blockWaist').html(blockWaistSale);
				// $('#with-sale-blockWaist').html(blockWaistWithSale);
				$('#with-sale-blockWaist').html(blockWaistSale);
			}
			else if(+blockWaistMetr >= 20.45 && +blockWaistMetr < 30.44)	{
				var three = 3;
				$('#sale-blockWaist').html(three + '%');
				var blockWaistWithSale = (+$('#price-blockWaist').text() * three/100 * blockWaist);
				

				blockWaistSale = priceBlockWaist - blockWaistWithSale;
				$('#summ-sale-blockWaist').html(blockWaistSale);
				// $('#with-sale-blockWaist').html(blockWaistWithSale);
				$('#with-sale-blockWaist').html(blockWaistSale);
			}
			else if(+blockWaistMetr >= 30.45 && +blockWaistMetr < 40.44)	{
				var four = 4;
				$('#sale-blockWaist').html(four + '%');
				var blockWaistWithSale = (+$('#price-blockWaist').text() * four/100 * blockWaist);
			
				blockWaistSale = priceBlockWaist - blockWaistWithSale;
				$('#summ-sale-blockWaist').html(blockWaistSale);
				// $('#with-sale-blockWaist').html(blockWaistWithSale);
				$('#with-sale-blockWaist').html(blockWaistSale);

			}
			else if(+blockWaistMetr >= 40.45)	{
				var five = 5;
				$('#sale-blockWaist').html(five + '%');
				var blockWaistWithSale = (+$('#price-blockWaist').text() * five/100 * blockWaist);
				

				blockWaistSale = priceBlockWaist - blockWaistWithSale;
				$('#summ-sale-blockWaist').html(blockWaistSale);
				// $('#with-sale-blockWaist').html(blockWaistWithSale);
				$('#with-sale-blockWaist').html(blockWaistSale);
			}
			else {
				var zero = 0;
				$('#sale-blockAngular').html(zero);
			}
			console.log("блок поясной: " +  blockWaist);
			console.log(blockWaistMetr);

			//-------БЛОК ПОЯСНОЙ --------------------------------------------


			//блок половинчатый
			var blockHalf = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2);
			$('#count-blockHalf').html(blockHalf);
			var blockHalfMetr = +(blockHalf * 0.012).toFixed(2)
			$('#metres-blockHalf').html(blockHalfMetr);

			var priceBlockHalf = +(+$('#price-blockHalf').text() * blockHalf);
			$('#total-blockHalf').html(priceBlockHalf);
			if(+blockHalfMetr > 0.45 && +blockHalfMetr <= 10.44) {
				var one = 1;
				$('#sale-blockHalf').html(one + '%');
				var blockHalfWithSale = (+$('#price-blockHalf').text() * one/100 * blockHalf);
				
				blockHalfSale = priceBlockHalf - blockHalfWithSale;
				$('#summ-sale-blockHalf').html(blockHalfSale);
				// $('#with-sale-blockHalf').html(blockHalfWithSale);
				$('#with-sale-blockHalf').html(blockHalfSale);
				
			}
			else if(+blockHalfMetr >= 10.45 && +blockHalfMetr < 20.45) {
				var two = 2;
				$('#sale-blockHalf').html( two + '%');
				var blockHalfWithSale = (+$('#price-blockHalf').text() * two/100 * blockHalf);
				
				blockHalfSale = priceBlockHalf - blockHalfWithSale;
				$('#summ-sale-blockHalf').html(blockHalfSale);
				// $('#with-sale-blockHalf').html(blockHalfWithSale);
				$('#with-sale-blockHalf').html(blockHalfSale);

			}
			else if(+blockHalfMetr >= 20.45 && +blockHalfMetr < 30.44)	{
				var three = 3; 
				$('#sale-blockHalf').html(three + '%');
				var blockHalfWithSale = (+$('#price-blockHalf').text() * three/100 * blockHalf);
				

				blockHalfSale = priceBlockHalf - blockHalfWithSale;
				$('#summ-sale-blockHalf').html(blockHalfSale);
				// $('#with-sale-blockHalf').html(blockHalfWithSale);
				$('#with-sale-blockHalf').html(blockHalfSale);
			}
			else if(+blockHalfMetr >= 30.45 &&  +blockHalfMetr < 40.44)	{
				var four = 4;
				$('#sale-blockHalf').html(four + '%');
				var blockHalfWithSale = (+$('#price-blockHalf').text() * four/100 * blockHalf);
				
				blockHalfSale = priceBlockHalf - blockHalfWithSale;
				$('#summ-sale-blockHalf').html(blockHalfSale);
				// $('#with-sale-blockHalf').html(blockHalfWithSale);
				$('#with-sale-blockHalf').html(blockHalfSale);

			}
			else if(+blockHalfMetr >= 40.45)	{
				var five = 5;
				$('#sale-blockHalf').html( five + '%');
				var blockHalfWithSale = (+$('#price-blockHalf').text() * five/100 * blockHalf);
				

				blockHalfSale = priceBlockHalf - blockHalfWithSale;
				$('#summ-sale-blockHalf').html(blockHalfSale);
				// $('#with-sale-blockHalf').html(blockHalfWithSale);
				$('#with-sale-blockHalf').html(blockHalfSale);
			}
			else {
				$('#sale-blockHalf').html('0');
			}
			console.log("блок половинчатый: " + blockHalf);


			//------------ПОЛОВИНЧАТЫЙ БЛОК ---------------------------------------


			//блок рядовой
			var blockPrivate = Math.round(((perimetrTypeFirst - 3.2) / 0.4 * ((floorHeightFirst + floorHeightSecond + floorHeightThird) / 0.2)) - blockWaist);
			console.log("блок рядовой: " + blockPrivate);

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
				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2);
				console.log("метры для рядового: " + blockPrivateMetr);
				
				$('#metres-private').html(blockPrivateMetr);
				var priceBlockPrivate = +$('#price-private').text() * blockPrivate;
				$('#total-private').html(priceBlockPrivate);
				if(blockPrivateMetr > 0.45 && blockPrivateMetr <= 10.44) {
					var one = 1;
					$('#sale-private').html(one + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * one/100 * blockPrivate);
					
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 10.45 && +blockPrivateMetr < 20.45) {
					var two = 2;
					$('#sale-private').html(two + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * two/100 * blockPrivate);
				
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 20.45 && +blockPrivateMetr < 30.44)	{
					var three = 3;
					$('#sale-private').html(three + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * three/100 * blockPrivate);
				
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 30.45 && +blockPrivateMetr < 40.44)	{
					var four = 4;
					$('#sale-private').html(four + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * four/100 * blockPrivate);
					
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 40.45)	{
					var five = 5;
					$('#sale-private').html(five + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * five/100 * blockPrivate);
					
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else {
					$('#saleprivate').html(0);
				}
			}
			else if (roofChecked == 'roof-2') {
				blockPrivate = blockPrivate;
				$('#count-private').html(blockPrivate);
				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2);
				$('#metres-private').html(blockPrivateMetr);
				console.log("скидка 1 блока: " + blockPrivateMetr);
				$('#total-private').html(+$('#price-private').text() * blockPrivate);
				if(+blockPrivateMetr > 0.45 && +blockPrivateMetr <= 10.44) {
					var one = 1;
					$('#sale-private').html(one + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * one/100 * blockPrivate);
					
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 10.45 && +blockPrivateMetr < 20.45) {
					var two = 2;
					$('#sale-private').html(two + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * two/100 * blockPrivate);
					
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 20.45 && +blockPrivateMetr < 30.44)	{
					var three = 3;
					$('#sale-private').html(three + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * three/100 * blockPrivate);
				
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 30.45 && +blockPrivateMetr < 40.44)	{
					var four = 4;
					$('#sale-private').html(four + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * four/100 * blockPrivate);
				
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else if(+blockPrivateMetr >= 40.45)	{
					var five = 5;
					$('#sale-private').html(five + '%');
					var blockPrivateWithSale = (+$('#price-private').text() * five/100 * blockPrivate);
				
					blockPrivateSale = priceBlockPrivate - blockPrivateWithSale;
					$('#summ-sale-private').html(blockPrivateSale);
					// $('#with-sale-private').html(blockPrivateWithSale);
					$('#with-sale-private').html(blockPrivateSale);
				}
				else {
					$('#saleprivate').html(0);
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
			
			var totalSalePrice = priceBlockAngular + priceBlockHalf + priceBlockPrivate + priceBlockWaist; 
			$('#total-not-sale-price').html(totalSalePrice);
			
			var totalPriceWithSales = +Math.floor(blockPrivateSale + blockAngularSale + blockHalfSale + blockWaistSale);
			$('#total-sale-price').html(totalPriceWithSales);
			$('#total-all').html(totalPriceWithSales);

			//клей и общая стоимость клея
			var countGlue = totalMetres * 2;
			$('#count-glue').html(countGlue);
			var totalPriceGlue = countGlue * (+$('#price-glue').html());
			$('#total-price-glue').html(Math.floor(totalPriceGlue));

			var countFoam = totalMetres * 2;
			$('#count-foam').html(countFoam);
			var totalPriceFoam = countFoam * (+$('#price-foam').html());
			$('#total-price-foam').html(Math.floor(totalPriceFoam));

			var countPallet = Math.ceil(blockPrivate / 54 + blockHalf / 90 + blockAngular / 30 + blockWaist / 72 + countGlue / 50);
			var totalPricePallet = countPallet * (+$('#price-pallet').html());
			$('#total-price-pallet').html(Math.floor(totalPricePallet));

			var totalCountAll = totalCountBlocks + countGlue + countFoam + countPallet;
			$('#count-all').html(Math.floor(totalCountAll));

			var finalPrice = totalPriceWithSales + totalPriceGlue + totalPriceFoam + countPallet;
			$('#final-price').html(finalPrice);
			
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