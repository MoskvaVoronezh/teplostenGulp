// $(document).ready(function () {

// 	// var absouluteFloor1 = $(".absoulute-floor-1");
// 	var absouluteFloor2 = $(".absoulute-floor-2");
// 	var absouluteFloor3 = $(".absoulute-floor-3");
// 	// var typeSecondFirstFloor = $(".first-floor-type-2");
// 	var typeSecondSecondFloor = $(".second-floor-type-2");
// 	var typeSecondThirdFloor = $(".fhird-floor-type-2");
// 	var floorCount = $(".floor-count");
// 	//от количества этажей появляются поля
// 	floorCount.on('change', function() {
// 		var result = $(this).val();
// 		if(result == 1) {
// 			absouluteFloor2.css('display', 'none');
// 			absouluteFloor3.css('display', 'none');
// 			typeSecondSecondFloor.css('display', 'none');
// 			typeSecondThirdFloor.css('display', 'none');
// 		}
// 		else if(result == 2) {
// 			absouluteFloor2.css('display', 'block');
// 			typeSecondSecondFloor.css('display', 'block');
// 			absouluteFloor3.css('display', 'none');
// 			typeSecondThirdFloor.css('display', 'none');
// 		}
// 		else if(result == 3) {
// 			absouluteFloor2.css('display', 'block');
// 			absouluteFloor3.css('display', 'block');
// 			typeSecondSecondFloor.css('display', 'block');
// 			typeSecondThirdFloor.css('display', 'block');
// 		}
// 	});
// 	//обработчик клика расчета
// 	$(".calculator_btn").on("click", function (){

// 		var one = 1;
// 		var two = 2;
// 		var three = 3; 
// 		var four = 4;
// 		var five = 5;
// 		var houseType = $('.type:checked').val();
// 		var floorHeightFirst = +($('.floor-height-first').val());
// 		var floorHeightSecond = +($('.floor-height_second').val());
// 		var floorHeightThird = +($('.floor-height_third').val());
// 		var lenght = +($('.input-3').val());
// 		var width = +($('.input-2').val());
// 		var doorHeight = +$('.height-door').val();
// 		var doorLenght = +$('.lenght-door').val();
// 		var doorCount = +$('.count-door').val();

// 		var windowCount = +$('.count-window').val();
// 		var windowHeight = +$('.height-window').val();
// 		var windowLenght = +$('.lenght-window').val();

// 		var windowCount2 = +$('.count-window-2').val();
// 		var windowHeight2 = +$('.height-window-2').val();
// 		var windowLenght2 = +$('.lenght-window-2').val();

// 		var windowCount3 = +$('.count-window-3').val();
// 		var windowHeight3 = +$('.height-window-3').val();
// 		var windowLenght3 = +$('.lenght-window-3').val();

// 		var roofChecked = $('.roof:checked').val();
// 		var roofHeight = +$('.roof-height').val();
// 		var roofLenght = +$('.roof-lenght').val();F

// 		var floorHeightFirstTypeSecond = +$('.type-second-first-floor').val();
// 		var floorHeightSecondTypeSecond = +$('.type-second-second-floor').val(); 
// 		var floorHeightThirdTypeSecond = +$('.type-second-fhird-floor').val();
// 		var widthFirstSecondType = +$('.width-type-second-1').val();
// 		var widthSecondSecondType = +$('.width-type-second-2').val();
// 		var lenghtFirstSecondType = +$('.lenght-type-2-first').val();
// 		var lenghtSecondSecondType = +$('.lenght-type-2-second').val();

// 		if(houseType == 'type-1') {

// 			$('._block-interior').text('-');
// 			// console.log(roofChecked);

// 			//---------------УГЛОВОЙ БЛОК -------------------------------------
// 			//угловой блок
// 			var blockAngular = Math.round(((floorHeightFirst + floorHeightSecond + floorHeightThird)/0.2) * 4);
// 			$('#count-blockAngular').html(blockAngular);
// 			//расчет метров
// 			var blockAngularMetr = +((blockAngular * 0.03).toFixed(2));
// 			//запись метров в таблицу
// 			$('#metres-blockAngular').html(blockAngularMetr);
// 			//расчет без скидки
// 			var priceBlockAngular = +(+$('#price-blockAngular').text() * blockAngular)
// 			//запись в прайс	
// 			$('#total-blockAngular').html( priceBlockAngular);
// 			// расчет скидки
// 			// console.log("blockAngular: " + blockAngular);
// 			// console.log("blockAngularMetr: " + blockAngularMetr);
// 			// console.log("priceBlockAngular: " + priceBlockAngular); 
			
