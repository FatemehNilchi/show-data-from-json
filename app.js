fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
        <tr>
        <td> ${product.name}</td>
        <td> ${product.family}</td>
        <td> ${product.nomre}</td>
        </tr>
        `;
    }
    placeholder.innerHTML = out;
  });
