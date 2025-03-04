document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById("result");
    let buttons = document.querySelectorAll("button");

    let string = "";
    let array = Array.from(buttons);
    
    array.forEach((button) => {
        button.addEventListener("click", (e) => {
            if(e.target.innerHTML == "=") {
                try {
                    string = eval(string);
                    input.value = string;
                } catch(err) {
                    input.value = "Error";
                }
            }
            else if(e.target.innerHTML == "AC") {
                string = "";
                input.value = string;
            }
            else if(e.target.innerHTML == "DEL") {
                string = string.substring(0, string.length - 1);
                input.value = string;
            }
            else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});