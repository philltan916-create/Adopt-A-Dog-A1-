let balance = 1000;
 
let choice;

while (choice !== "Q") {
    choice = prompt(
        "Choose an action:\n" +
        "Q = Quit\n" +
        "W = Withdraw\n" +
        "D = Deposit\n" +
        "B = View Balance"
    );

    choice = choice.toUpperCase();

    if (choice === "W") {
        let withdrawAmount = Number(
            prompt("Enter amount to withdraw:")
        );

        if (withdrawAmount > balance) {
            alert("Insufficient funds.");
        } else {
            balance -= withdrawAmount;
            alert("Withdrawal successful.");
        }

    } else if (choice === "D") {
        let depositAmount = Number(
            prompt("Enter amount to deposit:")
        );

        balance += depositAmount;
        alert("Deposit successful.");

    } else if (choice === "B") {
        alert("Current balance: $" + balance);

    } else if (choice === "Q") {
        alert("Program ended.");

    } else {
        alert("Invalid option. Try again.");
    }
}