// 			//---------------УГЛОВОЙ БЛОК ЗАКОНЧИЛСЯ -------------------------------------

// 			//периметр
// 			perimetrTypeFirst = (lenght + width) * 2;

// 			//-------БЛОК ПОЯСНОЙ --------------------------------------------
// 			//поясной блок
// 			var blockWaist = Math.round(((+perimetrTypeFirst - 3.2)/0.4) * (+floorCount.val()));
// 			$('#count-blockWaist').html(blockWaist);
// 			var blockWaistMetr = +(blockWaist * 0.014).toFixed(2);
// 			$('#metres-blockWaist').html(blockWaistMetr);
// 			//расчет без скидки
// 			var priceBlockWaist = +(+$('#price-blockWaist').text() * blockWaist)
// 			$('#total-blockWaist').html(priceBlockWaist);

// 			// console.log("блок поясной: " +  blockWaist);
// 			// console.log("blockWaistMetr: " + blockWaistMetr);
// 			// console.log("priceBlockWaist: " + priceBlockWaist);
			
// 			//-------БЛОК ПОЯСНОЙ Закончился --------------------------------------------


// 			//------БЛОК РЯДОВОЙ ----------------------------------------------------------
			
// 			//блок рядовой
// 			var blockPrivate = Math.round(((perimetrTypeFirst - 3.2) / 0.4 * ((floorHeightFirst + floorHeightSecond + floorHeightThird) / 0.2)) - blockWaist);
// 			// console.log("блок рядовой: " + blockPrivate);

// 			//двери
// 			var doors =  Math.round((doorLenght + 0.2) * doorHeight * 12.5 * doorCount);
// 			// console.log("двери: " + doors);
// 			//окна
// 			var window1 =  Math.round((windowLenght + 0.2) * windowHeight * 12.5 * windowCount);
// 			// console.log("окно 1: " + window1);
// 			var window2 = Math.round((windowLenght2 + 0.2) * windowHeight2 * 12.5 * windowCount2);
// 			// console.log("окно 2: " + window2);
// 			var window3 = Math.round((windowLenght3 + 0.2) * windowHeight3 * 12.5 * windowCount3);
// 			// console.log("окно 3: " + window3);
// 			//рядовой
// 			blockPrivate = Math.round((blockPrivate - doors - window1 - window2 - window3));
// 			// console.log("блок рядовой без дверей и окон: " + blockPrivate);
// 			//площадь треугольника крыши
// 			var treygArea = 0.5 * roofHeight * roofLenght;

// 			if(roofChecked == 'roof-1') {

// 				blockPrivate = Math.round(blockPrivate + (treygArea*2)*12.5);
// 				$('#count-private').html(blockPrivate);
// 				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2);
// 				$('#metres-private').html(blockPrivateMetr);
// 				var priceBlockPrivate = +$('#price-private').text() * blockPrivate;
// 				$('#total-private').html(priceBlockPrivate);

// 				// console.log("метры для рядового: BlockPrivateMetr " + blockPrivateMetr);
// 				// console.log("блок рядовой с крышей: BlockPrivate " + blockPrivate);
// 				// console.log("priceBlockPrivate: " + priceBlockPrivate);
				
// 			}
// 			else if (roofChecked == 'roof-2') {
// 				blockPrivate = blockPrivate;
// 				$('#count-private').html(blockPrivate);
// 				var blockPrivateMetr = (blockPrivate * 0.024).toFixed(2);
// 				$('#metres-private').html(blockPrivateMetr);
// 				var priceBlockPrivate = +$('#price-private').text() * blockPrivate;
// 				$('#total-private').html(priceBlockPrivate);

// 				// console.log("метры для рядового: BlockPrivateMetr " + blockPrivateMetr);
// 				// console.log("блок рядовой без крыши: BlockPrivate " + blockPrivate);
// 				// console.log("priceBlockPrivate: " + priceBlockPrivate);
// 			}

// 			//------БЛОК РЯДОВОЙ ЗАКОНЧИЛСЯ	----------------------------------------------------------

// 			//------------ПОЛОВИНЧАТЫЙ БЛОК ---------------------------------------
// 			//блок половинчатый
// 			var blockHalf = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2) + ((windowHeight2 * windowCount2) / 0.2) + ((windowHeight3 * windowCount3) / 0.2);
// 			$('#count-blockHalf').html(Math.floor(blockHalf));
// 			var blockHalfMetr = +(blockHalf * 0.012).toFixed(2)
// 			$('#metres-blockHalf').html(blockHalfMetr);

