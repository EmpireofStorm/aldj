let answerMoney=Number(prompt("Ваш бюджет на месяц"));
let answerDate=prompt("Введите дату в формате YYYY-MM-DD");
let answerExpensesMonth=prompt("Введите обязательную статью расходов в этом месяце");
let answerExpensesNumber=Number(prompt("Во сколько это обойдется"));
let expenses={
    answerExpensesMonth: answerExpensesNumber
}
let optionalExpenses={};
let income={};
let appData={
    money: answerMoney,
    date: answerDate,
    savings: false,
    expensesInAppData: expenses,
    optionalExpensesInAppData: optionalExpenses,
    incomeInAppData: income
};
alert("Ваш бюджет на день-"+answerMoney/30);