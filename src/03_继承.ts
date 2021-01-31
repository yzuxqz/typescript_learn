class Father {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age
    }

    sayHello(){
        console.log('你好')
    }
}

class Son extends Father{
    constructor(name:string,age:number) {
        super(name,age);
    }
    run(){
        console.log("在跑")
    }
    //重写
    sayHello(){
        //在类的方法中super就表示当前类的父类
        super.sayHello()
        console.log('son，你好')
    }
}

const s= new Son('xqz',12)