// 			var priceBlockHalf = +(+$('#price-blockHalf').text() * blockHalf);
// 			$('#total-blockHalf').html(Math.floor(priceBlockHalf));
// 			// console.log("блок половинчатый: " + blockHalf);

// 			//------------ПОЛОВИНЧАТЫЙ БЛОК Закончился---------------------------------------

// 			var totalCountBlocks = blockAngular + blockWaist + blockPrivate + blockHalf;
// 			console.log("общее количество блоков" + totalCountBlocks);
// 			// $('#total-counts').html(totalCountBlocks);

// 			var totalMetres = +((+(blockAngular * 0.03).toFixed(2)) + (+(blockWaist * 0.014).toFixed(2)) + (+(blockPrivate * 0.024).toFixed(2)) +(+(blockHalf * 0.012).toFixed(2))).toFixed(2);
// 			// console.log("общее количество метров: " + totalMetres);

// 			$('#total-metres').html(totalMetres);

// 			var totalPriceNoSale = priceBlockAngular + priceBlockWaist + priceBlockPrivate + priceBlockHalf;

// 			$('#total-not-sale-price').html(totalPriceNoSale);

// 			if(totalMetres > 0.45 && totalMetres < 10.44) {
// 				$('#sale-private').html(one + '%'); 
// 				$('#sale-blockHalf').html(one + '%');
// 				$('#sale-blockAngular').html(one + '%');
// 				$('#sale-blockWaist').html(one + '%');

// 				var BlockAngularWithSale = Math.floor(priceBlockAngular - priceBlockAngular * 0.01);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaist - priceBlockWaist * 0.01);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivate - priceBlockPrivate * 0.01);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalf - priceBlockHalf * 0.01);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.01);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.01);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.01);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.01);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);
// 			}
// 			else if (totalMetres >= 10.45 && totalMetres < 20.44) {
// 				$('#sale-private').html(two + '%');
// 				$('#sale-blockHalf').html(two + '%');
// 				$('#sale-blockAngular').html(two + '%');
// 				$('#sale-blockWaist').html(two + '%');

// 				var BlockAngularWithSale = Math.floor(priceBlockAngular - priceBlockAngular * 0.02);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaist - priceBlockWaist * 0.02);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivate - priceBlockPrivate * 0.02);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalf - priceBlockHalf * 0.02);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.02);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.02);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.02);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.02);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);
// 			}
// 			else if (totalMetres >= 20.45 && totalMetres < 30.44) {
// 				$('#sale-private').html(three + '%');
// 				$('#sale-blockHalf').html(three + '%');
// 				$('#sale-blockAngular').html(three + '%');
// 				$('#sale-blockWaist').html(three + '%');

// 				var BlockAngularWithSale = Math.floor(priceBlockAngular - priceBlockAngular * 0.03);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaist - priceBlockWaist * 0.03);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivate - priceBlockPrivate * 0.03);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalf - priceBlockHalf * 0.03);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.03);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.03);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.03);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.03);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);
// 			}
// 			else if (totalMetres >= 30.45 && totalMetres < 40.44) {
// 				$('#sale-private').html(four + '%');
// 				$('#sale-blockHalf').html(four + '%');
// 				$('#sale-blockAngular').html(four + '%');
// 				$('#sale-blockWaist').html(four + '%');

// 				var BlockAngularWithSale = Math.floor(priceBlockAngular - priceBlockAngular * 0.04);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaist - priceBlockWaist * 0.04);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivate - priceBlockPrivate * 0.04);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalf - priceBlockHalf * 0.04);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.04);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.04);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.04);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.04);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);
// 			}
// 			else if(totalMetres >= 40.45) {
// 				$('#sale-private').html(five + '%');
// 				$('#sale-blockHalf').html(five + '%');
// 				$('#sale-blockAngular').html(five + '%');
// 				$('#sale-blockWaist').html(five + '%');

// 				var BlockAngularWithSale = Math.floor(priceBlockAngular - priceBlockAngular * 0.05);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaist - priceBlockWaist * 0.05);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivate - priceBlockPrivate * 0.05);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalf - priceBlockHalf * 0.05);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.05);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.05);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.05);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.05);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);
// 			}
// 			else {
// 				$('#sale-private').html(0);
// 				$('#sale-blockHalf').html(0);
// 				$('#sale-blockAngular').html(0);
// 				$('#sale-blockWaist').html(0);
// 			}

