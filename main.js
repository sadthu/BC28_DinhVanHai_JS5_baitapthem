
// bài 1
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

//bài 2
let customerType = 0;
document.getElementById('connectNumber').style.display = 'none';

document.getElementById('customType').onchange = function () {
    myFucion ();
}

function myFucion () {
    customerType = +document.getElementById('customType').value;
    if (customerType == 2) {
        document.getElementById('connectNumber').style.display = 'block';
    } else {
        document.getElementById('connectNumber').style.display = 'none';
    }
}

cableBill.onclick = function () {
    var clientCode = document.getElementById('clientCode').value;
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    document.getElementById('result2').innerHTML = 'Mã khách hàng: ' + clientCode + '; ' + 'Tiền cáp: ' + dollarUS.format(cableCharge ()); 
}

function cableCharge () {
    const prices = [4.5, 20.5, 7.5, 15, 75, 50, 5];
    var channelPro = +document.getElementById('channelPro').value;
    var connectNumber = +document.getElementById('connectNumber').value;
    var total = 0;
    if (channelPro < 0 || !Number.isInteger(channelPro)) {
        channelPro = 0;
    }
    if (connectNumber < 0 || !Number.isInteger(connectNumber)) {
        return 0;
    }
    switch (customerType) {
        case 1: {
            total = prices[0] + prices[1] + prices[2] * channelPro;         
        }break;
        case 2: {
            total = prices[3] + prices[4] + prices[5] * channelPro;
            if (connectNumber > 10) {
                total += prices[6] * (connectNumber - 10);
            }
        }break;
        default: {
            alert('Chọn loại khách hàng');
        }
    }
    return total;
}