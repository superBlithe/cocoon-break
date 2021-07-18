import FpsText from '../objects/fpsText'
import { GUtils } from '../constants/util'
import { DIR, BLOCK, KEY_DIR } from '../constants/types'
import { CONFIG } from '../constants/config'

export default class MainScene extends Phaser.Scene {
  fpsText
  /** 鼠标事件 */
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys
  /** 地图容器 */
  private mapContainer: Phaser.GameObjects.Container
  private resetBtn: Phaser.GameObjects.Sprite
  /** 方向 */
  private dir: DIR = DIR.UP
  /** 当前人物角色的位置(位于二维数组) */
  private playerPointer: { [key: string]: number } = { x: 0, y: 0 }

  /** 蛇蛇 */
  private snake: Phaser.GameObjects.Sprite[] = []
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.input.keyboard.on('keydown', this.onListenerKeyDown.bind(this))
    this.fpsText = new FpsText(this)

    this.resetBtn = this.add.sprite(0, 1100, 'resetBtn').setOrigin(0, 0).setDepth(10).setInteractive()
    // this.resetBtn.addEventListener(FYGE.MouseEvent.CLICK, this.resetGame, this)
    this.resetBtn.on('pointerdown', this.resetGame, this)
    this.initGame()
  }

  /** 初始化游戏 */
  initGame() {
    this.initSnake()
  }

  /** 重新开始本关 */
  resetGame() {
    this.initGame()
  }

  /** 监听键盘事件 */
  private onListenerKeyDown(e) {
    if (!Object.values(KEY_DIR).includes(e.key)) return
    let p1 = {
      x: 0,
      y: 0
    }
    let p2 = {
      x: 0,
      y: 0
    }
    switch (e?.key) {
      case KEY_DIR.UP:
        this.dir = DIR.UP
        p1.x = this.playerPointer.x - 1
        p2.x = this.playerPointer.x - 2
        p1.y = p2.y = this.playerPointer.y
        break
      case KEY_DIR.LEFT:
        this.dir = DIR.LEFT
        p1.x = p2.x = this.playerPointer.x
        p1.y = this.playerPointer.y - 1
        p2.y = this.playerPointer.y - 2
        break
      case KEY_DIR.DOWN:
        this.dir = DIR.DOWN
        p1.x = this.playerPointer.x + 1
        p2.x = this.playerPointer.x + 2
        p1.y = p2.y = this.playerPointer.y
        break
      case KEY_DIR.RIGHT:
        this.dir = DIR.RIGHT
        p1.x = p2.x = this.playerPointer.x
        p1.y = this.playerPointer.y + 1
        p2.y = this.playerPointer.y + 2
        break
    }
  }

  /** 创建地图 */
  private initSnake() {
    this.mapContainer && this.mapContainer.removeAll()
    this.mapContainer = this.add.container(-425, -100, new Phaser.GameObjects.Container(this))
    // 初始化 蛇 10个元素
    for (var i = 0; i < 10; i++) {
      this.snake[i] = this.add.sprite(150 + i * CONFIG.BOX_SIZE, 150, 'player')
    }
  }

  /** 判断是否结束 */
  private gameOver() {}
  update() {
    this.fpsText.update()
  }
}