// 			//клей и общая стоимость клея
// 			var countGlue = Math.ceil((totalMetres * 2).toFixed(2));
// 			$('#count-glue').html(countGlue);
// 			var totalPriceGlue = countGlue * (+$('#price-glue').html());
// 			// console.log(totalPriceGlue);
// 			$('#total-price-glue').html(Math.floor(totalPriceGlue));

// 			var countFoam = Math.ceil(totalMetres);
// 			$('#count-foam').html(countFoam);
// 			var totalPriceFoam = countFoam * (+$('#price-foam').html());
// 			// console.log(totalPriceFoam);
// 			$('#total-price-foam').html(Math.floor(totalPriceFoam));

// 			var countPallet = Math.ceil(blockPrivate / 54 + blockHalf / 90 + blockAngular / 30 + blockWaist / 72 + countGlue / 50);
// 			$('#count-pallet').html(countPallet);
// 			var totalPricePallet = countPallet * (+$('#price-pallet').html());
// 			// console.log(totalPricePallet);
// 			$('#total-price-pallet').html(Math.floor(totalPricePallet));

// 			var countFittings = Math.ceil((perimetrTypeFirst * ((floorHeightFirst + floorHeightSecond + floorHeightThird) / 0.2)) / 50)
// 			;
// 			$('#count-fittings').html(countFittings);
// 			var totalPriceFittings = countFittings * (+$('#price-fittings').html());
// 			// console.log(totalPriceFittings);
// 			$('#total-price-fittings').html(Math.floor(totalPriceFittings));

// 			var totalCountAll = Math.ceil(totalCountBlocks + countGlue + countFoam + countPallet + countFittings);
// 			// console.log("all count " + totalCountAll)
// 			$('#count-all').html(Math.ceil(totalCountAll));

// 			console.log()
// 			var finalPrice = Math.ceil(BlockSaleAll + totalPriceGlue + totalPriceFoam + totalPricePallet + totalPriceFittings);
// 			// console.log(finalPrice);
// 			$('#final-price').html(finalPrice);
			
// 		}
// //222222222222222222222222222222222222222222222222222222222222222222222222222222222222222


// 		else if (houseType == 'type-2') {


//    //---------------УГЛОВОЙ БЛОК -------------------------------------
// 			//угловой наружный блок
// 			var blockAngularTypeSecond = Math.round(((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond) / 0.2) * 5);
// 			console.log("блок угловой: " + blockAngularTypeSecond);
// 			$('#count-blockAngular').html(blockAngularTypeSecond);
// 			//расчет метров
// 			var blockAngularTypeSecondMetr = +((blockAngularTypeSecond * 0.03).toFixed(2));
// 			console.log("blockAngularMetr: " + blockAngularTypeSecondMetr);
// 			$('#metres-blockAngular').html(blockAngularTypeSecondMetr);

// 			var priceAngularTypeSecond = +(+$('#price-blockAngular').text() * blockAngularTypeSecond)
// 			//запись в прайс
// 			$('#total-blockAngular').html(priceAngularTypeSecond);


//    //---------------УГЛОВОЙ БЛОК ЗАКОНЧИЛСЯ 


// 	//-------------- УГЛОВОЙ ВНУТРЕННИЙ БЛОК ------------------------------------
// 			//угловой внутренний блок
// 			var blockInteriorTypeSecond = Math.round((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond)/0.2);
// 			$('#count-blockInterior').html(blockInteriorTypeSecond);
// 			var blockInteriorTypeSecondMetr = +((blockInteriorTypeSecond * 0.03).toFixed(2));
// 			$('#metres-blockInterior').html(blockInteriorTypeSecondMetr);
// 			var priceBlockInteriorTypeSecond = +(+$('#price-blockInterior').text() * blockInteriorTypeSecond);

// 			$('#total-blockInterior').html(priceBlockInteriorTypeSecond);
// 	//-------------- УГЛОВОЙ ВНУТРЕННИЙ БЛОК ЗАКОНЧИЛСЯ------------------------------------

	
// 			var perimetrTypeSecond = (widthFirstSecondType + widthSecondSecondType + lenghtFirstSecondType + lenghtSecondSecondType) * 2;


// 	//----------------- ПОЯСНОЙ БЛОК -----------------------------------------------
// 			//поясной блок
// 			var blockWaistTypeSecond = Math.round(((+perimetrTypeSecond - 4.2) / 0.4) * (+floorCount.val()));
// 			console.log("блок поясной: " + blockWaistTypeSecond);

