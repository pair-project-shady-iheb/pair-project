function generateId() {
  var counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
var id = generateId();

class MakeProducts {
  constructor(ProductName, price, category, images) {
    this.ProductName = ProductName;
    this.price = price;
    this.category = category;
    this.images = images;
    this.id = id();
  }
}
var ListDerma = [];

var produitDerma1 = new MakeProducts(
  "ULTRASUN FACE ANTI-AGEING & ANTI PIGMENTATION SPF 50+",
  97.628,
  "dermatologie",
  [
    "https://pharma-shop.tn/8296-large_default/ultrasun-face-anti-ageing-anti-pigmentation-spf-50-50ml.jpg",
    "https://www.paranet.tn/6592-large_default/ultrasun-face-spf50-anti-pigmentation-50-ml.jpg",
    "https://www.maparatunisie.tn/wp-content/uploads/2023/06/123204497_2759812100959850_5002842251471432830_n.jpg",
  ]
);

ListDerma.push(produitDerma1);
var produitDerma2 = new MakeProducts(
  "AVENE SOLAIRE ANTI-ÂGE-UVB-UVA",
  92.53,
  "dermatologie",
  [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eau-thermale-avene.tn%2Fsolaire%2Fprotection-solaire%2Fgamme-orange-peaux-sensibles%2Fsolaire-anti-age&psig=AOvVaw0a_KI7aT2j9u7OunuYi8YJ&ust=1716409543767000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCm1PrJn4YDFQAAAAAdAAAAABAE",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3C5utA3QJVhIFULPpnlJGiucTUNUblai_15TKZjZksFjSNrbm9f-7_XnOLzwvZizS40&usqp=CAU",
    "https://tunisiepara.com/wp-content/uploads/2022/05/creme-solaire-visage-protection-ecran-soleil.jpg",
  ]
);

var produitDerma3 = new MakeProducts(
  "CREME SOLAIRE HYDRATANTE SPF50+ - URIAGE BARIESUN ",
  97.628,
  "dermatologie",
  [
    "https://amal-medical.com/10074-large_default/creme-solaire-hydratante-spf50-uriage-bariesun-50ml.jpg",
    "https://www.uriage.com/system/products/images/318/product_show_fluide-anti-tache-spf50.png?1681821245",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuGx5cZUvU3v_-U0fcKsGgP78OiSRZBq2VnllBaFwUg&s",
  ]
);

var ListHear = [];

var produitHear1 = new MakeProducts(
  "AVÈNE A-OXITIVE NUIT SOIN PEELING",
  110.801,
  "Hear care",
  [
    "https://tunisiepara.com/wp-content/uploads/2022/05/avene-jour.jpg",
    "https://1001para.tn/11679/avene-a-oxitive-nuit-soin-peeling-30ml.jpg",
  ]
);

ListHear.push(produitHear1);
var produitHear2 = new MakeProducts("Spray Eau Thermale", 39.2, "Hear care", [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eau-thermale-avene.tn%2Fsolaire%2Fprotection-solaire%2Fgamme-orange-peaux-sensibles%2Fsolaire-anti-age&psig=AOvVaw0a_KI7aT2j9u7OunuYi8YJ&ust=1716409543767000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCm1PrJn4YDFQAAAAAdAAAAABAE",
  "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/06/avene-a-oxitive-range.png",
]);
ListHear.push(produitHear2);

var ListOffre = [];

var produitOffre1 = new MakeProducts(
  "Un écran solaire avène acheté = un jolie sac de plage offert 🤩",
  72.308,
  "offre",
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgOXeKsGqSx70DdHUR7_OuX3_X8RxzAzfLKeRH32TBA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZD9suzHk7jiHuuZz874Y01eRPZbWFZ2DuvXcdHFgqw&s",
  ]
);
ListOffre.push(produitOffre1);
var produitOffre2 = new MakeProducts(
  "OFFRE AVÈNE CLEANANCE SOLAIRE SPF50+CLEANANCE WOMEN 30ML+GEL NETTOYANT 🤩",
  351,
  "offre",
  [
    "https://1moment.ma/wp-content/uploads/2024/02/offre-avene-cleanance-solaire-spf50cleanance-women-30mlgel-nettoyant-200ml-offert.jpg",
    "https://www.atlaspharma.fr/resize/600x600/media/finish/img/normal/32/3282770153293-avene-eau-micellaire-demaquillant-2x400ml.jpg",
  ]
);
ListOffre.push(produitOffre2);
var innerHTML;
document.getElementById("container").innerHTML = innerHTML;
console.log("#face");
console.log(innerHTML);

function displayDerma(produit, index) {
  for()
  $("#shop").append(`img src="ListDerma[index]" alt="" />
    <div>visage</div>`);
}

// function puchtoHTMLStr(makeProducts, section){
//   imgHTML = ""
//   for(var i = 0; i<makeProducts.images.length; i++) {
//     imgHTML += `<img src="${makeProducts.images[i]}" alt="" />
//     `
//   }
//   return `<div id="${section}"> ${imgHTML}
//   <div>visage</div>
//   </div>

//   `;
// }
