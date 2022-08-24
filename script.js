// for Card Number
var cardNumber = document.getElementById('card-number')
var cardNumVal = cardNumber.innerText;
var inputNumber = document.getElementById('number')
var messageX = document.getElementsByClassName('input-message')
var letters = /[a-zA-Z]/

// for Card Name
var cardName = document.getElementById('cardholder-name')
var cardNameVal = cardName.innerText;
var inputName = document.getElementById('name')

// for Card Date 
var cardDateMM = document.getElementById('month')
var cardDateYY = document.getElementById('year')
var cardDateMMval = cardDateMM.innerText
var cardDateYYval = cardDateYY.innerText
var inputDateMM = document.getElementById('dateMM')
var inputDateYY = document.getElementById('dateYY')

// for Back Card CVC
var cardBackCVC = document.getElementById('card-cvc')
var cardBackCVCval = cardBackCVC.innerText
var inputCardBackCVC = document.getElementById('cvc')

// for Button
var button = document.getElementById('confirm')
inputNumber.addEventListener('keyup', numDisplay)
inputNumber.addEventListener('keyup', numOnly)
button.addEventListener('click', buttonClick)

// for Card Name (eventListener) 
inputName.addEventListener('keyup', nameDisplay)

// for Card Date (eventListener)
inputDateMM.addEventListener('keyup', dateDisplayMM)
inputDateYY.addEventListener('keyup', dateDisplayYY)
inputDateMM.addEventListener('focusout', emptyInputMM)
inputDateYY.addEventListener('focusout', emptyInputYY)

// for Back Card CVC
inputCardBackCVC.addEventListener('keyup', cvcDisplay)

// For displaying input to card
function nameDisplay(e){
    let name = e.target.value;
    cardName.innerText = name.toUpperCase()

    if (name == "") {
        cardName.innerText = cardNameVal
    } else {
        return false;
    }
}

function numDisplay(e) {
    let number = e.target.value
    cardNumber.innerText = number

    if (number == "") {
        cardNumber.innerText = cardNumVal
    } else {
        return false;
    }
}

function dateDisplayMM(e) {
    let MM = e.target.value
    cardDateMM.innerText = MM
    // let mmDate = MM + cardDateVal.slice(2,5);
    // cardDate.innerText = mmDate
    
    if (MM == "") {
        cardDateMM.innerText = cardDateMMval
    } else if (MM.length == 1) {
        cardDateMM.innerText = '0' + MM
    }
    else {
        return false;    
}
}

function dateDisplayYY(e) {
    let YY = e.target.value
    cardDateYY.innerText = YY
    // let mmDate = cardDateVal.slice(0,3) + YY ;
    // cardDate.innerText = mmDate
    
    if (YY == "") {
        cardDateYY.innerText = cardDateYYval
    } else if (YY.length == 1) {
        cardDateYY.innerText = '0' + YY
    }
     else {
        return false;
    }
}

function cvcDisplay(e) {
    let cvc = e.target.value
    cardBackCVC.innerText = cvc

    if (cvc == "") {
        cardBackCVC.innerText = cardBackCVCval
    } else if (cvc.length == 1){
        cardBackCVC.innerText = '0' + '0' + cvc
    } else if (cvc.length == 2){
        cardBackCVC.innerText = '0' + cvc
    }
}



// For displaying error message when input is wrong format or empty

// for 
function numOnly() {
    let eValue = inputNumber.value;

    if (eValue.match(letters)) {
        messageX[0].style.display ='block'
        inputNumber.style.border = '1px solid var(--red-input)'
        return true;
    } else {
        messageX[0].style.display ='none'
        inputNumber.style.border = '1px solid var(--gray-violet-100)'
    }
}

