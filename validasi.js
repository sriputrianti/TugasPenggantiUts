const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from inputs
    const usernameValue = username.value
    const passwordValue = password.value

     if(usernameValue === '') {
         //show error
        //add error class
        setErrorFor(username, 'Tidak Boleh Kosong');
    }else {
        //add success class
         setSuccessFor(username);
        }
        if(passwordValue === '') {
           setErrorFor(password, 'Tidak Boleh Kosong');
       }else {
            setSuccessFor(password);
           }
}

function setErrorFor(input,message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error massage inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}