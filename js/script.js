//function f1 (){
//    var temp, dens, key1, key2, arr, dens_arr, dens_round_str, dens_round, dens2, dens_otput, dens_otput1, dens3;
//
//    temp = document.getElementById('temperature1').value;
//    //num1 = parseFloat(num1);
//    dens = document.getElementById('density1').value;
//    //temp = document.getElementById('temperature2').value;
//    //num1 = parseFloat(num1);
//    //dens = document.getElementById('density2').value;
//    
//    dens = parseFloat(dens);
//    dens = dens + 1.4; // поправка на мениск
//    dens_round = Math.round(dens / 10) * 10;
//    dens_round_str = dens_round.toFixed(1);
////    dens_round_str = String(dens_round);
//    
////    arr = {
////        "19.5" : 789.6, "20.0" : 790.0, "20.5" : 790.4
////    }
//    
//    arr = { 
//        "790.0": { 
//            "19.5": 789.6, 
//            "20.0": 790.0,
//            "20.5": 790.4
//            }, 
//        "780.0": {
//            "19.5":	779.6,
//            "20.0":	780.0,
//            "20.5":	780.4
//            } 
//    }; 
//    
////    temp = 'вес'; 
////    key = 'мясо';
//    
////    key1 = "790.0";
//    key1 = dens_round_str;
////    key2 = temp;
//    key2 = temp;
//    dens_arr = arr[key1][key2]; 
//    
////    dens_arr = arr[key];
////    dens_round = Math.round(dens / 10) * 10; // округление 
//   
//    dens_otput = document.getElementById('result');
//
//    if (dens_arr < dens_round) {
//        dens_otput1 = dens_arr - (dens_round - dens);
//        dens_otput1 = dens_otput1.toFixed(1); //округление, (отсекает неточность) на выходе строка
//        dens_otput.innerHTML = dens_otput1;
//    }
//    else if (dens_arr > dens_round) {
//        dens_otput1 = dens_arr + (dens - dens_round);
//        dens_otput1 = dens_otput1.toFixed(1);
//        dens_otput.innerHTML = dens_otput1;
//    }
//    else {
//        dens_otput1 = dens_arr;
//        dens_otput.innerHTML = dens_otput1.toFixed(1);
//    }
//}