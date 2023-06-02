    function dontSubmit(event) {

        const validName = inputName();
        const validNumber = inputNumber();
        const validDate = yearMonthDisplay();
        const validCVC = inputCVC();

        if(validName && validNumber && validDate && validCVC){
            const form = document.querySelector('form');
            const congrat = document.querySelector('.thank-you-div');

            form.style.display = 'none';
            congrat.classList.remove('hidden');
        } else{
            event.preventDefault();
        }
    }

const submitButton = document.getElementById('sub-button');
submitButton.addEventListener('click', dontSubmit);

function inputName() {
    const holderName = document.getElementById('cardholder-name');
    const error = document.getElementById('name-error-message');
    const display = document.getElementById('holder-name-display');
    const name = holderName.value.trim();


    if (name === '') {
        error.textContent = "Can't be blank";
        error.classList.add('error-message');
        holderName.classList.add('error');
        display.textContent = "Jane Appleseed";
    } else if (/\d/.test(name)) {
        error.textContent = "Wrong format, letters only";
        error.classList.add('error-message');
        holderName.classList.add('error');
    } else if (name.length < 4) {
        error.textContent = "We need your full name";
        error.classList.add('error-message');
        holderName.classList.add('error');
    } else {
        display.textContent = name;

        error.textContent = '';
        error.classList.remove('error-message');
        holderName.classList.remove('error');
    }
    
    return name !== '' && !/\d/.test(name) && name.length >= 4;
}

function inputNumber() {
    const cardNumber = document.getElementById('card-number');
    let numberFormat = cardNumber.value.replace(/\s/g, '');

    const numberError = document.getElementById('number-error-message');
    const numberDisplay = document.getElementById('card-number-display');
    const number = numberFormat.trim();

    console.log(cardNumber);

    numberFormat = number;
    cardNumber.value = numberFormat;

    numberDisplay.textContent = cardNumber.value.replace(/(\d{4}(?=\d))/g, '$1 ');


    if (number === '') {
        numberError.textContent = "Can't be blank";
        numberError.classList.add('error-message');
        cardNumber.classList.add('error');
        numberDisplay.textContent = "0000 0000 0000 0000";
    } else if (!/^[0-9\s]+$/.test(number)) {
        numberError.textContent = 'Wrong format, numbers only';
        numberError.classList.add('error-message');
        cardNumber.classList.add('error');
    } else if (number.length > 16) {
        numberError.textContent = "Wrong format, only 16 card digits";
        numberError.classList.add('error-message');
        cardNumber.classList.add('error');
    } else if (number.length < 16) {
        numberError.textContent = "Wrong format, put all the digits";
        numberError.classList.add('error-message');
        cardNumber.classList.add('error');
    } else {
        numberError.textContent = '';
        numberError.classList.remove('error-message');
        cardNumber.classList.remove('error');
    }
    return number !== '' && /^[0-9\s]+$/.test(number) && number.length === 16;
}

function yearMonthDisplay() {
    const monthInput = document.getElementById('expiration-month');
    const yearInput = document.getElementById('expiration-year');
    const dateDisplay = document.getElementById('exp-date-display');
    const expDateError = document.getElementById('exp-error-message');

    const month = monthInput.value.trim();
    const year = yearInput.value.trim();

    dateDisplay.textContent = `${month}/${year}`;

    const actualYear = new Date().getFullYear();
    const lastDigitYear = actualYear.toString().slice(-2);
    const actualMonth = new Date().getMonth() + 1;

    if (month === '' || year === '') {
        expDateError.textContent = "Can't be blank";
        expDateError.classList.add('error-message');
        monthInput.classList.add('error');
        yearInput.classList.add('error');
        dateDisplay.textContent = "00/00";
    } else if(!/^\d{2}$/.test(month) || !/^\d{2}$/.test(year)){
        expDateError.textContent = "Invalid format, put the date in 2 digits each";
        expDateError.classList.add('error-message');
        monthInput.classList.add('error');
        yearInput.classList.add('error');
        dateDisplay.textContent = "00/00";
        console.log(month);
        console.log(year);
    } else if(parseInt(month) < 1 || parseInt(month) > 12){
        expDateError.textContent = "Invalid month value";
        expDateError.classList.add('error-message');
        monthInput.classList.add('error');
        yearInput.classList.add('error');
        dateDisplay.textContent = "00/00";
    } else if(parseInt(year) < parseInt(lastDigitYear) || parseInt(year) === parseInt(lastDigitYear) && parseInt(month) < actualMonth){
        expDateError.textContent = "Invalid date";
        expDateError.classList.add('error-message');
        monthInput.classList.add('error');
        yearInput.classList.add('error');
        dateDisplay.textContent = "00/00";

        console.log('Invalid date condition');
        console.log('Year:', year);
        console.log('Month:', month);
    } else {
        expDateError.textContent = '';
        expDateError.classList.remove('error-message');
        monthInput.classList.remove('error');
        yearInput.classList.remove('error');

        return true
    }
}

function inputCVC() {
    const cvc = document.getElementById('cvc');
    const cvcError = document.getElementById('cvc-error-message');
    const cvcDisplay = document.getElementById('cvc-display');
    const cvcF = cvc.value.trim();

    if (cvcF === '') {
        cvcError.textContent = "Can't be blank";
        cvcError.classList.add('error-message');
        cvc.classList.add('error');
        cvcDisplay.textContent = "123";
    } else if (cvcF.length < 3 || cvcF.length > 3) {
        cvcError.textContent = "Wrong format, need 3 digits";
        cvcError.classList.add('error-message');
        cvc.classList.add('error');
    } else if (/[^\d]/.test(cvcF)) {
        cvcError.textContent = "Wrong format, numbers only";
        cvcError.classList.add('error-message');
        cvc.classList.add('error');
    } else {
        cvcDisplay.textContent = cvcF;

        cvcError.textContent = '';
        cvcError.classList.remove('error-message');
        cvc.classList.remove('error');

        return true
    }
}