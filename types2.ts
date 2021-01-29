//object
let a:object
a={}
a=function () {
}

//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性类型}
//在属性名后+？，表示属性名可选
let b:{name:string,age?:number}
b={name:'孙悟空'}
b={name:'孙悟空',age:18}
// b={}

//[propName:string]:any  表示任意类型的属性值，属性名为字符串类型
let c:{name:string,[propName:string]:any}
c={name:'猪八戒',age:18,gender:'男'}

//声名函数解构类型
//语法：（形参：类型，形参：类型 ...）=>返回值
let d:(a:number,b:number)=>number

//数组的类型声名：
// 类型：[]
// Array<类型>
let e:string[]
e=['e','a']

let f:number[]
let g:Array<number>

//元组：固定长度的数组
//语法：[类型，类型]
let h:[string,string]
h=['hello','hello']

//enum 枚举
//
enum Gender{
    Male,
    Female
}
let i:{name:string,gender:Gender}

i={
    name:'孙悟空',
    gender:Gender.Male
}
console.log(i.gender===Gender.Male)

//&表示同时满足
// let j:string&number //无意义
let j:{name:string} & {age:number}
j={name:'xqz',age:12}

//类型的别名
type myType=1|2|3|4
// let k:1|2|3|4
// let l:1|2|3|4
let k:myType
let l:myType
k=4
// k=5
