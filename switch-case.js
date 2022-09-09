const LETTER = "b";
switch (LETTER) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
    default:
        console.log("Letra no válida");
        break;
  }
  

  //---------- Switch Case con múltiples opciones --------------
  let answer = "";

  function sequentialSizes(val) {
   switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Error";
      break;
  }
    return answer;
  }
  
  sequentialSizes(18);
  console.log(answer);



  if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6){

    count += 1;
  } else if (card == 7 || card ==8 || card ==9){
    return count;
  } else if (card == 10 || card =='J' || card =='Q' || card =='K' || card == 'A'){
    count -=1;
    return count;
  }