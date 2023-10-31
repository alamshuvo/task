 

function converter(temp,unit) {
    if (unit==="celsius" ) {
        const fahrenheit = (temp * 9/5) + 32;
        const celsius = ( fahrenheit- 32) * 5/9;
        const kelvin =  celsius + 273.15
        return(`the temp is ${fahrenheit } fahrenheit and the
        the celsius value is ${celsius}  and
 kelvin value is ${kelvin}` );
        
    } 
    else if (unit==="fahrenheit") {
        const celsius = (temp - 32) * 5/9;
        const fahrenheit = (celsius * 9/5) + 32;

        const kelvin = celsius + 273.15
        
        return(`the temp is ${ celsius} celsius and the
        fahrenheit value is ${fahrenheit}, 
kelvin value is ${kelvin}`);
    } 
    else if (unit==="kelvin") {
        const celsius = (temp-273.15);
        const fahrenheit = (temp-273.15)*( 9/5) + 32;

        const kelvin = celsius + 273.15
        
        return(`the temp is ${ celsius} celsius and the
        fahrenheit value is ${fahrenheit}, 
kelvin value is ${kelvin}`);
    }

    else{
        return("invalid temp value");

    }
    
}
 console.log(converter(100,"kelvin"));

