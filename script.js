let walletBalance = 0;

// Set a predefined password (for demonstration purposes)
const withdrawalPassword = "mypassword123";

// Handle Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    let depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (depositAmount > 0) {
        walletBalance += depositAmount;
        document.getElementById('balance-info').textContent = `Wallet Balance: $${walletBalance.toFixed(2)}`;
    } else {
        alert("Enter a valid amount to deposit.");
    }
});

// Handle Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    let withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    let enteredPassword = document.getElementById('withdraw-password').value;

    // Validate the entered password
    if (enteredPassword === withdrawalPassword) {
        if (withdrawAmount > 0 && withdrawAmount <= walletBalance) {
            walletBalance -= withdrawAmount;
            document.getElementById('balance-info').textContent = `Wallet Balance: $${walletBalance.toFixed(2)}`;
            alert("Withdrawal successful!");
        } else {
            alert("Insufficient funds or invalid amount.");
        }
    } else {
        alert("Incorrect password! Please try again.");
    }
});
