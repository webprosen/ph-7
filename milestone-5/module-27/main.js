document.getElementById('btn-submit').addEventListener('click', function(event){
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    const email = emailField.value;
    const password = passwordField.value;

    console.log(email, password);

    if(email === 'webprosen@gmail.com' && password === 'prosen224'){

        window.location.href = "bank.html";
        
    } else {
        alert('Wrong Credentials');
    }
});