//定义食物类
class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        //获取页面中的food元素，并将其赋值给element
        this.element = document.getElementById('food')!
    }

    //获取食物x轴坐标
    get X() {
        return this.element.offsetLeft
    }

    //获取食物y轴坐标
    get Y() {
        return this.element.offsetTop
    }

    //修改食物位置的方法
    change() {
        //生成一个随机的位置
        //最小为0，最大为290，且为10的整数
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food
