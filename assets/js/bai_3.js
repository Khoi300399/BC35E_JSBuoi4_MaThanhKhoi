function demSoChanLe(a, b, c) {
    var dem = 0;
    var a, b, c;
    if (a % 2 == 0) {
        dem++;
    }
    if (b % 2 == 0) {
        dem++;
    }
    if (c % 2 == 0) {
        dem++;
    }
    return dem;
};

function btnDemSoChanLe() {
    var num_4 = document.getElementById("num_4").value * 1;
    var num_5 = document.getElementById("num_5").value * 1;
    var num_6 = document.getElementById("num_6").value * 1;
    var ketQua = demSoChanLe(num_4, num_5, num_6);
    var show = "có " + (3 - ketQua) + " số lẻ và " + ketQua + " số chẵn";
    document.getElementById("showDemSoChanLe").innerHTML = show;
};