// 			$('#count-blockWaist').html(blockWaistTypeSecond);
// 			var blockWaistTypeSecondMetr = +(blockWaistTypeSecond * 0.014).toFixed(2);
// 			$('#metres-blockWaist').html(blockWaistTypeSecondMetr);
// 			var priceBlockWaistTypeSecond = +(+$('#price-blockWaist').text() * blockWaistTypeSecond)
// 			$('#total-blockWaist').html(priceBlockWaistTypeSecond );


// 	//----------------- ПОЯСНОЙ БЛОК ЗАКОНЧИЛСЯ-----------------------------------------------


// 	//----------------- ПОЛОВИНЧАТЫЙ БЛОК-----------------------------------------------
// 			//блок половинчатый
// 			var blockHalfTypeSecond = ((doorHeight * doorCount) / 0.2) + ((windowHeight * windowCount) / 0.2) + ((windowHeight2 * windowCount2) / 0.2) + ((windowHeight3 * windowCount3) / 0.2);
// 			console.log("блок половинчатый: " + blockHalfTypeSecond);
// 			$('#count-blockHalf').html(blockHalfTypeSecond);
// 			var blockHalfTypeSecondfMetr = +(blockHalfTypeSecond * 0.012).toFixed(2)
// 			$('#metres-blockHalf').html(blockHalfTypeSecondfMetr);

// 			var priceBlockHalfTypeSecond = +(+$('#price-blockHalf').text() * blockHalfTypeSecond);
// 			$('#total-blockHalf').html(priceBlockHalfTypeSecond);


// //----------------- ПОЛОВИНЧАТЫЙ БЛОК ЗАКОНЧИЛСЯ ----------------------------------------------

// 	//----------------- РЯДОВОЙ БЛОК -----------------------------------------------
// 			//блок рядовой
// 			var blockPrivateTypeSecond = Math.round(((perimetrTypeSecond - 4.2) / 0.4 * ((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond) / 0.2)) - blockWaistTypeSecond);
// 			console.log("блок рядовой: " + blockPrivateTypeSecond);

// 			var doors = Math.round((doorLenght + 0.2) * doorHeight * 12.5 * doorCount);
// 			console.log("двери: " + doors);
// 			//окна
// 			var window1 = Math.round((windowLenght + 0.2) * windowHeight * 12.5 * windowCount);
// 			console.log("окна: " + window1);
// 			var window2 = Math.round((windowLenght2 + 0.2) * windowHeight2 * 12.5 * windowCount2);
// 			console.log("окно 2: " + window2);
// 			var window3 = Math.round((windowLenght3 + 0.2) * windowHeight3 * 12.5 * windowCount3);
// 			console.log("окно 3: " + window3);

// 			blockPrivateTypeSecond = Math.round((blockPrivateTypeSecond - doors - window1 - window2 - window3));
// 			console.log("блок рядовой без дверей и окон: " + blockPrivateTypeSecond);


// 			if (roofChecked == 'roof-1') {
// 				blockInteriorTypeSecond = blockInteriorTypeSecond + roofHeight / 0.2;
// 				blockAngularTypeSecond = blockAngularTypeSecond + roofHeight / 0.2;

// 				var treygArea = 0.5 * roofHeight * roofLenght;
// 				blockPrivateTypeSecond = Math.round(blockPrivateTypeSecond + (treygArea * 2) * 12.5);
// 				$('#count-private').html(blockPrivateTypeSecond);

// 				var blockPrivateTypeSecondMetr = (blockPrivateTypeSecond * 0.024).toFixed(2);
// 				$('#metres-private').html(blockPrivateTypeSecondMetr);

// 				var priceBlockPrivateTypeSecond = +$('#price-private').text() * blockPrivateTypeSecond;
// 				$('#total-private').html(priceBlockPrivateTypeSecond);

// 				console.log("блок рядовой с крышей: " + blockPrivateTypeSecond);
// 				console.log("угловой с учетом крыши: " + blockAngularTypeSecond);
// 				console.log("внутренний с учетом крыши: " + blockInteriorTypeSecond);
// 			}
// 			else if (roofChecked == 'roof-2') {
// 				blockInteriorTypeSecond = blockInteriorTypeSecond;
// 				blockAngularTypeSecond = blockAngularTypeSecond;
// 				$('#count-private').html(blockPrivateTypeSecond);
// 				var blockPrivateTypeSecondMetr = (blockPrivateTypeSecond * 0.024).toFixed(2);
// 				$('#metres-private').html(blockPrivateTypeSecondMetr);
// 				var priceBlockPrivateTypeSecond = +$('#price-private').text() * blockPrivateTypeSecond;
// 				$('#total-private').html(priceBlockPrivateTypeSecond);

