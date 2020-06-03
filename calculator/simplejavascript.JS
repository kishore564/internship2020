function screen(val) {  
        document.getElementById("box").value = val;
        
}

// Concatenating Values
function shownum(val) {
        document.getElementById("box").value = val;
}

// Performing the Calcuulation
function solve() {

        console.log("solve")}
        try {
                screen(eval(document.getElementById("box").value))
                
                        
        }
        catch (e) {
                screen('Error')
        }



// Clear the Input Screen
function clearme() {

        document.getElementById("box").value = "";
        
}
// Backspace Function
function delback() {

        var valueNeeded = document.getElementById("box").value;
        var finalValue2Needed = valueNeeded.substr(0, valueNeeded.length - 1);
        document.getElementById("box").value = finalValue2Needed;

}































