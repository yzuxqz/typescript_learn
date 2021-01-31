// function f(a: any):any {
//     return a
// }
//在定义函数或类时，如果类型不明确则使用泛型
function f<T>(a: T): T {
    return a
}


//可以直接调用具有泛型的函数
f(10) //不指定泛型，TS可以自动对类型进行推断
f<string>('hello')// 指定泛型



function f1<T,K>(a:T,b:K):T {
    console.log(b)
    return a
}
f1(123,'hello')
f1<number,string>(123,'hello')

interface Interface {
    length:number
}

class Class implements Interface{
    length: number;
    constructor(length:number) {
        this.length=length
    }
}

//参数需要是继承Interface接口的实例，或者具有length属性
function f2<T extends Interface>(a:T):number {
    return a.length
}
f2('123') //确保有length属性
const a =new Class(10)
f2(a)

//在类中使用泛型
class MyClass<T>{
    name:T
    constructor(name:T) {
        this.name=name
    }
}

const mc = new MyClass<string>('hello')
