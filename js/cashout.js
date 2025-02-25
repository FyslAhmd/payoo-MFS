document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = getInputValueID('cash-out-amount');
    const pin = getInputValueID('cashout-account-pin');
    const accountNumber = getInputValueID('account-number-cashout');

    if(pin === 1234) {
        const mainAmount = getTextValueID('main-amount');
        if(amount > mainAmount) {
            alert('Invalid Amount');
            return;
        }
        const sub = mainAmount - amount;
        setInnerText('main-amount', sub);

        const p = document.createElement('p');
        p.innerText = `You have successfully cashed out $${amount} from your account number ${accountNumber}`;
        const container = document.getElementById('transaction-container');
        container.appendChild(p);
    }
    else {
        alert('Invalid Pin');
    }
});