// function emptyInputMM() {
//     if (dateMM.value == ""){
//         messageX[1].style.display ='block'
//         inputDateMM.style.border = '1px solid var(--red-input)'
//     } else if (dateMM.value.length != 0){
//         // messageX[1].style.display ='block'
//         inputDateYY.style.border = '1px solid var(--red-input)'
//     } else if (dateMM.value == "" && dateYY.value == "") {
//         messageX[1].style.display ='block'
//         inputDateMM.style.border = '1px solid var(--red-input)'
//         inputDateYY.style.border = '1px solid var(--red-input)'
//     } else {
//         messageX[1].style.display ='none'
//         inputDateYY.style.border = '1px solid var(--gray-violet-100)'
//         inputDateMM.style.border = '1px solid var(--gray-violet-100)'
//     }
// }

function emptyInputYY() {
    if (inputDateYY.value.length == 0) {
        messageX[1].style.display ='block'
        inputDateYY.style.border = '1px solid var(--red-input)'
        return true;
    } else if(inputDateYY.value.length !== 0 && inputDateMM.value.length == 0) {
        messageX[1].style.display ='block'
        inputDateYY.style.border = '1px solid var(--gray-violet-100)'
    } else if(inputDateYY.value.length !== 0) {
        messageX[1].style.display ='none'
        inputDateYY.style.border = '1px solid var(--gray-violet-100)'
    }
}

function emptyInputMM() {
    if (inputDateMM.value.length == 0) {
        messageX[1].style.display ='block'
        inputDateMM.style.border = '1px solid var(--red-input)'
        return true;
    } else if(inputDateMM.value.length !== 0 && inputDateYY.value.length == 0) {
        messageX[1].style.display ='block'
        inputDateMM.style.border = '1px solid var(--gray-violet-100)'
    } else if(inputDateMM.value.length !== 0) {
        messageX[1].style.display ='none'
        inputDateMM.style.border = '1px solid var(--gray-violet-100)'
    }
}

function emptyCVC() {
    if (inputCardBackCVC.value.length == 0) {
        messageX[2].style.display ='block'
        inputCardBackCVC.style.border = '1px solid var(--red-input)'
        return true;
    } else {
        messageX[2].style.display ='none'
        inputCardBackCVC.style.border = '1px solid var(--gray-violet-100)'
    }
}

// function invalidInput() {
//     if (inputDateYY.value.length == 0) {
//         return true
//     } else {
//         return false
//     }
// }

function buttonClick() {
    let form = document.getElementById('form-container');
    let completeState = document.getElementById('complete')
    if(numOnly() == true || emptyInputYY() == true || emptyInputMM() == true || emptyCVC() == true ) {
        messageX[0].style.display ='block'
        inputNumber.style.border = '1px solid var(--red-input)'
        messageX[1].style.display ='block'
        inputDateYY.style.border = '1px solid var(--red-input)'
        messageX[1].style.display ='block'
        inputDateMM.style.border = '1px solid var(--red-input)'
        messageX[2].style.display ='block'
        inputCardBackCVC.style.border = '1px solid var(--red-input)'
    } else {
        form.style.display = 'none'
        completeState.style.display = 'flex'
    }
    
    

    // emptyInputMM()
    // emptyInputYY()
    // emptyCVC()
}

// function wrongFormat1() {
//     let inputVal = inputNumber.value;
//     if (inputVal.match(letters)) {
//         messageX[1].style.display ='block'
//         inputNumber.style.border = '1px solid var(--red-input)'
//         console.log(inputNumber.value);
//         // inputNumber.style.fouc = '2px solid var(--red-input)'
//         // alert(inputNumber.value);
//     } else {
//         messageX[1].style.display ='none'
//         inputNumber.style.border = '1px solid var(--gray-violet-100)'
//         console.log(inputNumber.value);
//     }
// }







// For adding space every 4 numbers
inputNumber.addEventListener('keydown', (e) => {
    e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, '$1 $2')
})
/* Jquery */
// $('#number').keyup(function() {
//   $(this).val($(this).val().replace(/(\d{4})(\d+)/g, '$1 $2'))
// });