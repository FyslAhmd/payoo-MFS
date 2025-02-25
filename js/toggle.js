document.getElementById('cash-out').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function() {
    handleToggle('add-money', 'block');
    handleToggle('cash-out', 'none');
    handleToggle('transaction-history', 'none');
})

document.getElementById('cash-out-box').addEventListener('click', function() {
    handleToggle('add-money', 'none');
    handleToggle('cash-out', 'block');
    handleToggle('transaction-history', 'none');
})

document.getElementById("transaction-history-box").addEventListener("click", function() {
    handleToggle('add-money', 'none');
    handleToggle('cash-out', 'none');
    handleToggle('transaction-history', 'block');
});