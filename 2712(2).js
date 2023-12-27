class CssClass {
    constructor(name, styles){
        this.name = name;
        this.styles = styles;
    }
    addStyle(value) {
        this.styles.push(value)
    }
    removeStyle(){
        this.styles.pop()
    }
    getCss() {
        let code = `.${this.name} {`
        for (let i of this.styles) {
            code += i + ';/n'
        }
        code += '}'
        return code
    }
}
let a = new CssClass('block', ['background: red', 'width: 300px'])
console.log(a.getCss())