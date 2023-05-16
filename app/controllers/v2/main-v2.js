// fetch data từ server và render

import { renderFoodList } from "./controller-v2.js";
import { Food } from "../../models/v1/model.js";
import { getInfo } from "../v1/controller-v1.js";

const BASE_URL = "https://643ff4b93dee5b763e2ab2bb.mockapi.io/food";

var idSelected = null;

let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    mothod: "GET",
  })
    .then((res) => {
      let foodArr = res.data.map((item) => {
        let { id, name, type, price, discount, status, img, desc } = item;
        let food = new Food(id, name, type, price, discount, status, img, desc);
        return food;
      });
      renderFoodList(foodArr);
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

//del food

let delFood = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      fetchFoodList();
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
window.delFood = delFood;
fetchFoodList();

//add food

let addFood = (id) => {
  let data = getInfo(id);
  console.log("data: ", data);
  let newFood = {
    name: data.name,
    type: data.type,
    discount: data.discount,
    img: data.img,
    desc: data.desc,
    price: data.price,
    status: data.status,
  };
  axios({
    url: BASE_URL,
    method: "POST",
    data: newFood,
  })
    .then((res) => {
      $("#exampleModal").modal("hide"); //tắt modal
      fetchFoodList();

      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
window.addFood = addFood;
fetchFoodList();

//update food

let editFood = (id) => {
  idSelected = id;
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
    .then((res) => {
      $("#exampleModal").modal("show"); //hiện modal
      //show data lên form
      let { id, name, type, price, discount, desc, status, img } = res.data;
      document.querySelector("#foodID").value = id;
      document.querySelector("#tenMon").value = name;
      document.querySelector("#loai").value = type ? "loai1" : "loai2";
      document.querySelector("#giaMon").value = price;
      document.querySelector("#khuyenMai").value = discount;
      document.querySelector("#tinhTrang").value = status ? "1" : "0";
      document.querySelector("#hinhMon").value = img;
      document.querySelector("#moTa").value = desc;
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
window.editFood = editFood;
fetchFoodList();

let updateFood = () => {
  axios({
    url: `${BASE_URL}/${idSelected}`,
    method: "PUT",
    data: getInfo(),
  })
    .then(function (res) {
      $("#exampleModal").modal("hide"); //tắt modal
      fetchFoodList();

      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};
window.updateFood = updateFood;
