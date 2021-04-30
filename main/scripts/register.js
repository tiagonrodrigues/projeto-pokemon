
// storing input from register-form
function store() {

    // Name and Password from the register-form
    var username = document.getElementById('username')
    var pw = document.getElementById('pw');

    localStorage.setItem('username', username.value);
    localStorage.setItem('pw', pw.value);
    alert('sucesso')

}