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
Shop.prototype.showDetails = function (id) {
    for (var index = 0; index < this.allProducts.length; index++) {
        if (id === this.allProducts[index].id) {
            document.write('<article>' +
                '<img id="descr" src="' + this.allProducts[index].img + '" alt="">' +
                '<h2>' + this.allProducts[index].name + '</h2>' +
                '<h3>' + this.allProducts[index].city + '</h3>' +
                '<p>Описание:<br>' + this.allProducts[index].description + '</p></article>');
            break;
        }

    }
}

var mac = new Product('Makedonska', 3, 'http://goliamo-vranovo.com/wp-content/uploads/2015/09/%D0%A8%D1%83%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0-%D0%BD%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D1%86%D0%B0.jpg', 'Skopie');
var lionska = new Product('Lionska', 5.9, 'http://work.ilyan.com/LEKI-website/wp/wp-content/uploads/2013/04/Packs-LionskaBulk255x255.png', 'Plovdiv');
var selska = new Product('Selska', 4.5, 'http://www.bg.all.biz/img/bg/catalog/54949.jpeg', 'Sestrimo');
var wurst = new Product('Weißwurst', 15, 'https://dbbnjd7zjr199.cloudfront.net/image/cache/data/edelweiss-products/Weisswurst-538x360.jpg', 'München');
var brat = new Product('Bratwurst', 10.49, 'http://www.fleischwaren-kleylein.de/Bratwurst.gif', 'Berlin');
var karnache = new Product('Karnacheta', 3.98, 'http://www.bg.all.biz/img/bg/catalog/middle/128153.jpeg', 'Elin Pelin');
mac.addDescription('НАДЕНИЦА ОТ СВИНСКО МЕСО И СЛАНИНА,С ПРИЯТЕН ВКУС И ЛЕК АРОМАТ НА ПОДПРАВКИ.МАКЕДОНСКАТА НАДЕНИЦА Е МЕЗЕ С ХАРАКТЕР,КОЕТОПРИЛЯГА НА ВСЯКА ТРАПЕЗА И НА ВСЯКА ГОЗБА.ДАВА НАЙ-ХУБАВОТО ОТ СЕБЕ СИ,АКО Е ЛЕКО ЗАПЕЧЕНА НА ЖАР.');
var shop = new Shop();
shop.addProduct(mac);
shop.addProduct(lionska);
shop.addProduct(selska);
shop.addProduct(wurst);
shop.addProduct(brat);
shop.addProduct(karnache);
karnache.addDescription('Карначета – произвеждат се от свинско месо, сланина, подправки и сол, като след смесване се пълнят в тънки животински черва. Предлага се в сурово състояние, подходящи са за печене на скара или във фурна.');
lionska.addDescription('Лионска наденица – произвежда се от телешко и свинско месо, сланина, вода, червен пипер и твърдо сирене.');
brat.addDescription('Братвурстът е една от най-известните германски наденици, произвежда се по технология като сурово-пушен колбас (в оригиналния си вид е колбас за мазане), само от свинско месо, подправки, вода и готварска сол.');
wurst.addDescription('Вайсвурст – традиционна баварска наденица, с бял цвят, произведена от много фино смляно телешко месо, сланина, магданоз, сол, джинджифил, лук, кардамон и лимон. Приготвят се като се потапят за около 15 минути във гореща (не вряща) вода и се поднасят на масата в купа, заедно с водата в която са приготвени, за да запазят максимално топли. При консумация обвивката от естествено черво се премахва (не се консумира).');
//shop.showAll();
shop.showDetails(6);
shop.showDetails(3);
