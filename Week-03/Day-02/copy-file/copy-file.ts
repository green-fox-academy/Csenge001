// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful


const fs = require('fs');


function copyContent(file1: string, file2: string) {
    let fileContent = fs.readFileSync(file1, 'utf-8');
    fs.writeFileSync(file2, fileContent);
    return fs.readFileSync(file2, 'utf-8') === fileContent ? "true" : "false";
}

console.log(copyContent("copy-file1.txt", "copy-file2.txt"));