(function (){
    class Person{
        //public 修饰的属性可以在任意位置修改
        //private 私有属性，私有属性只能在类内部修改,子类中也不能访问;通过在类中添加方法暴露属性
        //protected 在当前类和子类中可以使用
       private _name:string
       private _age:number

        constructor(name:string,age:number) {
            this._name=name
            this._age=age
        }

        // getName(){
        //    return this.name
        // }
        //
        // setName(value:string){
        //    this.name=value
        // }

        //在ts中设置getter方法
        get name(){
           return this.name
        }
        set name(value:string){
            this._name=value
        }
    }

    const per = new Person('孙悟空',18)
    console.log(per.name);
    per.name='猪八戒'
    // 属性是直接在对象中设置，可以任意修改，将会导致对象中的额数据变得不安全



    class C{
        //可以直接将属性定义在构造函数中
     constructor(public name:string,public age:number) {
     }
    }
}
)()
