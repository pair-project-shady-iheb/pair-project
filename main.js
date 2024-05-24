function generateId() {
  var counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
var id = generateId();

var listDerma = [];
var listHair = [];
var listOffer = [];
class MakeProducts {
  constructor(ProductName, price, category, images) {
    this.ProductName = ProductName;
    this.price = price;
    this.category = category;
    this.images = images;
    this.id = id();
    category === "dermatologie" && listDerma.push(this);
    category === "haircare" && listHair.push(this);
    category === "offre" && listOffer.push(this);
  }
}

var produitDerma1 = new MakeProducts(
  "ULTRASUN FACE ANTI-AGEING & ANTI PIGMENTATION SPF 50+",
  97.628,
  "dermatologie",
  [
    "https://johnlewis.scene7.com/is/image/JohnLewis/111715513",
    "https://www.paranet.tn/6592-large_default/ultrasun-face-spf50-anti-pigmentation-50-ml.jpg",
    "https://www.maparatunisie.tn/wp-content/uploads/2023/06/123204497_2759812100959850_5002842251471432830_n.jpg",
  ]
);

var produitDerma2 = new MakeProducts(
  "AVENE SOLAIRE ANTI-ÂGE-UVB-UVA",
  92.53,
  "dermatologie",
  [
    "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//a/v/avene-sun-anti-age-sunscreen-spf50-50ml_2_1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3C5utA3QJVhIFULPpnlJGiucTUNUblai_15TKZjZksFjSNrbm9f-7_XnOLzwvZizS40&usqp=CAU",
    "https://tunisiepara.com/wp-content/uploads/2022/05/creme-solaire-visage-protection-ecran-soleil.jpg",
  ]
);

var produitDerma3 = new MakeProducts(
  "CREME SOLAIRE HYDRATANTE SPF50+ - URIAGE BARIESUN ",
  87.628,
  "dermatologie",
  [
    "https://amal-medical.com/10074-large_default/creme-solaire-hydratante-spf50-uriage-bariesun-50ml.jpg",
    "https://www.uriage.com/system/products/images/318/product_show_fluide-anti-tache-spf50.png?1681821245",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuGx5cZUvU3v_-U0fcKsGgP78OiSRZBq2VnllBaFwUg&s",
  ]
);

var produitHair1 = new MakeProducts(
  "AVÈNE A-OXITIVE NUIT SOIN PEELING",
  110.801,
  "haircare",
  [
    "https://tunisiepara.com/wp-content/uploads/2022/05/avene-jour.jpg",
    "https://1001para.tn/11679/avene-a-oxitive-nuit-soin-peeling-30ml.jpg",
  ]
);

var produitHair2 = new MakeProducts("Spray Eau Thermale", 39.2, "haircare", [
  "https://paraetpharmacie.com/12232-thickbox_default/avene-eau-thermale-spray-50ml.jpg",
  "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/06/avene-a-oxitive-range.png",
]);

var produitOffre1 = new MakeProducts(
  "Un écran solaire avène acheté = un jolie sac de plage offert 🤩",
  72.308,
  "offre",
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgOXeKsGqSx70DdHUR7_OuX3_X8RxzAzfLKeRH32TBA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZD9suzHk7jiHuuZz874Y01eRPZbWFZ2DuvXcdHFgqw&s",
  ]
);

var produitOffre2 = new MakeProducts(
  "OFFRE AVÈNE CLEANANCE SOLAIRE SPF50+CLEANANCE WOMEN 30ML+GEL NETTOYANT 🤩",
  351,
  "offre",
  [
    "https://1moment.ma/wp-content/uploads/2024/02/offre-avene-cleanance-solaire-spf50cleanance-women-30mlgel-nettoyant-200ml-offert.jpg",
    "https://www.atlaspharma.fr/resize/600x600/media/finish/img/normal/32/3282770153293-avene-eau-micellaire-demaquillant-2x400ml.jpg",
  ]
);

