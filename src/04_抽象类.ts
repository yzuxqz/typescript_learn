//abstract抽象类，禁止被创建对象，抽象类就是用来专门被继承的类
abstract class Father2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    //抽象方法，以abstract开头，且没有方法体
    //子类必须对抽象方法进行重写
    abstract sayBye(): void;

    sayHello() {
        console.log('你好')
    }
}

class Son2 extends Father2 {
    constructor(name: string, age: number) {
        super(name, age);
    }

    run() {
        console.log("在跑")
    }

    //重写
    sayHello() {
        //在类的方法中super就表示当前类的父类
        super.sayHello()
        console.log('son，你好')
    }

    sayBye(): void {
        console.log('bye')
    }
}

const s2 = new Son2('xqz', 12)
