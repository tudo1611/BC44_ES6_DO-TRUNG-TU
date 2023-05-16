import { showInfo, getInfo } from "./controller-v1.js";
import { Food } from "../../models/v1/model.js";

let addFood = document.querySelector("#btnThemMon");
addFood.addEventListener('click', function() {
    console.log('yes');
    let data = getInfo();
    let { id, name, type, price, discount, status, img, desc} = data;
    let food = new Food (
        id,
        name,
        type,
        price,
        discount,
        status,
        img,
        desc
    )
    showInfo(food);
    console.log('food: ', food);
})

// window.addFood = addFood;