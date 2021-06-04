import FpsText from '../objects/fpsText'
import { GUtils } from '../constants/util'
import { LEVEL } from '../constants/config'
import { DIR, BLOCK, KEY_DIR } from '../constants/types'

export default class MainScene extends Phaser.Scene {
  fpsText
  /** 鼠标事件 */
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys
  /** 地图容器 */
  private mapContainer: Phaser.GameObjects.Container
  private resetBtn: Phaser.GameObjects.Sprite
  /** 当前第几步文案 */
  private stepText: Phaser.GameObjects.Text
  /** 关卡文案 */
  private lvText: Phaser.GameObjects.Text
  private curMap: number[][]
  /** 方向 */
  private dir: DIR = DIR.UP
  /** 当前人物角色的位置(位于二维数组) */
  private playerPointer: { [key: string]: number } = { x: 0, y: 0 }

  private _lv: number = 1
  private _step: number = 0
  private get step(): number {
    return this._step
  }
  private set step(v: number) {
    this._step = v
    this.stepText && (this.stepText.text = '步数' + v)
  }

  private get lv(): number {
    return this._lv
  }
  private set lv(v: number) {
    this._lv = v
    this.lvText && (this.lvText.text = '关卡' + v)
  }
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.input.keyboard.on('keydown', this.onListenerKeyDown.bind(this))
    this.fpsText = new FpsText(this)

    this.stepText = this.add
      .text(this.cameras.main.width - 15, 15, `步数0`, {
        color: '#fff',
        fontSize: '44px'
      })
      .setOrigin(1, 0)
      .setDepth(10)
    this.lvText = this.add
      .text(this.cameras.main.width - 155, 15, `关卡1`, {
        color: '#fff',
        fontSize: '44px'
      })
      .setOrigin(1, 0)
      .setDepth(10)

    this.resetBtn = this.add.sprite(0, 1100, 'resetBtn').setOrigin(0, 0).setDepth(10).setInteractive()
    // this.resetBtn.addEventListener(FYGE.MouseEvent.CLICK, this.resetGame, this)
    this.resetBtn.on('pointerdown', this.resetGame, this)
    this.initGame()
  }

  /** 初始化游戏 */
  initGame() {
    this.step = 0
    this.curMap = GUtils.copyArray(LEVEL[`LV_${this.lv}`])
    this.renderMap()
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

    this.onCheckMove(p1, p2)
  }

  /** 判断移动 */
  onCheckMove(p1: { [key: string]: number }, p2: { [key: string]: number }) {
    const { x: x1, y: y1 } = p1
    const { x: x2, y: y2 } = p2
    const { x, y } = this.playerPointer
    //墙壁不能移动
    if (this.curMap[x1][y1] == BLOCK.wall) {
      return false
    }
    //1箱子 2墙壁不能移动
    if (
      this.curMap[x1][y1] == BLOCK.box &&
      (this.curMap[x2][y2] == BLOCK.wall || this.curMap[x2][y2] == BLOCK.box || this.curMap[x2][y2] == BLOCK.badBox)
    ) {
      return false
    }
    //6火箱子 不能移动
    if (
      this.curMap[x1][y1] == BLOCK.badBox &&
      (this.curMap[x2][y2] == BLOCK.wall || this.curMap[x2][y2] == BLOCK.box || this.curMap[x2][y2] == BLOCK.badBox)
    ) {
      return false
    }

    // 地板
    if (this.curMap[x1][y1] == BLOCK.ground || this.curMap[x1][y1] == BLOCK.end) {
      this.curMap[x][y] = BLOCK.ground
      this.curMap[x1][y1] = BLOCK.player
    }
    // 1箱子 地板
    if (this.curMap[x1][y1] == BLOCK.box && this.curMap[x2][y2] == BLOCK.ground) {
      this.curMap[x][y] = BLOCK.ground
      this.curMap[x1][y1] = BLOCK.player
      this.curMap[x2][y2] = BLOCK.box
    }
    //1箱子 和 终点
    if (this.curMap[x1][y1] == BLOCK.box && this.curMap[x2][y2] == BLOCK.end) {
      this.curMap[x][y] = BLOCK.ground
      this.curMap[x1][y1] = BLOCK.player
      this.curMap[x2][y2] = BLOCK.box
    }

    //火箱子和 地板
    if (this.curMap[x1][y1] == BLOCK.badBox && this.curMap[x2][y2] == BLOCK.ground) {
      this.curMap[x][y] = BLOCK.ground
      this.curMap[x1][y1] = BLOCK.player
      this.curMap[x2][y2] = BLOCK.badBox
    }

    //火箱子和终点
    if (this.curMap[x1][y1] == BLOCK.badBox && this.curMap[x2][y2] == BLOCK.end) {
      this.curMap[x][y] = BLOCK.ground
      this.curMap[x1][y1] = BLOCK.player
      this.curMap[x2][y2] = BLOCK.end
    }

    if (LEVEL[`LV_${this.lv}`][x][y] == BLOCK.end) {
      this.curMap[x][y] = BLOCK.end
    }
    this.step++

    //重新渲染
    this.renderMap()
    if (this.gameOver()) {
      this.lv++
      this.initGame()
    }
  }

  /** 创建地图 */
  private renderMap() {
    this.mapContainer && this.mapContainer.removeAll()
    this.mapContainer = this.add.container(-425, -100, new Phaser.GameObjects.Container(this))
    this.curMap.forEach((colum, i) => {
      colum.forEach((row, j) => {
        switch (row) {
          case 0:
          case 2:
            let block = new Phaser.GameObjects.Graphics(this)
            this.mapContainer.add(block)
            block.fillStyle(0x73ad45, 1).fillRect(0, 0, 80, 80)
            block.setPosition(j * 80, i * 80)
            break
          case 1:
            let wall = new Phaser.GameObjects.Sprite(this, j * 80, i * 80, 'wall').setOrigin(0, 0)
            this.mapContainer.add(wall)
            wall.displayWidth = wall.displayHeight = 80
            break
          case 3:
            let box = new Phaser.GameObjects.Sprite(this, j * 80, i * 80, 'box').setOrigin(0, 0)
            this.mapContainer.add(box)
            box.displayWidth = box.displayHeight = 80
            break
          case 4:
            let end = new Phaser.GameObjects.Sprite(this, j * 80, i * 80, 'end').setOrigin(0, 0)
            this.mapContainer.add(end)
            end.displayWidth = end.displayHeight = 80
            break
          case 5:
            let player = new Phaser.GameObjects.Sprite(this, j * 80 + 10, i * 80, 'player').setOrigin(0, 0)
            this.mapContainer.add(player)
            player.displayWidth = 212 * 0.25
            player.displayHeight = 329 * 0.25
            this.playerPointer.x = i
            this.playerPointer.y = j
            break
          case 6:
            let badBox = new Phaser.GameObjects.Sprite(this, j * 80, i * 80, 'badBox').setOrigin(0, 0)
            this.mapContainer.add(badBox)
            badBox.displayWidth = badBox.displayHeight = 80
            break
        }
      })
    })
  }

  /** 判断是否结束 */
  private gameOver() {
    const mapList = LEVEL[`LV_${this.lv}`]
    for (let i = 0; i < mapList.length; i++) {
      for (let j = 0; j < mapList[i].length; j++) {
        if (mapList[i][j] == BLOCK.end && this.curMap[i][j] != BLOCK.box) {
          return false
        }
      }
    }
    return true
  }
  update() {
    this.fpsText.update()
  }
}
