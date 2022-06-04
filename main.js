let taxIncome = 0;
calculate.onclick = function () {
    var fullName = document.getElementById('fullName').value;
    var dependent = Number (document.getElementById('dependent').value);
    var income = Number (document.getElementById('totalIncome').value);
    taxIncome = income - 4000000 - dependent * 1600000;
    let money = Intl.NumberFormat('en-Us');
    document.getElementById('result').innerHTML = 'Họ Tên: ' + fullName + ';' + ' Thuế thu nhập cá nhân: ' + money.format(taxCal(taxIncome)) + '  VND';
}

function taxCal(taxIncome) {
    const Amounts = [60e+6, 60e+6, 90e+6, 174e+6, 240e+6, 336e+6, 500e+6];
    const Taxs = [5, 10, 15, 20, 25, 30, 35];
    let totalPay = 0;

    if (taxIncome < Amounts[0] || !Number.isInteger(taxIncome)) {
		return 0;
	}

    var inLoop = taxIncome;

    for (i = 0; i < Amounts.length; i++) {
        if (inLoop > Amounts[i] && i < 6) {
            inLoop -= Amounts[i];
        } else {
            totalPay = taxIncome * Taxs[i] / 100;
            break;
        }
    }

    return totalPay;
}
