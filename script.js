document.addEventListener('DOMContentLoaded', () => { // loads this before everything else
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const expenseSummary = document.getElementById('expense-summary');
    const incomeForm = document.getElementById('income-form');
    const incomeList = document.getElementById('income-list');
    const incomeSummary = document.getElementById('income-summary');

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;

        const expense = { id: Date.now(), amount, category, description };
        expenses.push(expense);
        displayExpenses();
        displaySummary();
        calculateDifference();
        expenseForm.reset();
    });

    incomeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const amount2 = parseFloat(document.getElementById('amount2').value);
        const category2 = document.getElementById('category2').value;
        const description2 = document.getElementById('description2').value;

        const income = { id: Date.now(), amount: amount2, category: category2, description: description2 };
        incomes.push(income);


        displayIncome();
        displaySummaryIncome();
        calculateDifference();
        incomeForm.reset();
    });
    function calculateDifference() {
        const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const incomeMinusExpenses = totalIncome - totalExpenses;
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = balance = €${ incomeMinusExpenses.toFixed(2) };

    }
});