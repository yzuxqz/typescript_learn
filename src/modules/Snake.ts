class Snake {
    //表示蛇头的元素
    head: HTMLElement
    //获取蛇的身体（包括蛇头）
    bodies: HTMLCollection
    //获取蛇的容器
    element: HTMLElement

    constructor() {
        this.head = <HTMLElement>document.querySelector('#snake>div')
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
        this.element = document.getElementById('snake')!
    }

    //获取蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        //如果新值和旧值相同，则直接返回，不用修改
        if (this.X == value) {
            return
        }
        //是否撞墙
        if (value < 0 || value > 290) {
            //蛇撞墙
            throw new Error('蛇撞墙！')
        }
        //修改x时，蛇在向左走，不能往右掉头，反同理
        //如果第二节存在，且头部坐标等于第二节坐标
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //如果发生了掉头，让蛇反方向继续移动
            if (value > this.X) {
                //修正蛇的方向,虽然点了右，修正为左
                value = this.X - 10
            } else {
                //在往右走的过程中点了左，修正为右
                value = this.X + 10
            }
        }
        //移动身体
        this.moveBody()
        //移动头部
        this.head.style.left = value + 'px'
        //检查有没有撞自己
        this.checkHeadBody()
    }

    set Y(value: number) {
        //如果新值和旧值相同，则直接返回，不用修改
        if (this.Y == value) {
            return
        }
        //是否撞墙
        if (value < 0 || value > 290) {
            //蛇撞墙
            throw new Error('蛇撞墙！')
        }
        //修改x时，蛇在向左走，不能往右掉头，反同理
        //如果第二节存在，且头部坐标等于第二节坐标
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //如果发生了掉头，让蛇反方向继续移动
            if (value > this.Y) {
                //修正蛇的方向,虽然点了下，修正为上
                value = this.Y - 10
            } else {
                //在往右走的过程中点了上，修正为下
                value = this.Y + 10
            }
        }

        //移动身体
        this.moveBody()
        //移动头部
        this.head.style.top = value + 'px'
        //检查有没有撞自己
        this.checkHeadBody()
    }

    //设置蛇增加身体的方法
    addBody() {
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //身体移动
    moveBody() {
        //将后面的身体设置为前面的身体的位置
        //4=3,3=2,2=1
        //遍历获取所有的身体,不用修改蛇头的位置,已经改过了
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取前面身体的位置
            let x = (<HTMLElement>this.bodies[i - 1]).offsetLeft;
            let y = (<HTMLElement>this.bodies[i - 1]).offsetTop;

            //将这个值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    //检查蛇头坐标有没有和身体重复
    checkHeadBody(){
        for (let i = 1; i < this.bodies.length; i++) {
            if(this.X ===(this.bodies[i] as HTMLElement).offsetLeft&&this.Y ===(this.bodies[i] as HTMLElement).offsetTop){
                //蛇头撞了身体
                throw new Error('撞到自己了!')
            }
        }
    }
}

export default Snake
