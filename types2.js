//object
var a;
a = {};
a = function () {
};
//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性类型}
//在属性名后+？，表示属性名可选
var b;
b = { name: '孙悟空' };
b = { name: '孙悟空', age: 18 };
// b={}
//[propName:string]:any  表示任意类型的属性值，属性名为字符串类型
var c;
c = { name: '猪八戒', age: 18, gender: '男' };
//声名函数解构类型
//语法：（形参：类型，形参：类型 ...）=>返回值
var d;
//数组的类型声名：
// 类型：[]
// Array<类型>
var e;
e = ['e', 'a'];
var f;
var g;
//元组：固定长度的数组
//语法：[类型，类型]
var h;
h = ['hello', 'hello'];
//enum 枚举
//
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
