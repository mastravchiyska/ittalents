var ids = 1;
function getID() {
    ++ids;
    return ids;
}
function Product(name, price, img, city) {
    this.id = getID();
    if ((typeof name === 'string') && (!(isNaN(price))) && (typeof city === 'string')) {
        this.name = name;
        this.price = price;
        this.city = city;
    }
    if (img === undefined) {
        img = "default.jpg"
    }
    this.img = img;
    this.description = '';
}

Product.prototype.addDescription = function (text) {
    if ((typeof text === 'string') && (text !== '')) {
        this.description += text;
    }
}

function Shop() {
    this.allProducts = [];
}

Shop.prototype.addProduct = function (product) {
    if (product instanceof Product) {
        var index = this.allProducts.findIndex(function (pr) {
            return pr.name === product.name;
        });
    }
    if (index === -1) {
        this.allProducts.push(product);
    }
}


Shop.prototype.showAll = function () {
    document.write('<table><caption> Нашият асортимент от наденици </caption>' +
        '<thead><tr><th>Вид</th><th>Цена/кг</th><th>Photo</th>' +
        '</tr></thead><tbody>');

    this.allProducts.forEach(function (product) {
        product.showAsHTML();
    });

    document.write('</tbody><tfoot>');
    document.write('<tr><td> Брой наденици като видове: ' + this.allProducts.length + ' </td> </tr>');
    document.write('</tfoot></table>');
}
Product.prototype.showAsHTML = function () {
    document.write(` <tr>
                <td>${this.name}</td>
                <td>${this.price}</td>
                <td><img width="100px" src="${this.img}" alt=""></td>
            </tr>`);
}
Product.prototype.showDetails = function () {
    document.write(`<article>
     <img width="100px" src="${this.img}" alt="">
     <h2>${this.name}</h2>
     <h2>${this.city}</h2>
     <p>${this.description}</p></article>`);
}

var mac = new Product('Makedonska', 3, 'http://goliamo-vranovo.com/wp-content/uploads/2015/09/%D0%A8%D1%83%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0-%D0%BD%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D1%86%D0%B0.jpg', 'Skopie');
var lionska = new Product('Lionska', 5, 'http://work.ilyan.com/LEKI-website/wp/wp-content/uploads/2013/04/Packs-LionskaBulk255x255.png', 'Plovdiv');
mac.addDescription('НАДЕНИЦА ОТ СВИНСКО МЕСО И СЛАНИНА,С ПРИЯТЕН ВКУС И ЛЕК АРОМАТ НА ПОДПРАВКИ.МАКЕДОНСКАТА НАДЕНИЦА Е МЕЗЕ С ХАРАКТЕР,КОЕТОПРИЛЯГА НА ВСЯКА ТРАПЕЗА И НА ВСЯКА ГОЗБА.ДАВА НАЙ-ХУБАВОТО ОТ СЕБЕ СИ,АКО Е ЛЕКО ЗАПЕЧЕНА НА ЖАР.');
var shop = new Shop();
shop.addProduct(mac);
shop.addProduct(lionska);
shop.showAll();

