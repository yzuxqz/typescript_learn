enum Gender {
    male,
    female
}
class Person {

    //定义实例属性
    name:string='孙悟空';
    age:number=18

    //定义静态属性,readonly(只读)
    static readonly sex:string='male'

    //定义实例方法
    sayHello(){
        console.log('Hello')
    }

    //定义类方法
    static sayBye(){
        console.log('Bye')
    }
}

const per = new Person()
per.sayHello()
Person.sayBye()
console.log(per)
// console.log(Person.sex='13');
