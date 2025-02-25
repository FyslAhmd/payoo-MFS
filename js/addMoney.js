document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const pin = document.getElementById('account-pin').value;

    if(pin === '1234') {
        const mainAmount  = parseFloat(document.getElementById('main-amount').innerText);
        const sum = mainAmount + amount;
        document.getElementById('main-amount').innerText = sum;
    }
    else {
        alert('Invalid Pin');
    }
})