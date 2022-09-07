const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

function Redirect() 
            {  
                window.location="http://yosef100.github.io/chavrusafinder/home"; 
            }
// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

   
     
     setTimeout('Redirect()', 1500); 

        
       
       
        
  
})
