module.exports = function check(str, bracketsConfig) {

const brackets = [];
var res = str.split(" ");

res.forEach((bracket1) => bracketsConfig.forEach((bracket2) => {
    if(bracket1 === bracket2) {
        brackets.push(bracket1);
    } 
}));
    return brackets;
}