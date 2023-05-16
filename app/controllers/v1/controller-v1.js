export function getInfo() {
  let id = document.querySelector("#foodID").value;
  let name = document.querySelector("#tenMon").value;
  let type = document.querySelector("#loai").value;
  let price = document.querySelector("#giaMon").value * 1;
  let discount = document.querySelector("#khuyenMai").value * 1;
  let status = document.querySelector("#tinhTrang").value;
  let img = document.querySelector("#hinhMon").value;
  let desc = document.querySelector("#moTa").value;
  return {
    id,
    name,
    type,
    price,
    discount,
    status,
    img,
    desc,
  };
}

export function showInfo(food) {
  document.querySelector("#imgMonAn").src = food.img;
  document.querySelector("#spMa").innerText = food.id;
  document.querySelector("#spTenMon").innerText = food.name;
  document.querySelector("#spLoaiMon").innerText =
    food.type == "loai1" ? "Chay" : "Mặn";
  document.querySelector("#spGia").innerText = food.price;
  document.querySelector("#spKM").innerText = food.discount;
  document.querySelector("#spGiaKM").innerText = food.tinhGiaKM();
  document.querySelector("#spTT").innerText =
    food.status == "0" ? "Hết" : "Còn";
  document.querySelector("#spMoTa").innerText = food.desc;
}
