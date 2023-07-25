
var span_thanks_sub
var dismiss_message

function DOMContentLoaded() {
    var email = localStorage.getItem('sub-email')
    span_thanks_sub = document.querySelector('span.email-thanking')
    dismiss_message = document.querySelector("button.button-dismiss-msg")
    span_thanks_sub.innerHTML = email
    dismiss_message.addEventListener('click', ()=>{
        window.location.href = 'index.html'
    })
}

addEventListener('DOMContentLoaded', DOMContentLoaded)