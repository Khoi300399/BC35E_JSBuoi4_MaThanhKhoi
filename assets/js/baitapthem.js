function nhuan(a) {
    if (a % 4 == 0 && a % 100 != 0) {
        //ktra=true
        //return ktra;
        return true;
    } else if (a % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
function ngayTrongThang(a, b) {
    //a là tháng
    //b là năm
    //ngayTrongThang(2,2020) ==> 29
    //ngayTrongThang(2,2021) ==> 28
    switch (a) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
            break;
        case 2:
            if (nhuan(b) == true) {
                return 29;
                break;
            } else {
                return 28;
                break;
            }
        case 4: case 6: case 9: case 11:
            return 30;
            break;
    }
}
document.getElementById("Find").onclick = function () {
    var ngay = document.getElementById("Ngay").value * 1;
    var thang = document.getElementById("Thang").value * 1;
    var nam = document.getElementById("Nam").value * 1;
    var nd = ngay;
    var nm = thang;
    var ny = nam;
    if (ngay > 0 && thang > 0 && nam > 0 && thang < 13 && ngay <= (ngayTrongThang(thang, nam))) {
        //Nếu kh rời vào th đặc biệt thì ngày giảm đi 1
        nd = ngay - 1;
        //Nếu tháng nhập vào khác 1 và ngày nhập vào =1 thì có các trường hợp như
        if (thang != 1 && ngay == 1) {
            //trường hợp tháng là tháng 2,4,6,8,9,11 thì ngày trc đó là 31
            if (thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang == 11) {
                nd = 31;
                nm = thang - 1;
            }
            //trường hợp tháng là tháng 3
            if (thang == 3) {
                if (nhuan(nam) == true) {
                    nd = 29;
                    nm = 2;
                } else {
                    nd = 28;
                    nm = 2;
                }
            }
            //trường hợp các tháng là 5,7,10,12
            if (thang == 5, thang == 7, thang == 10, thang == 12) {
                nd = 30;
                nm = thang - 1;
            }
            //Nếu tháng nhập vào là tháng 1 ngày 1 
        } else if (thang == 1 && ngay == 1) {
            nd = 31;
            ny = nam - 1;
            nm = 12;
        }
        var Kqua = "Ngày: " + nd + " Tháng: " + nm + " Năm: " + ny;
        document.getElementById("NgayTruocDo").innerHTML = "Ngày trước đó là:" + Kqua;
    } else {
        Kqua = "Mời nhập lại ngày nha!";
        document.getElementById("NgayTruocDo").innerHTML = Kqua;
    }
    nd = ngay;
    nm = thang;
    ny = nam;
    if (ngay > 0 && thang > 0 && nam > 0 && thang < 13 && ngay <= (ngayTrongThang(thang, nam))) {
        nd = ngay + 1;
        if (thang != 12 && ngay == ngayTrongThang(thang, nam)) {
            nd = 1;
            mm = thang + 1;
        } else if (thang == 12 && ngay == ngayTrongThang) {
            nd = 1;
            ny = nam + 1;
            nm = 1;
        } else if (thang == 2) {
            if (nhuan(nam) == true) {
                if (ngay == 29) {
                    nd = 1;
                    nm = thang + 1;
                }
            } else {
                if (ngay == 28) {
                    nd == 1;
                    nm = thang + 1;
                }
            }
        }
        Kqua = "Ngày: " + nd + " Tháng: " + nm + " Năm: " + ny;
        document.getElementById("NgaySauDo").innerHTML = Kqua;
    } else {
        Kqua = "Mời nhập lại ngày nha!";
        document.getElementById("NgaySauDo").innerHTML = Kqua;
    }
}
/////Bai 2
document.getElementById("FindInMonth").onclick = function () {
    var thang = document.getElementById("ThangCanTim").value * 1;
    var nam = document.getElementById("NamCanTim").value * 1;
    if (thang < 13 && nam > 0) {
        var ketqua = ngayTrongThang(thang, nam);
        document.getElementById("NgayTrongThang").innerHTML = "Số ngày trong tháng là: " + ketqua;
    } else {
        var ketqua = "Mời nhập lại!"
        document.getElementById("NgayTrongThang").innerHTML = ketqua;
    }
}
///Bai 3
function chuyenTram(a) {
    switch (a) {
        case 1:
            return "một";
            break;
        case 2:
            return "hai";
            break;
        case 3:
            return "ba";
            break;
        case 4:
            return "bốn";
            break;
        case 5:
            return "năm";
            break;
        case 6:
            return "sáu";
            break;
        case 7:
            return "bảy";
            break;
        case 8:
            return "tám";
            break;
        case 9:
            return "chín";
            break;
    }
}
document.getElementById("ReadNumber").onclick = function () {
    var tram;
    var chuc;
    var donVi;
    var so = document.getElementById("Number").value * 1;
    tram = Math.floor(so / 100);
    so = so % 100;
    chuc = Math.floor(so / 10);
    donVi = so % 10;
    var kq = "";
    if (chuc == 1) {
        kq = chuyenTram(tram) + " trăm " + "mười " + chuyenTram(donVi);
    } else {
        kq = chuyenTram(tram) + " trăm " + chuyenTram(chuc) + " mươi " + chuyenTram(donVi);
    }

    document.getElementById("NumberAbc").innerHTML = kq;
}
//Bai 4
function soSanh(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}
document.getElementById("HowFar").onclick = function () {
    var truonghoc__x = document.getElementById("X-school").value * 1;
    var truonghoc__y = document.getElementById("Y-school").value * 1;

    var hocsinh1__x = document.getElementById("X-std1").value * 1;
    var hocsinh1__y = document.getElementById("Y-std1").value * 1;

    var hocsinh2__x = document.getElementById("X-std2").value * 1;
    var hocsinh2__y = document.getElementById("Y-std2").value * 1;

    var hocsinh3__x = document.getElementById("X-std3").value * 1;
    var hocsinh3__y = document.getElementById("Y-std3").value * 1;

    var kc1 = Math.sqrt((truonghoc__x - hocsinh1__x) * (truonghoc__x - hocsinh1__x) + (truonghoc__y - hocsinh1__y) * (truonghoc__y - hocsinh1__y));
    var kc2 = Math.sqrt((truonghoc__x - hocsinh2__x) * (truonghoc__x - hocsinh2__x) + (truonghoc__y - hocsinh2__y) * (truonghoc__y - hocsinh2__y));
    var kc3 = Math.sqrt((truonghoc__x - hocsinh3__x) * (truonghoc__x - hocsinh3__x) + (truonghoc__y - hocsinh3__y) * (truonghoc__y - hocsinh3__y));

    var kqua = soSanh(soSanh(kc1, kc2), kc3);
    if (kqua == kc1) {
        document.getElementById("Location").innerHTML = "Học sinh 1 xa nhất";
    }
    if (kqua == kc2) {
        document.getElementById("Location").innerHTML = "Học sinh 2 xa nhất";
    }
    if (kqua == kc3) {
        document.getElementById("Location").innerHTML = "Học sinh 3 xa nhất";
    }
    var a = 1 - -1;
    console.log(a);
}