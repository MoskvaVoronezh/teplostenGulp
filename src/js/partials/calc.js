$(document).ready(function () {
   //Цены на блоки
   var priceBlocks = {
      blockRyadovoi: 240,
      blockPolovinchatyi: 159, 
      blockYglovoiNarugniy: 469,
      blockYglovoiVnutreniy: 469,
      blockPoyasnoi: 191,
      klei: 221,
      pena: 355,
      poddon: 300,
      armatura: 475
   };
	// var absouluteFloor1 = $(".absoulute-floor-1");
	var absouluteFloor2 = $(".absoulute-floor-2");
	var absouluteFloor3 = $(".absoulute-floor-3");
	// var typeSecondFirstFloor = $(".first-floor-type-2");
	var typeSecondSecondFloor = $(".second-floor-type-2");
	var typeSecondThirdFloor = $(".fhird-floor-type-2");
   var floorCount = $("#count-floors");
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
      var floorCount = +$("#count-floors").val();
      var houseType = $('.type:checked').val();

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
      

      if (houseType === 'type-1') {
         var width = +$('#width--1').val(); //ширина дома
         var length = +$('#lenght--1').val(); // длина дома

         //высоты этаже
         var heigtFloor1 = +$('#heigt-floor-1').val();
         var heigtFloor2 = +$('#heigt-floor-2').val();
         var heigtFloor3 = +$('#heigt-floor-3').val();

         var summHeightFloors = heigtFloor1 + heigtFloor2 + heigtFloor3;
         console.log(summHeightFloors);

         //Подсчет количества блоков для 1 типа
         var blockPoyasnoi = Math.round(blockPoyasnoi(3.2, width, length, floorCount));
         var blockYglovoi = Math.round(blockYglovoi(heigtFloor1, heigtFloor2, heigtFloor3, 4));
         var blockRyadovoi = Math.round(blockRyadovoi(width, length, heigtFloor1, heigtFloor2, heigtFloor3, doorHeight, doorLenght, doorCount, windowHeight, windowLenght, windowCount, windowHeight2, windowLenght2, windowCount2, windowHeight3, windowLenght3, windowCount3, blockPoyasnoi));
         var blockPolovinchatyi = Math.round(blockPolovinchatyi(doorHeight, doorCount, windowHeight, windowCount, windowHeight2, windowCount2, windowHeight3, windowCount3));

         //Общее количество блоков
         var totalCount = blockPoyasnoi + blockYglovoi + blockRyadovoi + blockPolovinchatyi;
         
         //Вывод в таблицу количества блоков
         $('#count-private').html(blockRyadovoi);
         $('#count-blockHalf').html(blockPolovinchatyi);
         $('#count-blockAngular').html(blockYglovoi);
         $('#count-blockInterior').html('-');
         $('#count-blockWaist').html(blockPoyasnoi);
         $('#total-counts').html(totalCount);

         var m3blockPoyasnoi = Number((blockPoyasnoi * 0.014).toFixed(2));
         var m3blockYglovoi = Number((blockYglovoi * 0.03).toFixed(2));
         var m3blockRyadovoi = Number((blockRyadovoi * 0.024).toFixed(2));
         var m3blockPolovinchatyi = Number((blockPolovinchatyi * 0.012).toFixed(2));

         //Вывод в таблицу количества куб.метров

         $('#metres-private').html(m3blockRyadovoi);
         $('#metres-blockHalf').html(m3blockPolovinchatyi);
         $('#metres-blockAngular').html(m3blockYglovoi);
         $('#metres-blockWaist').html(m3blockPoyasnoi);

         var totalMetres = Number(m3blockPoyasnoi + m3blockYglovoi + m3blockRyadovoi + m3blockPolovinchatyi).toFixed(2);
         console.log(totalMetres);

         $('#total-metres').html(totalMetres);
         definitionOfDiscount(width, length, summHeightFloors, totalMetres, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, 0);
      }

      //блок поясной
      function blockPoyasnoi(coefficient, width, length, floorCount) {
         var per = perimetr(width, length);
         console.log(per);
         var blockPoyasnoi = ((per - Number(coefficient)) / 0.4) * Number(floorCount);
         return blockPoyasnoi;
      }

      //блок угловой
      function blockYglovoi(heigtFloor1, heigtFloor2, heigtFloor3, coefficient) {
         var allHeightFloor = Math.round(Number(heigtFloor1) + Number(heigtFloor2) + Number(heigtFloor3));
         var blockYglovoi = allHeightFloor / 0.2 * Number(coefficient);
         return blockYglovoi;
      }

      //блок рядовой
      function blockRyadovoi(width, length, 
         heigtFloor1, heigtFloor2, heigtFloor3, 
         doorHeight, doorLenght, doorCount,
         windowHeight, windowLenght, windowCount,
         windowHeight2, windowLenght2, windowCount2,
         windowLenght3, windowHeight3, windowCount3, block
      ) {
         var per = perimetr(width, length);
         
         var summHeight = Number(heigtFloor1) + Number(heigtFloor2) + Number(heigtFloor3);
         var blockRyadovoi = Math.round(((per - 3.2) / 0.4) * (summHeight / 0.2)) - block;
         var doorsAll = Math.round(doors(doorLenght, doorHeight, doorCount));
         var window1 = Math.round(window(windowLenght, windowHeight, windowCount));
         var window2 = Math.round(window(windowLenght2, windowHeight2, windowCount2));
         var window3 = Math.round(window(windowLenght3, windowHeight3, windowCount3));

         var res = blockRyadovoi - (doorsAll + window1 + window2 + window3);
         var resWithRoof = 0;

         var roofChecked = +$('.roof:checked').val();
         var roofHeight = +$('.roof-height').val();
         var roofLenght = +$('.roof-lenght').val();

         if (roofChecked == 'roof-1') {
            resWithRoof = withRoof(roofHeight, roofLenght);
         } 

         return res + resWithRoof;

      }

      //блок половинчатый
      function blockPolovinchatyi(
         doorHeight, doorCount,
         windowHeight, windowCount,
         windowHeight2, windowCount2,
         windowHeight3, windowCount3) {
         var doorsAll = Math.round((doorHeight * doorCount) / 0.2);
         var window1 = Math.round((windowHeight * windowCount) / 0.2);
         var window2 = Math.round((windowHeight2 * windowCount2) / 0.2);
         var window3 = Math.round((windowHeight3 * windowCount3) / 0.2);

         return Math.round(doorsAll + window1 + window2 + window3);
      }

      //двери
      function doors(doorLength, doorHeight, doorCount) {
         var doors;
         if (doorLength && doorHeight && doorCount) {
            doors = (Number(doorLength) + 0.2) * Number(doorHeight) * Number(doorCount) * 12.5;
         } else { doors = 0; }
         return doors;
      }

      //окна
      function window(windowLength, windowHeight, windowCount) {
         var windows;
         if (windowLength && windowHeight && windowCount) {
            windows = (Number(windowLength) + 0.2) * windowHeight * 12.5 * windowCount;
         } else {
            windows = 0;
         }
         return windows;
      }

      //периметр
      function perimetr(width, length) {
         return (Number(width) + Number(length)) * 2;
      }

      //Учитывать крышу
      function withRoof(roofHeight, roofLength) {
         return 12.5 * (roofLength * roofHeight);
      }

      //определение скидки
      function definitionOfDiscount(width, length, summHeightFloors, totalMetres, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, blockYglovoiVnutr) {

         if (totalMetres > 0.45 && totalMetres < 10.44) {
            establishingDiscount(totalMetres, 1, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, 0);
         } else if (totalMetres >= 10.45 && totalMetres < 20.44) {
            establishingDiscount(totalMetres, 2, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, 0);
         } else if (totalMetres >= 20.45 && totalMetres < 30.44) {
            establishingDiscount(totalMetres, 3, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, 0);
         } else if (totalMetres >= 30.45 && totalMetres < 40.44) {
            establishingDiscount(totalMetres, 4, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, 0);
         } else if (totalMetres >= 40.45) {
            establishingDiscount(totalMetres, 5, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, 0);
         }

      }

      //Установить скидку
      function establishingDiscount(width, length, summHeightFloors, totalMetres, countSale, blockPoyasnoi, blockYglovoi, blockRyadovoi, blockPolovinchatyi, blockYglovoiVnutr) {
         $('#sale-private').html(countSale + '%');
         $('#sale-blockHalf').html(countSale + '%');
         $('#sale-blockAngular').html(countSale + '%');
         $('#sale-blockWaist').html(countSale + '%');
         $('#sale-blockInterior').html(countSale + '%');

         var blockRyadovoiWithoutSales = Math.round(blockRyadovoi * priceBlocks.blockRyadovoi);
         $('#total-private').html(blockRyadovoiWithoutSales);
         var blockRyadovoiSale = Math.round(priceBlocks.blockRyadovoi * blockRyadovoi * Number('0.0' + countSale));
         $('#summ-sale-private').html(blockRyadovoiSale);
         var blockRyadovoiWithSales = Math.floor(blockRyadovoiWithoutSales - blockRyadovoiSale);
         $('#with-sale-private').html(blockRyadovoiWithSales);

         var blockPolovinchatyiWithoutSales = Math.round(blockPolovinchatyi * priceBlocks.blockPolovinchatyi);
         $('#total-blockHalf').html(blockPolovinchatyiWithoutSales);
         var blockPolovinchatyiSale = Math.round(priceBlocks.blockPolovinchatyi * blockPolovinchatyi * Number('0.0' + countSale));
         $('#summ-sale-blockHalf').html(blockPolovinchatyiSale);
         var blockPolovinchatyiWithSales = Math.floor(blockPolovinchatyiWithoutSales - blockPolovinchatyiSale);
         $('#with-sale-blockHalf').html(blockPolovinchatyiWithSales);

         var blockYglovoiWithoutSales = Math.round(blockYglovoi * priceBlocks.blockYglovoiNarugniy);
         $('#total-blockAngular').html(blockYglovoiWithoutSales);
         var blockYglovoiSale = Math.round(priceBlocks.blockYglovoiNarugniy * blockYglovoi * Number('0.0' + countSale));
         $('#summ-sale-blockAngular').html(blockYglovoiSale);
         var blockYglovoiWithSales = Math.floor(blockYglovoiWithoutSales - blockYglovoiSale);
         $('#with-sale-blockAngular').html(blockYglovoiWithSales);

         var blockPoyasnoiWithoutSales = Math.round(blockPoyasnoi * priceBlocks.blockPoyasnoi);
         $('#total-blockWaist').html(blockPoyasnoiWithoutSales);
         var blockPoyasnoiSale = Math.round(priceBlocks.blockPoyasnoi * blockPoyasnoi * Number('0.0' + countSale));
         $('#summ-sale-blockWaist').html(blockPoyasnoiSale);
         var blockPoyasnoiWithSales = Math.floor(blockPoyasnoiWithoutSales - blockPoyasnoiSale);
         $('#with-sale-blockWaist').html(blockPoyasnoiWithSales);

         if (blockYglovoiVnutr != 0) {
            var blockYglovoiVnutrWithoutSales = Math.round(blockYglovoiVnutr * priceBlocks.blockYglovoiVnutreniy);
            $('#total-blockWaist').html(blockYglovoiVnutrWithoutSales);
            var blockYglovoiVnutrSale = Math.round(priceBlocks.blockYglovoiVnutreniy * blockYglovoiVnutr * Number('0.0' + countSale));
            $('#summ-sale-blockWaist').html(blockYglovoiVnutrSale);
            var blockYglovoiVnutrWithSales = Math.floor(blockYglovoiVnutrWithoutSales - blockYglovoiVnutrSale);
            $('#with-sale-blockWaist').html(blockYglovoiVnutrWithSales);
         }

         var blocksWithoutSales = Math.floor(blockRyadovoiWithoutSales + blockPolovinchatyiWithoutSales + blockYglovoiWithoutSales + blockPoyasnoiWithoutSales + blockYglovoiVnutr);
         $('#total-not-sale-price').html(blocksWithoutSales);

         var blockAllSales = Math.floor(blockRyadovoiSale + blockPolovinchatyiSale + blockYglovoiSale + blockPoyasnoiSale + blockYglovoiVnutr);
         $('#total-sale-price').html(blockAllSales);

         var totalAll = Math.floor(blocksWithoutSales - blockAllSales);
         $('#total-all').html(totalAll);

         var priceKlei = klei(totalMetres);
         var pricePena = pena(totalMetres);
         var priceArmatura = armatura(width, length, summHeightFloors);


      }

      //клей 
      function klei(totalMetres) {
         var countKlei = Math.ceil(totalMetres) * 2;
         $('#count-glue').html(countKlei);
         var priceAll = Math.ceil(countKlei * priceBlocks.klei);
         $('#total-price-glue').html(priceAll);
         return priceAll;
      }

      //Пена
      function pena(totalMetres) {
         var countPena = Math.ceil(totalMetres);
         $('#count-foam').html(countPena);
         var priceAll = Math.ceil(countPena * priceBlocks.pena);
         $('#total-price-foam').html(priceAll);
         return priceAll;
      }

      //арматура

      function armatura(width, length, summHeightFloors) {
         // var countArmatura = Math.ceil((perimetr(width, length) * (summHeightFloors / 0.2)) / 50);
         alert(width);
         alert(length);
         var per = perimetr(width, length);
         alert(per);
         var countArmatura = (per * (summHeightFloors / 0.2)) / 50;

         // var countFittings = Math.ceil((perimetrTypeSecond * ((floorHeightFirstTypeSecond + floorHeightSecondTypeSecond + floorHeightThirdTypeSecond) / 0.2)) / 50)
         $('#count-fittings').html(countArmatura);
         var priceAll = Math.ceil(countArmatura * priceBlocks.armatura);
         $('#total-price-fittings').html(priceAll);
         
      }

   });

});