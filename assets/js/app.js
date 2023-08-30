$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><img src="./assets/img/arrow-slider.svg" alt="" /></button>`,
  });
});
$(document).ready(function () {
  $(".products-list-said").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><img src="./assets/img/arrow-slider.svg" alt="" /></button>`,
  });
});
const products = [
  {
    nameTitle: "top",
    image: "./assets/img/our1.png",
    nameUser: "Eto V Neck Yellow",
    price: "Rp. 129.000",
  },
  {
    nameTitle: "top",
    image: "./assets/img/our3.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "top",
    image: "./assets/img/our2.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "top",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "top",
    image: "./assets/img/our6.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "top",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "top",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "bottom",
    image: "./assets/img/our3.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "bottom",
    image: "./assets/img/our2.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "bottom",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "bottom",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "bottom",
    image: "./assets/img/our6.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "bottom",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "dress",
    image: "./assets/img/our1.png",
    nameUser: "Eto V Neck Yellow",
    price: "Rp. 129.000",
  },
  {
    nameTitle: "dress",
    image: "./assets/img/our3.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "dress",
    image: "./assets/img/our2.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "dress",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "dress",
    image: "./assets/img/our6.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "dress",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "set",
    image: "./assets/img/our3.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "set",
    image: "./assets/img/our2.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "set",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "set",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "set",
    image: "./assets/img/our6.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "set",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "knit",
    image: "./assets/img/our3.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "knit",
    image: "./assets/img/our2.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "knit",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "knit",
    image: "./assets/img/our6.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "knit",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "knit",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "outer",
    image: "./assets/img/our3.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "outer",
    image: "./assets/img/our2.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "outer",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "outer",
    image: "./assets/img/our4.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "outer",
    image: "./assets/img/our6.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    nameTitle: "outer",
    image: "./assets/img/our.png",
    nameUser: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
];

const productContainer = document.getElementById("product-container");

document.getElementById("nav-our").addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    // Xóa lớp active từ tất cả các liên kết
    const navLinks = document.querySelectorAll("#nav-our li");
    navLinks.forEach((link) => link.classList.remove("active"));

    // Thêm lớp active cho liên kết được click
    event.target.parentNode.classList.add("active");

    const targetId = event.target.getAttribute("href").substring(1);
    const filteredProducts = products.filter(
      (product) => product.nameTitle.toLowerCase() === targetId
    );

    renderProducts(filteredProducts);
  }
});

function renderProducts(productsToShow) {
  let productHtml = "";
  productsToShow.slice(0, 6).forEach((product) => {
    productHtml += `
        <div class="product">
          <img src="${product.image}" alt="" class="product-img-our" />
          <p class="product-our">${product.nameUser}</p>
          <p class="price-our">${product.price}</p>
        </div>
        
      `;
  });
  productContainer.innerHTML = productHtml;
}
