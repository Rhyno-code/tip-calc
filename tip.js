
// input 
const billInput = document.getElementById('bill-input')
const peopleInput = document.getElementById('people-input')
const tipInput = document.getElementById('tip-custom')
const tipBtns = document.querySelectorAll('.tip')
const peopleError = document.querySelector('.person-wrapper h4')
const billError = document.querySelector('.bill-wrapper h4')

//Reset
const resetBtn = document.querySelector('.reset-btn')

// Results
const tip = document.querySelector('.tip-per-person')
const totalTip = document.querySelector('.tip-total')
const billPerPerson = document.querySelector('.bill-per-person')
const totalBill = document.querySelector('.bill-total')







// Test
// billError.classList.add('error')
// peopleError.classList.add('error')
// billInput.addEventListener('change', () => {
//     console.log(billInput.value); 
// })
// peopleInput.addEventListener('change', () => {
//     console.log(peopleInput.value)
//     console.log(typeof peopleInput.value)
// })
// tipInput.addEventListener('change', () => {
//     console.log(tipInput.value)
// })
// tipBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('clicked');
//     })
// })






// Basic Structure of how the Codes will run 
billInput.addEventListener('change', setBillValue)
peopleInput.addEventListener('change', setPeopleValue)
tipInput.addEventListener('change', setCustomValue)


tipBtns.forEach(btn => {
    btn.addEventListener('click', handleTip)
})

resetBtn.addEventListener('click', reset)








// Give Default Values for your Variables (useful when you reset)
let billValue = 0.00
let tipValue = 0.05 //default value 5% btn is active
let peopleValue = 1














// Function to validate Floats and Integers 
function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/
    return s.match(rgx)
}

function validateInt(s) {
    var rgx = /^[0-9]*$/
    return s.match(rgx)
}







// Function to get Bill Amount
function setBillValue() {


    billValue = Number(billInput.value)
    // console.log(billValue)
    // console.log(typeof billValue)

    if (billValue <= 0) {
        billError.classList.add('error')
        // reset all results outputs
        resetAllResults()
        // setTimeout(function () {
        //     billError.classList.remove('error')
        // }, 3000)
    } else if (billValue > 0) {
        billError.classList.remove('error')

        calculateTip()
    }

}







function handleTip(e) {
    tipBtns.forEach(btn => {
        //clear active state
        tipInput.classList.remove('active')
        btn.classList.remove('active')

        //set active state
        if (e.target.innerText == btn.innerText) {
            btn.classList.add('active')
            // Number Method to parse just the number
            tipValue = parseFloat(btn.innerText) / 100
            // console.log(tipValue)
            // console.log(typeof tipValue)
        }
    })



    //clear custom tip
    tipInput.value = ""

    calculateTip()

}









function setCustomValue() {

    tipValue = parseFloat(tipInput.value / 100)

    // remove active state from buttons
    tipBtns.forEach(btn => {
        btn.classList.remove('active')
    })

    tipInput.classList.add('active')
    // console.log(tipValue)
    // console.log(typeof tipValue)

    if (tipInput.value !== '') {
        calculateTip()
    }
    else if (billInput.value !== '') {
        calculateTip()
    }

}









function setPeopleValue() {
    // if (!validateInt(peopleInput.value)) {
    //     peopleInput.value = peopleInput.value.substring(0, peopleInput.value.length - 1)


    // }

    peopleValue = Number(peopleInput.value)
    // console.log(peopleValue)
    // console.log(typeof peopleValue)

    if (peopleValue <= 0) {
        peopleError.classList.add('error')
        // reset all results outputs
        resetAllResults()
        // setTimeout(function () {
        //     peopleError.classList.remove('error')
        // }, 3000)

    } else {
        peopleError.classList.remove('error')
        calculateTip()
    }

}









function calculateTip() {
    // if (peopleValue > 1) and (billValue > 0)
    if (peopleValue >= 1 && billValue >= 0) {

        let tipAmount = billValue * tipValue / peopleValue
        let totalTipAmount = billValue * tipValue

        // tip per person
        tip.innerText = tipAmount.toFixed(2)

        // total tip
        totalTip.innerText = totalTipAmount.toFixed(2)

        // bill per person 
        billPerPerson.innerText = ((billValue / peopleValue) + tipAmount).toFixed(2)

        // total bill 
        totalBill.innerText = (billValue + totalTipAmount).toFixed(2)
    }
}
















// reset all input fills
function resetAllInputs() {
    // resetBillValue()
    billInput.value = ''
    // resetTipValue()
    tipInput.value = ''
    // resetPeopleValue()
    peopleInput.value = ''
}

// reset all results fills
function resetAllResults() {
    tip.innerText = '0.00'
    totalTip.innerText = '0.00'
    billPerPerson.innerText = '0.00'
    totalBill.innerText = '0.00'
}


function reset() {
    // reset all input fills
    resetAllInputs()

    // reset all results outputs
    resetAllResults()

    // clear active state from tipInput and all % btns
    tipInput.classList.remove('active')
    tipBtns.forEach(btn => {
        btn.classList.remove('active')
    })
    // add active state to default 5% btn
    tipBtns[0].classList.add('active')
}









