//声名一个变量a，同时指定它的类型为number
var a;
a = 10;
a = 33;
//a的类型设置为number，在以后的使用过程中a的值只能是数字
// a='hello' //此行代码会报错，因为a的类型为number，不能赋值字符串
var b;
b = 'hello';
// b=20
//声名完变量直接进行赋值
// let c:boolean=true
//如果变量声名和赋值是同时进行的，ts跨域自动对变量进行类型检测
var c = true;
// c=12
//js的函数是不考虑参数的类型和个数的
// function sum(a,b) {
//     return a+b
// }
//
// console.log(sum(123, 456));//579
// console.log(sum(123, '456'));//123456
function sum(a, b) {
    return a + b;
}
var res = sum(123, 456);
