const a:number = 2;
const b:string = '4';

const suma = (num1:number,num2:string):string => {
    const total:number = Number(num2) + num1;
    return `la suma es ${total}`
}

console.log(suma(a,b))