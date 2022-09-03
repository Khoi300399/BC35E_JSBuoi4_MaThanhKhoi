function doanTamGiac(a, b, c) {
    var a, b, c;
    var ketQua = "";
    if (a + b > c && a + c > b && c + b > a && a != 0 && b != 0 && c != 0) {
        if (a ** 2 == b ** 2 + c ** 2 || b ** 2 == a ** 2 + c ** 2 || c ** 2 == b ** 2 + a ** 2) {
            ketQua += "Là tam giác vuông";
        }
        if (a == b && a != c || a == c && a != b || b == c && b != a) {
            ketQua += "Là tam giác cân";
        }
        if (a == c && a == b) {
            ketQua += "Là tam giác đều";
        }
    }
    else {
        ketQua += "Vui lòng nhập đúng độ dài tam giác";
    }
    return ketQua;
}

function btnDoanTamGiac() {
    var canh_1 = document.getElementById("canh_1").value * 1;
    var canh_2 = document.getElementById("canh_2").value * 1;
    var canh_3 = document.getElementById("canh_3").value * 1;
    var ketQua = doanTamGiac(canh_1, canh_2, canh_3);
    document.getElementById("showDoanTamGiac").innerHTML = ketQua;
}