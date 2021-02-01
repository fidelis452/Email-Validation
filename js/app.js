//variables
const sendBtn = document.getElementById("sendBtn"),
email =  document.getElementById("email"),
subject = document.getElementById("subject"),
message = document.getElementById("message"),
resetBtn =document.getElementById("resetBtn"),
sendEmailForm = document.getElementById("sendEmailForm");
//event listener
eventListeners();
function eventListeners(){
     //App init
     document.addEventListener('DOMContentLoaded', appInit);
      //validate the fields
      email.addEventListener('blur', validateField);
      subject.addEventListener('blur', validateField);
      message.addEventListener('blur', validateField);
      //send email and reset button
      sendEmailForm.addEventListener('submit', sendEmail)
      resetBtn.addEventListener('click', resetForm);
}
//functions
//app initialization
function appInit(){
     sendBtn.disabled =  true;
}
function sendEmail(e){
     e.preventDefault();
     //show the spinner
      const spinner = document.querySelector('#spinner');
      spinner.style.display = 'block';
      //show the iamge
      const sendEmailImg = document.createElement('img');
      sendEmailImg.src = 'img/mail.gif';
      sendEmailImg.style.display = 'block';
      //hide the spinner then display the email check
      setTimeout(function(){
          spinner.style.display = "none"; 
          document.querySelector('#loaders').appendChild(sendEmailImg);
           //after 5sec reset the form
            setTimeout(function(){
                 sendEmailForm.reset();
                 sendEmailImg.remove();
            })
      },3000);
}

//validate the fields
function validateField(){
     let errors;

     //validate the length of the field
     validateLength(this)
     //validate email
     if(this.type === "email"){
          validateEmail(this);
     }
     //both returns error then check if there is any error
     errors =  document.querySelectorAll('.error');
     //check the inputs are not empty
     if(email.value !== "" && subject.value !== "" && message.value !== ""){
          if(errors.length === 0){
               sendBtn.disabled = false;
          }
     }
}
//validate by length
function validateLength(field){
     if(field.value.length > 0 ){
          field.style.borderBottomColor = "Green";
          field.classList.remove("errors");
     }else{
          field.style.borderBottomColor = "red";
          field.classList.add("errors");
     }
}
//check  @ sign in email
function validateEmail(field){
     let emailText = field.value;
     
     if(emailText.indexOf('@gmail.com') !== -1) {
          field.style.borderBottomColor = "Green";
          field.classList.remove("errors");
     }else{
          field.style.borderBottomColor = "red";
          field.classList.add("errors");
     }
}

