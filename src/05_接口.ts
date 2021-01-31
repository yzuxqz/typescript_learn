// 接口用来定义一个类的结构
interface myInterface {
    name:string
    age:number

}
//定义两个名字一样的接口相当于合并
interface myInterface {
    gender:string

}
//接口可以当成类型声名去使用
const obj:myInterface={
    name:'xqz',
    age:12,
    gender:'male'
}


//接口中所有的属性都不能有实际的值
//接口中所有的方法都是抽象方法
interface mtInter {
    name:string
    sayHello():void
}

class  myClass implements mtInter{
    constructor(name:string) {
        this.name=name
    }
    name: string;

    sayHello(): void {
        console.log(this.name)
    }

}
