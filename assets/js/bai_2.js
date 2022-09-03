function guiLoiChao(n) {
    var n;
    var ketQua = "";
    switch (n) {
        case 1: ketQua += "Chào người lạ ơi"; break;
        case 2: ketQua += "Chào Bố"; break;
        case 3: ketQua += "Chào Mẹ"; break;
        case 4: ketQua += "Chào Anh Trai"; break;
        case 5: ketQua += "Chào Em Gái"; break;
    }
    return ketQua;
};

function btnGuiLoiChao() {
    var mem = document.getElementById("mem").value * 1;
    var ketQua = guiLoiChao(mem);
    document.getElementById("showGuiLoiChao").innerHTML = ketQua;
};