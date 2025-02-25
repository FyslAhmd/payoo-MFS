//login
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const accountNumber =  document.getElementById('account-number').value;
    const accountPin = document.getElementById('account-pin').value;
    console.log(accountNumber,accountPin);

    if(accountNumber.length === 11 && accountPin === '1234') {
        window.location.href = 'main.html';
    }
    else {
        alert('need valid account');
    }
});