function convertTemp(){  

    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if(temp === "" || isNaN(temp)){
        result.innerHTML = "❌ Please enter a Valid number";
        return;
    }

    temp = parseFloat(temp);

    let output = "";
    if (unit === "c"){  // Celsius → Fahrenheit:  F = (C × 9/5) + 32
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }
    else if (unit === "f"){ // Celsius → Kelvin: K = C + 273.15 
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }
    else if (unit === "k"){
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F `;
    }
    result.innerHTML = " ✅ Converted " + output;
}