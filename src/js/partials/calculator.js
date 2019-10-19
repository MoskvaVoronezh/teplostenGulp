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
			absouluteFloor3.css('display', 'none');
			typeSecondThirdFloor.css('display', 'none');
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

		var one = 1;
		var two = 2;
		var three = 3; 
		var four = 4;
		var five = 5;
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

		var windowCount2 = +$('.count-window-2').val();
		var windowHeight2 = +$('.height-window-2').val();
		var windowLenght2 = +$('.lenght-window-2').val();

		var windowCount3 = +$('.count-window-3').val();
		var windowHeight3 = +$('.height-window-3').val();
		var windowLenght3 = +$('.lenght-window-3').val();

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

			//---------------УГЛОВОЙ БЛОК -------------------------------------
			//угловой блок
			var blockAngular = Math.round(((floorHeightFirst + floorHeightSecond + floorHeightThird)/0.2) * 4);
			$('#count-blockAngular').html(blockAngular);
			//расчет метров
			var blockAngularMetr = +((blockAngular * 0.03).toFixed(2));
			//запись метров в таблицу
			$('#metres-blockAngular').html(blockAngularMetr);
			//расчет без скидки
			var priceBlockAngular = +(+$('#price-blockAngular').text() * blockAngular)
			//запись в прайс	
			$('#total-blockAngular').html( priceBlockAngular);
			// расчет скидки

			console.log("blockAngular: " + blockAngular);
			console.log("blockAngularMetr: " + blockAngularMetr);
			console.log("priceBlockAngular: " + priceBlockAngular); 
			
			//---------------УГЛОВОЙ БЛОК ЗАКОНЧИЛСЯ -------------------------------------

			//периметр
			perimetrTypeFirst = (lenght + width) * 2;

			//-------БЛОК ПОЯСНОЙ --------------------------------------------
			//поясной блок
			var blockWaist = Math.round(((+perimetrTypeFirst - 3.2)/0.4) * (+floorCount.val()));
			$('#count-blockWaist').html(blockWaist);
			var blockWaistMetr = +(blockWaist * 0.014).toFixed(2);
			$('#metres-blockWaist').html(blockWaistMetr);
			//расчет без скидки
			var priceBlockWaist = +(+$('#price-blockWaist').text() * blockWaist)
			$('#total-blockWaist').html(priceBlockWaist);

			console.log("блок поясной: " +  blockWaist);
			console.log("blockWaistMetr: " + blockWaistMetr);
			console.log("priceBlockWaist: " + priceBlockWaist);
			
			//-------БЛОК ПОЯСНОЙ Закончился --------------------------------------------


			//------БЛОК РЯДОВОЙ ----------------------------------------------------------
			
			//блок рядовой
			var blockPrivate = Math.round(((perimetrTypeFirst - 3.2) / 0.4 * ((floorHeightFirst + floorHeightSecond + floorHeightThird) / 0.2)) - blockWaist);
			console.log("блок рядовой: " + blockPrivate);

			//двери
			var doors =  Math.round((doorLenght + 0.2) * doorHeight * 12.5 * doorCount);
			console.log("двери: " + doors);
			//окна
			var window1 =  Math.round((windowLenght + 0.2) * windowHeight * 12.5 * windowCount);
			console.log("окно 1: " + window1);
			var window2 = Math.round((windowLenght2 + 0.2) * windowHeight2 * 12.5 * windowCount2);
			console.log("окно 2: " + window2);
			var window3 = Math.round((windowLenght3 + 0.2) * windowHeight3 * 12.5 * windowCount3);
			console.log("окно 3: " + window3);
			//рядовой
			blockPrivate = Math.round((blockPrivate - doors - window1 - window2 - window3));
			console.log("блок рядовой без дверей и окон: " + blockPrivate);
			//площадь треугольника крыши
			var treygArea = 0.5 * roofHeight * roofLenght;

			if(roofChecked == 'roof-1') {

				blockPrivate = Math.round(blockPrivate + (treygArea*2)*12.5);
				$('#count-private').html(blockPrivate);
				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2);
				$('#metres-private').html(blockPrivateMetr);
				var priceBlockPrivate = +$('#price-private').text() * blockPrivate;
				$('#total-private').html(priceBlockPrivate);

				console.log("метры для рядового: BlockPrivateMetr " + blockPrivateMetr);
				console.log("блок рядовой с крышей: BlockPrivate " + blockPrivate);
				console.log("priceBlockPrivate: " + priceBlockPrivate);
				
			}
			else if (roofChecked == 'roof-2') {
				blockPrivate = blockPrivate;
				$('#count-private').html(blockPrivate);
				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2);
				$('#metres-private').html(blockPrivateMetr);
				var priceBlockPrivate = +$('#price-private').text() * blockPrivate;
				$('#total-private').html(priceBlockPrivate);

				console.log("метры для рядового: BlockPrivateMetr " + blockPrivateMetr);
				console.log("блок рядовой без крыши: BlockPrivate " + blockPrivate);
				console.log("priceBlockPrivate: " + priceBlockPrivate);
			}

			//------БЛОК РЯДОВОЙ ЗАКОНЧИЛСЯ	----------------------------------------------------------

			//------------ПОЛОВИНЧАТЫЙ БЛОК ---------------------------------------
			//блок половинчатый
			var blockHalf = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2);
			$('#count-blockHalf').html(blockHalf);
			var blockHalfMetr = +(blockHalf * 0.012).toFixed(2)
			$('#metres-blockHalf').html(blockHalfMetr);

			var priceBlockHalf = +(+$('#price-blockHalf').text() * blockHalf);
			$('#total-blockHalf').html(priceBlockHalf);
			console.log("блок половинчатый: " + blockHalf);

			//------------ПОЛОВИНЧАТЫЙ БЛОК Закончился---------------------------------------

			var totalCountBlocks = blockAngular + blockWaist + blockPrivate + blockHalf;
			console.log("общее количество блоков" + totalCountBlocks);

			var totalMetres = +((+(blockAngular * 0.03).toFixed(2)) + (+(blockWaist * 0.014).toFixed(2)) + (+(blockPrivate * 0.024).toFixed(2)) +(+(blockHalf * 0.012).toFixed(2))).toFixed(2);
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
//222222222222222222222222222222222222222222222222222222222222222222222222222222222222222


		else if (houseType == 'type-2') {
			//угловой наружный блок
			var blockAngularTypeSecond = Math.round(((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond) / 0.2) * 5);
			console.log("блок угловой: " + blockAngularTypeSecond);
			$('#count-blockAngular').html(blockAngularTypeSecond);
			//расчет метров
			var blockAngularTypeSecondMetr = +((blockAngularTypeSecond * 0.03).toFixed(2));
			console.log("blockAngularMetr: " + blockAngularTypeSecondMetr);
			$('#metres-blockAngular').html(blockAngularTypeSecondMetr);

			var priceAngularTypeSecond = +(+$('#price-blockAngular').text() * blockAngularTypeSecond)
			//запись в прайс
			$('#total-blockAngular').html(priceAngularTypeSecond);

			//угловой внутренний блок
			var blockInteriorTypeSecond = Math.round((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond)/0.2);
			$('#count-blockInterior').html(blockInteriorTypeSecond);
			var blockInteriorTypeSecondMetr = +((blockInteriorTypeSecond * 0.03).toFixed(2));
			$('#metres-blockInterior').html(blockInteriorTypeSecondMetr);
			var priceBlockInteriorTypeSecond = +(+$('#price-blockInterior').text() * blockInteriorTypeSecond);
			$('#total-blockInterior').html(priceBlockInteriorTypeSecond);

			var perimetrTypeSecond = (widthFirstSecondType + widthSecondSecondType + lenghtFirstSecondType + lenghtSecondSecondType) * 2;

			//поясной блок
			var blockWaistTypeSecond = Math.round(((+perimetrTypeSecond - 4.2) / 0.4) * (+floorCount.val()));
			console.log("блок поясной: " + blockWaistTypeSecond);

			$('#count-blockWaist').html(blockWaistTypeSecond);
			var blockWaistTypeSecondMetr = +(blockWaistTypeSecond * 0.014).toFixed(2);
			$('#metres-blockWaist').html(blockWaistTypeSecondMetr);
			var priceBlockWaistTypeSecond = +(+$('#price-blockWaist').text() * blockWaistTypeSecond)
			$('#total-blockWaist').html(priceBlockWaistTypeSecond );

			//блок половинчатый
			var blockHalfTypeSecond = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2);
			console.log("блок половинчатый: " + blockHalfTypeSecond);
			$('#count-blockHalf').html(blockHalfTypeSecond);
			var blockHalfTypeSecondfMetr = +(blockHalfTypeSecond * 0.012).toFixed(2)
			$('#metres-blockHalf').html(blockHalfTypeSecondfMetr);

			var priceBlockHalfTypeSecond = +(+$('#price-blockHalf').text() * blockHalfTypeSecond);
			$('#total-blockHalf').html(priceBlockHalfTypeSecond);

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


			if (roofChecked == 'roof-1') {
				blockInteriorTypeSecond = blockInteriorTypeSecond + roofHeight / 0.2;
				blockAngularTypeSecond = blockAngularTypeSecond + roofHeight / 0.2;

				var treygArea = 0.5 * roofHeight * roofLenght;
				blockPrivateTypeSecond = Math.round(blockPrivateTypeSecond + (treygArea * 2) * 12.5);
				$('#count-private').html(blockPrivateTypeSecond);

				var blockPrivateTypeSecondMetr = (blockPrivateTypeSecond * 0.024).toFixed(2);
				$('#metres-private').html(blockPrivateTypeSecondMetr);

				var priceBlockPrivateTypeSecond = +$('#price-private').text() * blockPrivateTypeSecond;
				$('#total-private').html(priceBlockPrivateTypeSecond);

				console.log("блок рядовой с крышей: " + blockPrivateTypeSecond);
				console.log("угловой с учетом крыши: " + blockAngularTypeSecond);
				console.log("внутренний с учетом крыши: " + blockInteriorTypeSecond);
			}
			else if (roofChecked == 'roof-2') {
				blockInteriorTypeSecond = blockInteriorTypeSecond;
				blockAngularTypeSecond = blockAngularTypeSecond;

				$('#count-private').html(blockPrivateTypeSecond);

				var blockPrivateTypeSecondMetr = (blockPrivateTypeSecond * 0.024).toFixed(2);
				$('#metres-private').html(blockPrivateTypeSecondMetr);

				var priceBlockPrivateTypeSecond = +$('#price-private').text() * blockPrivateTypeSecond;
				$('#total-private').html(priceBlockPrivateTypeSecond);

				console.log("угловой без крыши: " + blockAngularTypeSecond);
				console.log("внутренний без крыши: " + blockInteriorTypeSecond);

			}

			var totalCountBlockstotalMetresTypeSecond = blockInteriorTypeSecond + blockAngularTypeSecond + blockWaistTypeSecond + blockPrivateTypeSecond + blockHalfTypeSecond;
			debugger;
			$('#total-counts').html(totalCountBlockstotalMetresTypeSecond);
			console.log("общее количество блоков" + totalCountBlockstotalMetresTypeSecond);

			var totalMetresTypeSecond = +((+(blockAngularTypeSecond * 0.03).toFixed(2)) + (+(blockWaistTypeSecond * 0.014).toFixed(2)) + (+(blockPrivateTypeSecond * 0.024).toFixed(2)) + (+(blockHalfTypeSecond * 0.012).toFixed(2)) + (+(blockInteriorTypeSecond * 0.03).toFixed(2))).toFixed(2);
			console.log("общее количество метров3" + totalMetresTypeSecond);

			$('#total-metres').html(totalMetresTypeSecond);

			var totalPriceTypeSecondNoSale = (+($('#price-blockAngular').text() * blockAngularTypeSecond)) + (+$('#price-blockWaist').text() * blockWaistTypeSecond) + (+$('#price-blockHalf').text() * blockHalfTypeSecond) + (+$('#price-private').text() * blockPrivateTypeSecond) + (+$('#price-blockInterior').text() * blockInteriorTypeSecond);
			$('#total-price-no-sale').html(totalPriceTypeSecondNoSale);

			var totalSalePriceTypeSecond = priceAngularTypeSecond + priceBlockHalfTypeSecond + priceBlockPrivateTypeSecond + priceBlockWaistTypeSecond + priceBlockInteriorTypeSecond;
			$('#total-not-sale-price').html(totalSalePriceTypeSecond);

			var totalPriceWithSalesTypeSecond = +Math.floor(blockPrivateTypeSecondSale + blockAngularTypeSecondSale + blockHalfTypeSecondSale + blockWaistTypeSecondSale + blockInteriorTypeSecondSale);
			$('#total-sale-price').html(totalPriceWithSalesTypeSecond);
			$('#total-all').html(totalPriceWithSalesTypeSecond);

			//клей и общая стоимость клея
			var countGlue = totalMetresTypeSecond * 2;
			$('#count-glue').html(countGlue);
			var totalPriceGlue = countGlue * (+$('#price-glue').html());
			$('#total-price-glue').html(Math.floor(totalPriceGlue));

			var countFoam = totalMetresTypeSecond * 2;
			$('#count-foam').html(countFoam);
			var totalPriceFoam = countFoam * (+$('#price-foam').html());
			$('#total-price-foam').html(Math.floor(totalPriceFoam));

			var countPallet = Math.ceil(blockPrivateTypeSecond / 54 + blockHalfTypeSecond / 90 + blockAngularTypeSecond / 30 + blockWaistTypeSecond / 72 + countGlue  / 50 + blockInteriorTypeSecond / 30);
			var totalPricePallet = countPallet * (+$('#price-pallet').html());
			$('#total-price-pallet').html(Math.floor(totalPricePallet));

			var totalCountAll = totalCountBlockstotalMetresTypeSecond + countGlue + countFoam + countPallet;
			$('#count-all').html(Math.floor(totalCountAll));

			var finalPrice = totalPriceWithSalesTypeSecond + totalPriceGlue + totalPriceFoam + countPallet;
			$('#final-price').html(finalPrice);

		}

	});
});