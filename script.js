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
  
  let operazioni = function(x,a,b) {
     return x(a,b)
  }
 
  
let displayValue = document.querySelector(".display");

let = twoOperand = ["","", false, 0, undefined];



let numbers = document.querySelectorAll(".number");
numbers.forEach(element => {
    element.addEventListener("click", () => {
      if (twoOperand[2] === true) {
        displayValue.value = "";
        twoOperand[0] = twoOperand[3];
      } 
      displayValue.value +=  element.innerHTML;
    })
});
let operators = document.querySelectorAll(".operator");

operators.forEach(element => {
  element.addEventListener('click', () => {

    
    if (twoOperand[4] === undefined) {

    }

    
     if (twoOperand[0] === "") {
      twoOperand[0] = displayValue.value;
      twoOperand[4] = element.innerHTML;
      console.log(twoOperand)
      displayValue.value = "";
    } else if (twoOperand[1] === "") {
      twoOperand[1] = displayValue.value;


      {
      
        if (element.value === "moltiplicazione") {
          displayValue.value = operazioni(moltiplicazione, Number(twoOperand[0]), Number(twoOperand[1]));
          twoOperand[3] = displayValue.value;
          twoOperand[0] = "";
          twoOperand[1] = "";
          twoOperand[2] = true;
    
        } else if (element.value === "divisione") {
    
          displayValue.value = operazioni(divisione, Number(twoOperand[0]), Number(twoOperand[1]));
          twoOperand[3] = displayValue.value;
          twoOperand[0] = "";
          twoOperand[1] = "";
          twoOperand[2] = true;
        } else if (element.value === "somma") {
    
          displayValue.value = operazioni(somma, Number(twoOperand[0]), Number(twoOperand[1]));
          twoOperand[3] = displayValue.value;
          twoOperand[0] = "";
          twoOperand[1] = "";
          twoOperand[2] = true;
        } else {
    
          displayValue.value = operazioni(sottrazione, Number(twoOperand[0]), Number(twoOperand[1]));
          twoOperand[3] = displayValue.value;
          twoOperand[0] = "";
          twoOperand[1] = "";
          twoOperand[2] = true;
        }
         
      }

    } 
  
 
     
    
    
  })
})

// //  eventi che aggiungono gli operatori al numero inserito.
// let cancella = document.querySelector("#del");
// cancella.addEventListener("click", () => {
//     displayValue.value = 0;
// })

// let sommando = document.querySelector("#piu");
// sommando.addEventListener("click", () => {
//     displayValue.value += sommando.textContent;
//     console.log(sommando.value);
// })

// let sottraendo = document.querySelector("#meno");
// sottraendo.addEventListener("click", () => {
//     displayValue.value = displayValue.value + sottraendo.innerHTML;
// })

// let moltiplicando = document.querySelector("#per");
// moltiplicando.addEventListener("click", () => {
//     displayValue.value = displayValue.value + moltiplicando.innerHTML;
// })

// let dividendo = document.querySelector("#diviso");
// dividendo.addEventListener("click", () => {
//     displayValue.value = displayValue.value + dividendo.innerHTML;
// })





// let uguale = document.querySelector("#uguale");
// uguale.addEventListener("click", () => {
    
// })