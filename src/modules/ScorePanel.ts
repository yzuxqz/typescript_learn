//定义表示计分牌的类
class ScorePanel {
    // 用来记录分数和等级
    score: number = 0
    level: number = 1

    //设置一个变量来限制等级
    maxLevel: number;
    //设置一个变量表示多少分时升级
    upScore: number
    //分数和等级所在的元素，在构造函数中初始化
    scoreELe: HTMLElement
    levelEle: HTMLElement

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreELe = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    //设置一个加分的方法
    addScore() {
        //分数自增
        this.score++
        this.scoreELe.innerText = this.score + ''
        //判断分数是多少
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    //提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }
}

export default ScorePanel
