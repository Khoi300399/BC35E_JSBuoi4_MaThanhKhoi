function sapXepTangDan(a, b, c) {
    var a;
    var b;
    var c;
    var ketQua = "";
    if (a > b && a >= c && b >= c) {
        ketQua += a + " >" + b + " >" + c;
    }
    else if (a > b && a >= c && c >= b) {
        ketQua += a + " >" + c + " >" + b;
    }
    else if (b > a && b >= c && a >= c) {
        ketQua += b + " >" + a + " >" + c;
    }
    else if (b > a && b >= c && c >= a) {
        ketQua += b + " >" + c + " >" + a;
    }
    else if (c > a && c >= b && a >= b) {
        ketQua += c + " >" + a + " >" + b;
    }
    else {
        ketQua += c + " >" + b + " >" + a;
    }
    return ketQua;
};

function btnSapXepTangDan() {
    var num_1 = document.getElementById("num_1").value * 1;
    var num_2 = document.getElementById("num_2").value * 1;
    var num_3 = document.getElementById("num_3").value * 1;
    var ketQua = sapXepTangDan(num_1, num_2, num_3);
    document.getElementById("showSapXepTangDan").innerHTML = ketQua;
}

