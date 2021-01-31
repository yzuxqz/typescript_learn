class  Dog {
    // 构造函数会在对象创建时调用
    constructor(name:string,age:number) {
        //在实例方法中，this表示当前的实例
        //在构造函数中当前对象就是当前新建的哪个对象
        //可以通过this向新建的对象中添加属性
        this.name=name
        this.age=age
    }
    name:string;
    age:number;
    bark(){
        console.log(this.name)
    }
}

const dog = new Dog('旺财',12)
dog.bark()
console.log(dog)
