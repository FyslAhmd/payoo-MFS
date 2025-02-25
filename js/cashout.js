document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('cash-out-amount').value);
    const pin = document.getElementById('cashout-account-pin').value;

    if(pin === '1234') {
        const mainAmount  = parseFloat(document.getElementById('main-amount').innerText);
        const sub = mainAmount - amount;
        document.getElementById('main-amount').innerText = sub;
    }
    else {
        alert('Invalid Pin');
    }
})