// 				console.log("угловой без крыши: " + blockAngularTypeSecond);
// 				console.log("внутренний без крыши: " + blockInteriorTypeSecond);

// 			}
// //----------------- РЯДОВОЙ БЛОК ЗАКОНЧИЛСЯ  -----------------------------------------------


// 			var totalCountBlockstotalMetresTypeSecond = blockInteriorTypeSecond + blockAngularTypeSecond + blockWaistTypeSecond + blockPrivateTypeSecond + blockHalfTypeSecond;
// 			$('#total-counts').html(totalCountBlockstotalMetresTypeSecond);
// 			console.log("общее количество блоков" + totalCountBlockstotalMetresTypeSecond);

// 			var totalMetresTypeSecond = +((+(blockAngularTypeSecond * 0.03).toFixed(2)) + (+(blockWaistTypeSecond * 0.014).toFixed(2)) + (+(blockPrivateTypeSecond * 0.024).toFixed(2)) + (+(blockHalfTypeSecond * 0.012).toFixed(2)) + (+(blockInteriorTypeSecond * 0.03).toFixed(2))).toFixed(2);
// 			console.log("общее количество метров: " + totalMetresTypeSecond);

// 			$('#total-metres').html(totalMetresTypeSecond);
// 			console.log($('#total-metres'));

// 			var totalPriceTypeSecondNoSale = priceAngularTypeSecond + priceBlockWaistTypeSecond + priceBlockPrivateTypeSecond + priceBlockHalfTypeSecond + priceBlockInteriorTypeSecond;

// 			$('#total-not-sale-price').html(totalPriceTypeSecondNoSale);

// 			if (totalMetresTypeSecond > 0.45 && totalMetresTypeSecond < 10.44) {
// 				$('#sale-private').html(one + '%');
// 				$('#sale-blockHalf').html(one + '%');
// 				$('#sale-blockAngular').html(one + '%');
// 				$('#sale-blockWaist').html(one + '%');
// 				$('#sale-blockInterior').html(one + '%');

// 				var BlockAngularWithSale = Math.floor(+priceAngularTypeSecond - +(priceAngularTypeSecond * 0.01));
// 				console.log('BlockAngularWithSale!!!*** : ' + BlockAngularWithSale);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaistTypeSecond - priceBlockWaistTypeSecond * 0.01);
// 				console.log('BlockWaistWithSale : ' + BlockWaistWithSale);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivateTypeSecond - priceBlockPrivateTypeSecond * 0.01);
// 				console.log('BlockPrivateWithSale***!!!' + BlockPrivateWithSale);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalfTypeSecond - priceBlockHalfTypeSecond * 0.01);
// 				console.log('BlockHalfWithSale***!!!' + BlockHalfWithSale);
// 				var BlockInteriorWithSale = Math.floor(+(priceBlockInteriorTypeSecond) - (+(priceBlockInteriorTypeSecond * 0.01)));
// 				console.log('BlockInteriorWithSale***!!!' + BlockInteriorWithSale);

// 				var BlockAngularWithSales = Math.floor(+(priceBlockAngular * 0.01));
// 				console.log('BlockAngularWithSales!!!***: ' + BlockAngularWithSales);
// 				var BlockWaistWithSales = Math.floor(+(priceBlockWaist * 0.01));
// 				console.log('BlockWaistWithSales!!!***: ' + BlockWaistWithSales);
// 				var BlockPrivateWithSales = Math.floor(+(priceBlockPrivate * 0.01));
// 				console.log('BlockPrivateWithSales!!!**: ' + BlockPrivateWithSales)
// 				var BlockHalfWithSales = Math.floor(+(priceBlockHalf * 0.01));
// 				console.log('BlockHalfWithSales!!!***: ' + BlockHalfWithSales)
// 				var BlockInteriorWithSales = Math.floor(+(spriceBlockInteriorTypeSecond * 0.01));
// 				console.log('BlockInteriorWithSales***!!!: ' + BlockInteriorWithSales);

// 				var BlockSaleAll = Math.floor((+BlockAngularWithSale) + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale + BlockInteriorWithSale);
// 				console.log('blockSALESALL!!!!***: ' + BlockSaleAll);
// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);

