class Button {
    constructor(height, width, text) {
        this.height = height;
        this.width = width;
        this.text = text;
    }
    showBtn(){
        document.write(`<button style='height:${this.height}; width:${this.width}'>${this.text}</button>`)
    }
}

let a = new Button ('300px', '300px', 'Моя кнопка')
a.showBtn()

class BootstrapButton   extends Button {
    constructor(height, width,text, color) {
        super(height,width,text);
        this.color = color
    }

    showBtn() {
        document.write(`<button style='height:${this.height}; width:${this.width}; background:${this.color}'>${this.text}</button>`)
    }
}

let b = new BootstrapButton ('300px','300px', 'Моя красная кнопка', 'red')
b.showBtn()
