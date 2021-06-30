
class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;


    constructor (backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    } 


    show(): void {
        console.log(`a/an ${this.backgroundColor} with ${this.textColor} text: "${this.text}"`);
    }

}


let postIt1 = new PostIt("orange", "Idea 1", "blue");
let postIt2 = new PostIt("pink", "Awesome", "black");
let postIt3 = new PostIt("yellow", "Suberb!", "green");


postIt1.show();
postIt2.show();
postIt3.show();
