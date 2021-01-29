//可直接使用字面量进行类型声名
var a; //相当于常量
// a=11
//可以使用 | 来连接多个类型（联合类型）
var b;
b = 'male';
b = 'female';
var c;
c = true;
c = 'hello';
//any 表示任意类型，相当于关闭了ts的类型检测
var d;
d = 10;
d = 'hello';
d = true;
//声名变量不指定类型，则为any
var e;
e = 10;
e = 'hello';
e = true;
//未知类型
var f;
f = 10;
f = 'hello';
f = true;
var s;
//e的类型为any,可以赋值给任意变量,这样导致原本为string的s也变成了any
s = e;
//不能将unknown类型的赋值给别的变量
//就是一个类型安全的any
f = 'hello';
//要在赋值前先进行判断
if (typeof f === "string") {
    s = f;
}
// s=f
//类型断言,可以告诉解析器变量的实际类型
s = f;
s = f;
//void 用来表示空，以函数为例，就表示没有返回值的函数
function f1() {
    // return true
}
//never表示永远不会返回结果
function f2() {
    throw new Error('报错了！');
}