function imageslider() {
  var promo = document.getElementById("promotion");
  var imgspromo = promo.getElementsByClassName("imgpromo");

  var index = 0;

  function imagechange() {
    imgspromo[index].classList.remove("active");
    index = (index + 1) % imgspromo.length;
    imgspromo[index].classList.add("active");
  }
  setInterval(imagechange, 3000);
}
imageslider();

$("#shop").append(
  ` <div id="shop-id">
  <p id="soin-visage">Soin visage</p>
  <img
    id="img-s-visage"
    src="https://assets.afcdn.com/story/20210419/2116808_w378h270c1cx1061cy707cxt0cyt0cxb2121cyb1414.webp"
    alt=""
  />
</div>
<section id="section-product"></section>`
);

function display(listDerma) {
  var derma = listDerma[indexDerma];
  for (var j = 0; j < derma.images.length; j++) {
    $("#section-product").append(
      `
      <div id="container-${j}">
      <img id="img-${j}" src=${derma.images[j]} />
      
      <button id="btn">Donner Votre Avis</button>
      <span id="prix">${listDerma[j].price} TND TTC</span>
      <p id="text">
        <b>SVR</b> Sensifine Démaquillant soin pour le démaquillage
      </p>
      </div>`
    );
    console.log(listDerma[j].price);
    var price = listDerma[j].price;
    $(`#img-${j}`).click(function () {
      var count = 0;
      document.getElementById("priceProduct").innerHTML = price + " TND TTC";
      document.getElementById("addToCard").innerHTML = 1;

      console.log("click");
    });
  }
  indexDerma = (indexDerma + 1) % listDerma.length;
}

var indexDerma = 0;
display(listDerma);
$("#img-s-visage").click(function () {
  $("#section-product").empty();
  display(listDerma);
});

$("#hairshop").append(`
<div id="hairshop-id">
<p id="soin-hair">Soin Cheuveux</p>
  <img
    id="img-s-hair"
    src="https://media.coiffea.com/blog/uploads/2019/04/shiny-hair.jpg"
    alt=""
  />
</div>
<section id="section-product-hair"></section>
`);

var indexHair = 0;

function displayHair(arr) {
  var hair = arr[indexHair];
  for (var k = 0; k < hair.images.length; k++) {
    $(`#section-product-hair`).append(`
  
    <div id="global-hair">
     
      <div id="container-hair-${k}">
       <img id="img-hair-${k}" src=${hair.images[k]} />

     <button id="btn">Donner Votre Avis</button>
    <span id="prix">${listHair[k].price} TND TTC</span>
   <p id="text">
    <b>SVR</b> Sensifine Démaquillant soin pour le démaquillage
  </p>
  </div>
     </div>`);
  }
  indexHair = (indexHair + 1) % listHair.length;
}
displayHair(listHair);

$("#img-s-hair").click(function () {
  $("#section-product-hair").empty();
  displayHair(listHair);
});

$("#soin-visage").click(function () {
  $("#section-product").empty();

  var sortPriceDerma = listDerma.toSorted(function (a, b) {
    return a.price - b.price;
  });

  console.log("click");
  console.log(sortPriceDerma);
  display(sortPriceDerma);
});

$("#soin-hair").click(function () {
  $("#section-product-hair").empty();

  var sortPriceHair = listHair.toSorted(function (a, b) {
    return a.price - b.price;
  });

  console.log("click");
  console.log(sortPriceHair);
  displayHair(sortPriceHair);
});

// function counterProduct() {
//   var count = 0;
//   return {
//     up: function () {
//       count++;
//       return count;
//     },
//     down: function () {
//       count--;
//       return count;
//     },
//     reset: function () {
//       count = 0;
//       return count;
//     },
//   };
// }
// var countUp = counterProduct();
// countUp.up();
// var countDown = counterProduct();
// countDown.down();
// var CountRes = counterProduct();
// CountRes.reset();

// $("#product").click(function () {
//   console.log("click");
// });

// document.getElementById("product").style.visibility = "hidden";
