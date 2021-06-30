class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;


    constructor (color: string, width: number, inkAmount: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount || this.inkAmount;
    }


    use() {
        this.inkAmount = this.inkAmount - 10;
        console.log(`The inkamount of the ${this.color} colored ${this.width} width sharpie was decreased, it's current level is: ${this.inkAmount}`);
    }
}


let greenSharpie = new Sharpie("green", 0.2, 80);
let yellowSharpie = new Sharpie("yellow", 0.4, 0);


greenSharpie.use();
yellowSharpie.use();