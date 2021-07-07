export class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;


    constructor (color: string, width: number, inkAmount?: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount || this.inkAmount;
    }


    use(): number {
        if (this.inkAmount >= 10) {
            return this.inkAmount = this.inkAmount - 10;
        } else {
            return 0;
        }
    }
}
