let display = document.getElementById("display");

function press(value) {
    if (value === '.') {
        let parts = display.value.split(/[\+\-\*\/]/);
        let lastNumber = parts[parts.length - 1];

        if (lastNumber.includes('.')) {
            return; 
        }
    }

    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
   if (display.value === ""){
    display.value = "Enter value";
   } else {

      try{
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
    
}

function percentage() {
    if (display.value !== "") {
        display.value = eval(display.value) / 100;
    }
}

// function toggleSign(){
//     if (display.value !== ""){
//         if (display.value = display.value.startsWith('-')){
//             display.value = display.value.substring(1);

//         }else{
//             display.value = '-' + display.value
//         }
//     }
// }




    