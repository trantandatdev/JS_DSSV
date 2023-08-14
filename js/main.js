var dssv = [];
var jsonData = localStorage.getItem("DSSV");
if (jsonData != null) {
  var list = JSON.parse(jsonData);
  dssv = list.map(function (item) {
    return new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.ly,
      item.hoa
    );
  });
  renderDSSV(dssv);
}

function themSv() {
  var sv = layThongTin();
  dssv.push(sv);
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);
  renderDSSV(dssv);
}

function xoaSv(id) {
  var index = timViTri(id, dssv);
  dssv.splice(index, 1);
  renderDSSV(dssv);
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);
}

function suaSv(id) {
  var index = timViTri(id, dssv);
  var sv = dssv[index];
  showThongTinLenForm(sv);
}

function capNhatSv() {
  var sv = layThongTin();
  var index = timViTri(sv.ma, dssv);
  dssv[index] = sv;
  renderDSSV(dssv);
}