// 				$('#summ-sale-blockInterior').html(BlockInteriorWithSales);
// 				$('#with-sale-blockInterior').html(BlockInteriorWithSale);
// 			}
// 			else if (totalMetresTypeSecond >= 10.45 && totalMetresTypeSecond < 20.44) {
// 				$('#sale-private').html(two + '%');
// 				$('#sale-blockHalf').html(two + '%');
// 				$('#sale-blockAngular').html(two + '%');
// 				$('#sale-blockWaist').html(two + '%');
// 				$('#sale-blockInterior').html(two + '%');

// 				var BlockAngularWithSale = Math.floor(priceAngularTypeSecond - priceAngularTypeSecond * 0.02);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaistTypeSecond - priceBlockWaistTypeSecond * 0.02);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivateTypeSecond - priceBlockPrivateTypeSecond * 0.02);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalfTypeSecond - priceBlockHalfTypeSecond * 0.02);
// 				var BlockInteriorWithSale = Math.floor(priceBlockInteriorTypeSecond - priceBlockInteriorTypeSecond * 0.02);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.02);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.02);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.02);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.02);
// 				var BlockInteriorWithSales = Math.floor(spriceBlockInteriorTypeSecond * 0.02);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale + BlockInteriorWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);

// 				$('#summ-sale-blockInterior').html(BlockInteriorWithSales);
// 				$('#with-sale-blockInterior').html(BlockInteriorWithSale);
// 			}
// 			else if (totalMetresTypeSecond >= 20.45 && totalMetresTypeSecond < 30.44) {
// 				$('#sale-private').html(three + '%');
// 				$('#sale-blockHalf').html(three + '%');
// 				$('#sale-blockAngular').html(three + '%');
// 				$('#sale-blockWaist').html(three + '%');
// 				$('#sale-blockInterior').html(three + '%');

// 				var BlockAngularWithSale = Math.floor(priceAngularTypeSecond - priceAngularTypeSecond * 0.03);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaistTypeSecond - priceBlockWaistTypeSecond * 0.03);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivateTypeSecond - priceBlockPrivateTypeSecond * 0.03);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalfTypeSecond - priceBlockHalfTypeSecond * 0.03);
// 				var BlockInteriorWithSale = Math.floor(priceBlockInteriorTypeSecond - priceBlockInteriorTypeSecond * 0.03);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.03);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.03);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.03);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.03);
// 				var BlockInteriorWithSales = Math.floor(spriceBlockInteriorTypeSecond * 0.03);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale + BlockInteriorWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);

// 				$('#summ-sale-blockInterior').html(BlockInteriorWithSales);
// 				$('#with-sale-blockInterior').html(BlockInteriorWithSale);
// 			}
// 			else if (totalMetresTypeSecond >= 30.45 && totalMetresTypeSecond < 40.44) {
// 				$('#sale-private').html(four + '%');
// 				$('#sale-blockHalf').html(four + '%');
// 				$('#sale-blockAngular').html(four + '%');
// 				$('#sale-blockWaist').html(four + '%');
// 				$('#sale-blockInterior').html(four + '%');

// 				var BlockAngularWithSale = Math.floor(priceAngularTypeSecond - priceAngularTypeSecond * 0.04);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaistTypeSecond - priceBlockWaistTypeSecond * 0.04);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivateTypeSecond - priceBlockPrivateTypeSecond * 0.04);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalfTypeSecond - priceBlockHalfTypeSecond * 0.04);
// 				var BlockInteriorWithSale = Math.floor(priceBlockInteriorTypeSecond - priceBlockInteriorTypeSecond * 0.04);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.04);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.04);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.04);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.04);
// 				var BlockInteriorWithSales = Math.floor(spriceBlockInteriorTypeSecond * 0.04);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale + BlockInteriorWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);

// 				$('#summ-sale-blockInterior').html(BlockInteriorWithSales);
// 				$('#with-sale-blockInterior').html(BlockInteriorWithSale);
// 			}
// 			else if (totalMetresTypeSecond >= 40.45) {
// 				$('#sale-private').html(five + '%');
// 				$('#sale-blockHalf').html(five + '%');
// 				$('#sale-blockAngular').html(five + '%');
// 				$('#sale-blockWaist').html(five + '%');
// 				$('#sale-blockInterior').html(five + '%');

