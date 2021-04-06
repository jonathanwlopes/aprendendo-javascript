// DOM
const $form = document.querySelector('.form')
const $signTitle = document.querySelector('.wrapper-title')
const $fristName = document.querySelector('#frist-name')
const $lastName = document.querySelector('#last-name')
const $emailAddress = document.querySelector('#email-address')
const $password = document.querySelector("#password");
const $confirmPassword = document.querySelector("#confirm-password");
const $btnSubmit = document.querySelector('.submit')
const $msgSuccess = document.querySelector('.msg-success')

//Check password
const toCheckPassword = () => {
  if ($password.value != $confirmPassword.value) {
    $confirmPassword.setCustomValidity("Invalid Password");
  } else {
    $confirmPassword.setCustomValidity("");
  }
};
$password.onchange = toCheckPassword;
$confirmPassword.onkeyup = toCheckPassword;
$btnSubmit.addEventListener('click',()=>{
  toCheckPassword()
  msgSuccess()
})

//Button Submit Active
const checkSubmit = () => {
  if($fristName.value == '' || $lastName.value == '' || $emailAddress.value == '' || $password.value =='' || $confirmPassword == ''){
    $btnSubmit.setAttribute('disabled', 'disabled')
  } else{
    $btnSubmit.setAttribute('enable', 'enable')
  }
}

function init(){
checkSubmit()
}
init();


//Message Success
const msgSuccess = () => {
  $msgSuccess.classList.add('active')
  $signTitle.remove()
  $form.remove() 
}


