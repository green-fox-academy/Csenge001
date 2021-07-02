//Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.


function changeChars(string: string): string {
    let positionOfX: number = string.indexOf("x");
    if (positionOfX == -1) {
        return string;
    } else {
        return string.slice(0, positionOfX) + "y" + changeChars(string.slice(positionOfX + 1));
    }
}

console.log(changeChars("xoxo"));
