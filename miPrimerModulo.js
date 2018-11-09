//module.exports = 123;
//module.exports.restaNumeros = (num1, num2) => num1 - num2;

const restaNumeros = (num1, num2) => num1-num2;
const sumaNumeros = (num1, num2) => {
    console.log(`Resta desde suma: ${restaNumeros(num2, num1)}`);
    return num2+num1;
}
module.exports = {
    restaNum: restaNumeros,
    sumaNum: sumaNumeros

}