export let renderFoodList = (foodArr) => {
  let contentHTML = "";
  foodArr.forEach((item) => {
    let { id, name, type, price, discount, tinhGiaKM, status } = item;
    let contentTr = `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${type ? "Chay" : "Mặn"}</td>
        <td>${price}</td>
        <td>${discount}</td>
        <td>${item.tinhGiaKM()}</td>
        <td>${status ? "Còn" : "Hết"}</td>
         <td>
        <button onclick="delFood(${id})" class="btn btn-danger" >Delete</button>
        <button onclick="editFood(${id})" class="btn btn-secondary">Edit</button>
        </td>
        </tr>`;
    contentHTML += contentTr;
  });
  document.querySelector("#tbodyFood").innerHTML = contentHTML;
};
