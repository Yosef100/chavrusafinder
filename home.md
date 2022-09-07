<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>homepage</title>
        <style>
        </style>
    </head>
    <body>
    
    <h1>Chavrusa Finder</h1>
      <h2>Find your chavrusa here!</h2>
    
    <button id="clicker">Change Password</button>
    
    <script>
    function Redirect() 
    {  
         window.location="http://yosef100.github.io/chavrusafinder/changepass"
    } 
     
    
    // 1. Find and store the element we want to listen to events on.
    var clickerButton = document.getElementById("clicker");
    // 2. Define the function that will respond to the event.
    // callback 
    var onButtonClick = function() {
        //clickerButton.textContent = "Oh wow, you clicked me!";
        setTimeout('Redirect()', 1000);
    };
    // 3. Add the event listener for the element and function
    // anonymous "inline"
    clickerButton.addEventListener("click", onButtonClick);
    
    </script>
    </body>
</html>
