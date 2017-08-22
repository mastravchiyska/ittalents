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
        console.log('Title: '+ this.title);
        if (this.text === undefined || this.text === '') {
            console.log('nqma text na taq stranica');
        } else {
            console.log('Text: ' +this.text);
        }
    }
}
function SimpleNotepad(numberOfPages){
    
}

var first = new Page('Uvod');
first.addText('tazi stranica e posvetena na teb, milo moe');
first.showText();
first.deleteText();
first.showText();
