function somma(a,b) {
    return a + b;
  }
  
  function sottrazione(a,b) {
    return a - b;
  }
   
  function moltiplicazione(a,b) {
    return a * b;
  }
   
  function divisione(a,b) {
    return a / b;
  }
  
  let operazioni = function(operazione,a,b) {
    if (operazione === "*") { 
      return moltiplicazione(Number(a),Number(b));
    } else if (operazione === "+") {
      return somma(Number(a),Number(b));
    } else if (operazione === "-") {
      return sottrazione(Number(a),Number(b));
    } else if (operazione === "/") {
      return divisione(Number(a),Number(b));
    } else if (operazione === "=") {
      return 
    }
  }
 console.log(operazioni(moltiplicazione,5,6));
  
let displayValue = document.querySelector(".display");

let variabiliInUso = {
    total: false,
    firstNumber: null,
    secondNumber: null,
    operator: null, 
}



let numbers = document.querySelectorAll(".number");
numbers.forEach(element => {
    element.addEventListener("click", () => {


      if (variabiliInUso.total === true) {
        displayValue.value = "";
        variabiliInUso.firstNumber = null;
        displayValue.value += element.innerHTML;
        variabiliInUso.total = false;

        console.log(variabiliInUso.secondNumber, variabiliInUso.firstNumber,variabiliInUso.operator,variabiliInUso.total);  
      } else {
        displayValue.value += element.innerHTML;
        console.log(variabiliInUso.firstNumber, variabiliInUso.secondNumber,variabiliInUso.operator,variabiliInUso.total);  
      }
    
     
    })
});


let operators = document.querySelectorAll(".operator");
operators.forEach(element => {
  element.addEventListener('click', () => {
    
   

    


    if (element.value === "del") {
      variabiliInUso.total= false;
      variabiliInUso.firstNumber= null;
      variabiliInUso.secondNumber= null;
      variabiliInUso.operator= null;
      displayValue.value = "";
      console.log(variabiliInUso.firstNumber, variabiliInUso.secondNumber,variabiliInUso.operator,variabiliInUso.total);  
      
      return;
    }
    if (displayValue.value === "" ) {
      variabiliInUso.operator = element.innerHTML;
      return;
      
    };

    if (element.innerHTML === "=") {
     
      if (variabiliInUso.firstNumber !== null && variabiliInUso.operator !== null) { 

        return ugual();
      } else { 
        console.log(variabiliInUso.firstNumber, variabiliInUso.secondNumber,variabiliInUso.operator,variabiliInUso.total);   
        return;
      }
    }

    if ( variabiliInUso.firstNumber === null ) {    
      variabiliInUso.firstNumber = displayValue.value; 
      
      displayValue.value = "";
      variabiliInUso.operator = element.innerHTML;
      console.log(variabiliInUso.secondNumber, variabiliInUso.firstNumber,variabiliInUso.operator,variabiliInUso.total,"first number null");
      
    } else if (variabiliInUso.firstNumber !== null && variabiliInUso.total === true) {
      variabiliInUso.operator = element.innerHTML;
      
      variabiliInUso.secondNumber = displayValue.value;
      displayValue.value = "";
      variabiliInUso.total = false;

      console.log(variabiliInUso.secondNumber, variabiliInUso.firstNumber,variabiliInUso.operator,variabiliInUso.total, "first number true total true");
      
    } else if (variabiliInUso.total === false) {
      ugual();
      
    }
  })
})






function ugual() {
 
  variabiliInUso.secondNumber = displayValue.value;
  displayValue.value = containDot();
  variabiliInUso.firstNumber = displayValue.value;
  variabiliInUso.total = true;
  variabiliInUso.secondNumber = null;
  variabiliInUso.operator = null;
  
  console.log(variabiliInUso.firstNumber, variabiliInUso.secondNumber,variabiliInUso.operator,variabiliInUso.total, "       uguale funbiotn ");  
}


function containDot() {
   
  let  totale = operazioni(variabiliInUso.operator, variabiliInUso.firstNumber, variabiliInUso.secondNumber);
  
  let contain = totale.toString();
  console.log(contain);
  let containn = contain.search(/\./);
  
  console.log(containn);
  if (containn === -1) {
    return totale;

  } else {
    return totale.toFixed(2);
  }
}






