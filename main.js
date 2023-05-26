
let result = document.querySelector(".calculator .results span");
let buttons = document.querySelectorAll(".calculator .buttons-holder div")
let resetButton = document.querySelector(".calculator .buttons-holder .reset-btn")


let listResult = [];
let textResult = "";
let lastResult = "";
let symbols = ["+","-","*","/"];

buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (!isNaN(this.dataset.value) | symbols.includes(this.dataset.value)) {
            // Show Numbers
            listResult = listResult.concat(this.dataset.value)
            textResult = listResult.join("");
            result.textContent = `${textResult}`
            // Delete useless sybmols
            // for (i = 0; i < listResult.length; i++) {
            //     if (listResult[i] === listResult[i + 1] && symbols.includes(listResult[i])) {
            //         listResult.pop()
            //         textResult = listResult.join("");
            //         result.textContent = `${textResult}`
            //         console.log(listResult)
            //     }
            // }
            // DOOOONNNNNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            for (n = 0; n < symbols.length; n++) {
                for (i = 0; i < listResult.length; i++) {
                    if (listResult[i + 1] === symbols[n] && symbols.includes(listResult[i])) {
                        listResult.pop()
                        textResult = listResult.join("");
                        result.textContent = `${textResult}`
                        console.log(listResult)
                    }
                }
            }
        } else if (this.dataset.value === "equal") {
                let firstNum = +(textResult.match(/(\d+)([\+ | \- | \/ | \*])(\d+)/i)[1]);
                let secondNum = +(textResult.match(/(\d+)([\+ | \- | \/ | \*])(\d+)/i)[3]);
                let symbol = textResult.match(/(\d+)([\+ | \- | \/ | \*])(\d+)/i)[2];
                switch (symbol) {
                    case "+":
                        console.log(firstNum + secondNum);
                        // replace
                        lastResult = textResult.replace(/\d+[\+ | \- | \/ | \*]\d+/ig, `${firstNum + secondNum}`);
                        listResult = [`${firstNum + secondNum}`];
                        // Show
                        result.textContent = `${lastResult}`
                        console.log(listResult);
                        break;
                    case "-":
                        // replace
                        lastResult = textResult.replace(/\d+[\+ | \- | \/ | \*]\d+/ig, `${firstNum - secondNum}`);
                        listResult = [`${firstNum - secondNum}`];
                        // Show
                        result.textContent = `${lastResult}`
                        break;
                    case "*":
                        // replace
                        lastResult = textResult.replace(/\d+[\+ | \- | \/ | \*]\d+/ig, `${firstNum * secondNum}`);
                        listResult = [`${firstNum * secondNum}`];
                        // Show
                        result.textContent = `${lastResult}`
                        break;
                    case "/":
                        // replace
                        lastResult = textResult.replace(/\d+[\+ | \- | \/ | \*]\d+/ig, `${firstNum / secondNum}`);
                        listResult = [`${firstNum / secondNum}`];
                        // Show
                        result.textContent = `${lastResult}`
                        break;
                    } 
                    result.textContent = `${lastResult}`
        } else if ( this.dataset.value == "reset") {
                listResult = [];
                lastResult = "";
                result.textContent = `${lastResult}`
        } else if ( this.dataset.value == "delete") {
            listResult.pop()
            console.log(listResult)
            textResult = listResult.join("");
            result.textContent = `${textResult}`
        }
    });
});