// 				var BlockAngularWithSale = Math.floor(priceAngularTypeSecond - priceAngularTypeSecond * 0.05);
// 				var BlockWaistWithSale = Math.floor(priceBlockWaistTypeSecond - priceBlockWaistTypeSecond * 0.05);
// 				var BlockPrivateWithSale = Math.floor(priceBlockPrivateTypeSecond - priceBlockPrivateTypeSecond * 0.05);
// 				var BlockHalfWithSale = Math.floor(priceBlockHalfTypeSecond - priceBlockHalfTypeSecond * 0.05);
// 				var BlockInteriorWithSale = Math.floor(priceBlockInteriorTypeSecond - priceBlockInteriorTypeSecond * 0.05);

// 				var BlockAngularWithSales = Math.floor(priceBlockAngular * 0.05);
// 				var BlockWaistWithSales = Math.floor(priceBlockWaist * 0.05);
// 				var BlockPrivateWithSales = Math.floor(priceBlockPrivate * 0.05);
// 				var BlockHalfWithSales = Math.floor(priceBlockHalf * 0.05);
// 				var BlockInteriorWithSales = Math.floor(spriceBlockInteriorTypeSecond * 0.05);

// 				var BlockSaleAll = Math.floor(BlockAngularWithSale + BlockWaistWithSale + BlockPrivateWithSale + BlockHalfWithSale + BlockInteriorWithSale);

// 				$('#total-sale-price').html(BlockSaleAll);
// 				$('#total-all').html(BlockSaleAll);

// 				$('#summ-sale-private').html(BlockPrivateWithSales);
// 				$('#with-sale-private').html(BlockPrivateWithSale)

// 				$('#summ-sale-blockHalf').html(BlockHalfWithSales);
// 				$('#with-sale-blockHalf').html(BlockHalfWithSale)

// 				$('#summ-sale-blockAngular').html(BlockAngularWithSales);
// 				$('#with-sale-blockAngular').html(BlockAngularWithSale);

// 				$('#summ-sale-blockWaist').html(BlockWaistWithSales)
// 				$('#with-sale-blockWaist').html(BlockWaistWithSale);

// 				$('#summ-sale-blockInterior').html(BlockInteriorWithSales);
// 				$('#with-sale-blockInterior').html(BlockInteriorWithSale);
// 			}
// 			else {
// 				$('#sale-private').html(0);
// 				$('#sale-blockHalf').html(0);
// 				$('#sale-blockAngular').html(0);
// 				$('#sale-blockWaist').html(0);
// 				$('#sale-blockInterior').html(0);
// 			}
// 			//клей и общая стоимость клея
// 			var countGlue = Math.ceil(totalMetresTypeSecond * 2);
// 			$('#count-glue').html(countGlue);
// 			var totalPriceGlue = countGlue * (+$('#price-glue').html());
// 			$('#total-price-glue').html(Math.floor(totalPriceGlue));

// 			var countFoam = Math.ceil(totalMetresTypeSecond * 2);
// 			$('#count-foam').html(countFoam);
// 			var totalPriceFoam = countFoam * (+$('#price-foam').html());
// 			$('#total-price-foam').html(Math.floor(totalPriceFoam));

// 			var countPallet = Math.ceil(blockPrivateTypeSecond / 54 + blockHalfTypeSecond / 90 + blockAngularTypeSecond / 30 + blockWaistTypeSecond / 72 + countGlue  / 50 + blockInteriorTypeSecond / 30);
// 			$('#count-pallet').html(countPallet);
// 			var totalPricePallet = countPallet * (+$('#price-pallet').html());
// 			console.log('totalPricePollet: ' + totalPricePallet);
// 			$('#total-price-pallet').html(Math.floor(totalPricePallet));

// 			var countFittings = Math.ceil((perimetrTypeSecond * ((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond) / 0.2)) / 50)
// 				;
// 			$('#count-fittings').html(countFittings);
// 			var totalPriceFittings = countFittings * (+$('#price-fittings').html());
// 			console.log('totalPriceFitting' + totalPriceFittings);
// 			$('#total-price-fittings').html(Math.floor(totalPriceFittings));

// 			var totalCountAll = Math.ceil(totalCountBlockstotalMetresTypeSecond + countGlue + countFoam + countPallet + countFittings);
// 			$('#count-all').html(Math.floor(totalCountAll));

// 			var finalPrice = Math.ceil(BlockSaleAll + totalPriceGlue + totalPriceFoam + countPallet + totalPriceFittings);
// 			$('#final-price').html(finalPrice);

// 		}

// 	});

// 	$('.calculator__link-stamp').on('click', function () {
// 		window.print();
// 	});
// });