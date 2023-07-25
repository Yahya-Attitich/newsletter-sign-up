
var emailInput 
var emailErrorh4 
var submitButton = document.getElementsByClassName('subscribe-newsletter')


const emailRegex =
 new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

function ButtonClickSubmit(ev){
    const emailEntry = emailInput.value
    console.log('ajhdjaskj')
    if (emailEntry.match(emailRegex)) {
        localStorage.setItem('sub-email', emailInput.value)
        window.location.href = 'success.html'
    }else {
        emailInput.classList.add('error-email-entry')
        emailErrorh4.style.visibility = "visible"

        setTimeout(() => {
            emailInput.classList.remove('error-email-entry')
            emailErrorh4.style.visibility = "hidden"
        }, 3000)
    }
}
function DOMContentLoaded() {
    emailInput = document.getElementById('email-entry')
    submitButton = submitButton[0]
    emailErrorh4 = document.getElementsByTagName('h4')[0]
    submitButton.addEventListener('click', ButtonClickSubmit)
}

addEventListener("DOMContentLoaded", DOMContentLoaded)