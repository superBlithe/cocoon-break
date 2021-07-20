import FpsText from '../objects/fpsText'
import { KEY_DIR, IPOS } from '../constants/types'
import { CONFIG } from '../constants/config'

export default class MainScene extends Phaser.Scene {
  fpsText
  /** 鼠标事件 */
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys
  /** 蛇蛇 */
  private snakes: Phaser.GameObjects.Sprite[] = []
  /** 果果 */
  private fruits: Phaser.GameObjects.Sprite[] = []
  /** 方向 */
  private moveVec: Phaser.Math.Vector2
  private updateDelay: number = 0
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.input.keyboard.on('keydown', this.onListenerKeyDown.bind(this))
    this.fpsText = new FpsText(this)
    this.moveVec = new Phaser.Math.Vector2(0, 0)
    this.initGame()
  }

  /** 初始化游戏 */
  initGame() {
    this.initSnake()
    this.genneratorFruit()
  }

  /** 重新开始本关 */
  resetGame() {
    this.initGame()
  }

  /** 监听键盘事件 */
  private onListenerKeyDown(e) {
    if (!Object.values(KEY_DIR).includes(e.key)) return
    let vec = new Phaser.Math.Vector2(0, 0)
    switch (e?.key) {
      case KEY_DIR.UP:
        vec.y = -1
        break
      case KEY_DIR.LEFT:
        vec.x = -1
        break
      case KEY_DIR.DOWN:
        vec.y = 1
        break
      case KEY_DIR.RIGHT:
        vec.x = 1
        break
    }
    this.moveVec = vec
  }

  /** 生成水果的位置，不要出现在蛇的身上 */
  private getNewFruitPos():IPOS {
    let maxX = Math.floor(+this.game.config.width / CONFIG.BOX_SIZE)
    let maxY = Math.floor(+this.game.config.height / CONFIG.BOX_SIZE / 3 * 2)
    let x = Phaser.Math.Between(1, maxX) * CONFIG.BOX_SIZE
    let y = Phaser.Math.Between(1, maxY) * CONFIG.BOX_SIZE
    let isOnSnake = this.snakes.some(item => item.x === x && item.y === y)
    return isOnSnake ? this.getNewFruitPos() : { x, y }
  }

  /** 随机果果 */
  private genneratorFruit() {
    let pos = this.getNewFruitPos()
    let fruit = this.add
      .sprite(pos.x, pos.y, 'fruit')
      .setDisplaySize(CONFIG.BOX_SIZE, CONFIG.BOX_SIZE).setOrigin(0,0)
    this.fruits.push(fruit)
  }

  /** 初始化蛇蛇 */
  private initSnake() {
    // 初始化 蛇 4个元素, 从4， 4开始
    for (var i = 0; i < CONFIG.SNAKE_START_LENGTH; i++) {
      this.snakes[i] = this.genneratorSnakeItem({ x: (4 + i) * CONFIG.BOX_SIZE, y: 4 * CONFIG.BOX_SIZE })
    }
  }

  /** 生成蛇蛇的item */
  private genneratorSnakeItem(pos: IPOS) {
    return this.add.sprite(pos.x, pos.y, 'snake').setDisplaySize(CONFIG.BOX_SIZE, CONFIG.BOX_SIZE).setOrigin(0,0)
  }

  /** 吃到水果 */
  private collectFruit() {
    this.fruits.map((_fruit, index) => {
      if (_fruit.x === this.snakes[this.snakes.length - 1].x && _fruit.y === this.snakes[this.snakes.length - 1].y) {
        // 根据当前水果坐标，新增一个蛇蛇的item
        this.snakes.unshift(this.genneratorSnakeItem({ x: _fruit.x, y: _fruit.y }))
        //销毁这个水果
        this.fruits.splice(index)[0]
        _fruit.destroy()
        // 生成下一个水果
        this.genneratorFruit()
      }
    })
  }

  /** 是否碰到自己 */
  private checkSelf(snakesFirst) {
    let isCheckSelf = this.snakes.filter(item => item.x === snakesFirst.x && item.y === snakesFirst.y);
    // 取个巧，找出坐标和蛇头一样的元素，因为蛇头肯定等于蛇头，所以要 匹配List>1
    if(isCheckSelf.length > 1) alert('碰到的自己啦')
  }

   /** 是否碰墙 */
  private checkWall(snakesFirst) {
    let isCheckWall = snakesFirst.x >=  this.game.config.width  || snakesFirst.x < 0 || snakesFirst.y >= this.game.config.height || snakesFirst.y < 0;
    // 取个巧，找出坐标和蛇头一样的元素，因为蛇头肯定等于蛇头，所以要 匹配List>1
    if(isCheckWall) alert('撞墙啦')
  }
  
  /** 判断是否结束 */
  private gameOver() {}
  update(dt) {
    this.fpsText.update()
    this.updateDelay++
    if (this.moveVec.x === 0 && this.moveVec.y === 0) return
    if (this.updateDelay % 20 === 0) {
      // 数组最后一项为 蛇头
      let snakesFirst = this.snakes[this.snakes.length - 1]
      let snakesLast = this.snakes.shift()
      //获取本次预移动的点坐标
      snakesLast!.x = snakesFirst.x + this.moveVec.x * CONFIG.BOX_SIZE
      snakesLast!.y = snakesFirst.y + this.moveVec.y * CONFIG.BOX_SIZE
      //添加到头部
      // this.physics.add.overlap(snakesLast, this.fruits, this.collectFruit, null, this)
      this.snakes.push(snakesLast!)

      // 是否碰到水果
      this.collectFruit()
      
      // 是否碰到自己
      this.checkSelf(snakesFirst)

      // 是否撞墙
      this.checkWall(snakesFirst)
    }
  }
}
