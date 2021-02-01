import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import set = Reflect.set;

//游戏控制器，控制其他所有类
class GameControl {
    //定义三个属性
    //蛇
    snake: Snake
    //食物
    food: Food
    //计分牌
    scorePanel: ScorePanel

    //存储蛇的移动方向
    direction: string = ''
    //记录游戏是否结束
    isLive:boolean=true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    //初始化游戏
    init() {
        //绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    //键盘按下响应
    keydownHandler(event: KeyboardEvent) {
        //检查按键是否正确
        //修改方向
        this.direction = event.key
    }

    //控制蛇移动
    run() {
        // 根据this.direction来使蛇的位置改变
        //获取现在的坐标
        let x = this.snake.X
        let y = this.snake.Y
        //修改x，y值
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                //向上移动 top 减少
                y -= 10
                break;
            case 'ArrowDown':
            case 'Down':
                y += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                x -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                x += 10
                break;

        }
        //检查蛇是否吃到食物
        this.checkEat(x,y)
        //修改蛇的x和y
        try {
            this.snake.X = x
            this.snake.Y = y
        }catch (e) {
            //游戏结束
            alert(e.message+"GAME OVER!")
            this.isLive=false
        }


        //开启一个定时调用
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }

    //检查是否吃到食物
    checkEat(x:number,y:number){
        if(x===this.food.X&&y===this.food.Y){
            //该变食物位置
            this.food.change()
            //分数增加
            this.scorePanel.addScore()
            //蛇身体增加
            this.snake.addBody()
        }


    }
}

export default GameControl
