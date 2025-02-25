document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = getInputValueID('amount');
    const pin = getInputValueID('account-pin');
    const accountNumber = getInputValueID('account-number');

    if(amount < 0) {
        alert('Invalid Amount');
        return;
    }

    if(pin === 1234) {
        const mainAmount = getTextValueID('main-amount');
        const sum = mainAmount + amount;
        setInnerText('main-amount', sum);

        const p = document.createElement('p');
        p.innerText = `You have successfully added $${amount} to your account number ${accountNumber}`;
        const container = document.getElementById('transaction-container');
        container.appendChild(p);
    }
    else {
        alert('Invalid Pin');
    }
})