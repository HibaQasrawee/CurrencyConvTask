var form = document.querySelector('.registerForm');
var resultText = document.querySelector('.result');
form.onsubmit = function (event) {
    event.preventDefault();
    var element = event.target.elements;
    var amountInput = element[0].value;
    var selectedCurrency = element[1].value;
    var result;

    if (selectedCurrency === 'dollar') {
        result = amountInput * 3.74;
    } else if (selectedCurrency === 'dinar') {
        result = amountInput * 5.2;
    } else {
        result = amountInput;
    }
    resultText.textContent = `Equivalent value: ${result} ${selectedCurrency}`;
    console.log(element);
};



