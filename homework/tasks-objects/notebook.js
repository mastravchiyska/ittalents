function Page(title, text) {
    if (typeof title === 'string') {
        this.title = title;
    }
    if (text === undefined) {
        text = '';
    }
    this.text = text;

    this.addText = function (text) {
        if (typeof text === 'string') {
            this.text += text;
        }
    }
    this.deleteText = function () {
        this.text = '';
    }
    this.showText = function () {
        console.log('Title: ' + this.title);
        if (this.text === '') {
            console.log('nqma text na taq stranica');
        } else {
            console.log('Text: ' + this.text);
        }
    }
    this.searchWord = function (word) {
        return this.text.search(word);
    }

    this.containsDigit = function () {
        return /\d/.test(this.text);
    }
}
function SimpleNotepad(numberOfPages) {
    this.pages = [];
    for (var index = 0; index < numberOfPages; index++) {
        this.pages.push(new Page());
    }
}
SimpleNotepad.prototype.addText = function (pageNumber, text) {
    this.pages[pageNumber - 1].text += text;
}
SimpleNotepad.prototype.overrideText = function (pageNumber, text) {
    this.pages[pageNumber - 1].text = text;
}
SimpleNotepad.prototype.deleteText = function (pageNumber) {
    this.pages[pageNumber - 1].text = '';
}
SimpleNotepad.prototype.showAllPages = function () {
    var self = this;
    self.pages.forEach(function (p) {
        console.log('Title: ' + p.title);
        console.log('Text: ' + p.text);
    })
}

SimpleNotepad.prototype.searchWord = function (word) {
    var self = this;
    self.pages.forEach(function (page) {
        console.log(page.text.search(word));
    });
}

SimpleNotepad.prototype.printAllPagesWithDigits = function () {
    var self = this;
    self.pages.forEach(function (page) {
        if (page.containsDigit()) {
            page.showText();
        }
    })
}

function SecuredNotepad(numberOfPages, pass) {
    SimpleNotepad.call(this, numberOfPages);
    if (typeof pass === 'string')
        this.pass = pass;
}
SecuredNotepad.prototype = Object.create(SimpleNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;

SecuredNotepad.prototype.addText = function (pageNumber, text, pass) {
    if (pass === this.pass) {
        SimpleNotepad.prototype.addText.call(this, pageNumber, text);
    } else {
        console.log('Oburkal si reisa, pich');
    }
}

function ElectronicDevice() {
    this.isStarted = false;
    this.start = function () {
        this.isStarted = false;
    }
}

ElectronicDevice.prototype.stop = function () {
    if (this.isStarted === true)
        this.isStarted = false;
}
ElectronicDevice.prototype = Object.create(SecuredNotepad.prototype);
ElectronicDevice.prototype.constructor = ElectronicDevice;

function ElectronicSecuredNotepad(numberOfPages, pass) {
    SecuredNotepad.call(this, numberOfPages, pass);
    ElectronicDevice.call(this);
    if (this.isStarted != true) {
        this.__proto__ = null;
    }
}

ElectronicSecuredNotepad.prototype = Object.create(ElectronicDevice.prototype);
ElectronicSecuredNotepad.prototype.constructor = ElectronicSecuredNotepad;

var elSec = new ElectronicSecuredNotepad(2, 'fksdgpiads');
elSec.start();
elSec.addText(1, 'fdvgssdfbdfb', 'fksdgpiads');

var first = new Page('Uvod');
first.addText('tazi stranica e posvetena na teb, milo moe num 10');
console.log(first.containsDigit());
first.showText();
first.deleteText();
first.showText();


var p = new SimpleNotepad(5);

p.addText(1, 'Miro e mnogo qk! 6+');
p.addText(2, 'Obicha polichaicheta s golemi pagoni');
//p.overrideText(1, 'Mnogo obicha da bluska za gyrdi vuv fitnesa :D');
p.printAllPagesWithDigits();


// var sec = new SecuredNotepad(2, 'obichamazis21');
// sec.addText(2,'Sasho obicha da pravi po 3 serii klekove bez tejesti','obichamazis');
// console.log(sec.pages);
