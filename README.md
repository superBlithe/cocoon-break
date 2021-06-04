# 走进互动营销一：使用canvas引擎phaser实现一个推箱子h5游戏
技术栈：`canvas`、`phaser`、`TS`

canvas的一些小交互游戏是`互动营销`的重要表现方式。我们由浅入深逐步了解、掌握、熟悉h5游戏开发。


> 推箱子小游戏是很多人的童年回忆，我们就用简单的代码来实现一下。


## 推箱子需求

**思考:**
1、需要一个代码开发环境.
2、需要一个 canvas 引擎.
3、需要准备一个人物来做我们的主人公,一个箱子,一个箱子推放的终点,一个燃烧的箱子,还有我们的游戏地图(墙体).


## 一、基础环境搭建(TS+phaser)

游戏引擎只是为了我们更好的使用`canvas`.
有兴趣的同学可以了解下`pixi`, `egret`,`phaser`,`laya`,`cocos`,`fyge`(兑吧专用)等优秀的游戏引擎.其应用但不局限于游戏.
由于暂未开源，这里我们使用`phaser`来实现这个小游戏。

基础框架比较干净没有什么东西。down一个干净的模板。[phaser+ts项目模板](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/pushBox)


## 二、加载静态资源
> 首先,完成一个推箱子游戏,需要些什么?

### 1、准备素材

墙体,箱子,着火的箱子,箱子的终点,人物

### 2、编辑场景地图

为了可扩展,我们选用 20*20 的二维数组来编辑我们的地图.
定义数据映射关系.
0 -- 背景
1 -- 墙壁
2 -- 地板
3 -- 箱子
4 -- 终点
5 -- 人
6 -- 着火的箱子

- *src/constants/types.ts* 
```typescript
/** 格子 0 无 1 墙壁 2 地板 3 箱子 4 箱子终点 5 人 6 着火的箱子 */
export enum BLOCK {
    wall = 1,
    ground = 2,
    box = 3,
    end = 4,
    player = 5,
    badBox = 6
}
```


我们先来编辑第一关的地图.
- *src/constants/config.ts* 
```typescript
export const LEVEL = {
  LV_1: [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 2, 3, 4, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 4, 2, 3, 5, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
}
```


### 3、创建素材配置文件

- *src/constants/config.ts* 并将提前准备好的几个素材定义好
```typescript
/** 资源配置 */
export const RES = {
  wall: "//yun.duiba.com.cn/spark/assets/5fe60952f141c695902a1a7428bc4bb1c254627c.jpeg",
  box: "//yun.duiba.com.cn/spark/assets/c68150a7c6c0aaa9c88d64ac4ea51f26d9dfb386.jpeg",
  end: "//yun.duiba.com.cn/spark/assets/9aa5d0732bea222d58347bf435e7f67a851b9fc1.png",
  player: "//yun.duiba.com.cn/spark/assets/74a309f60978ba65bba21915ec75b2e9310dcc75.png",
  badBox: "//yun.duiba.com.cn/spark/assets/de6a7e6f261e74568acffe56ebe5bf8ffe5f49b2.png",
  resetBtn: "//yun.duiba.com.cn/spark/assets/c684fbca6528b566d2e65b9c491b9a23773b9aed.png"
}
```
### 4、预加载静态图片
- *src/scenes/preloadScene.ts*
```typescript
import { RES } from '../constants/config'

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    // RES.map(item =>)
    for (const key in RES) {
      if (Object.prototype.hasOwnProperty.call(RES, key)) {
        this.load.image(key, RES[key])
      }
    }
  }

  create() {
    this.scene.start('MainScene')
  }
}

```


## 三、搭建简单的舞台
新建 *src/scenes/mainScene.ts*

创建主场景`MainScene`;

```typescript
import { LEVEL } from '../constants/config'
import { DIR, BLOCK, KEY_DIR } from '../constants/types'


export default class MainScene extends Phaser.Scene {
  /** 地图容器 */
  private mapContainer: Phaser.GameObjects.Container
  /** 当前第几步文案 */
  private stepText: Phaser.GameObjects.Text
  /** 关卡文案 */
  private lvText: Phaser.GameObjects.Text
  private curMap: number[][]
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
    this.initGame()
  }

  /** 初始化游戏 */
  initGame() {
    this.step = 0
  }

  /** 重新开始本关 */
  resetGame() {
    this.initGame()
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
    
  }
}

```


## 四、绘制地图

这里我们绘制场景,使用数据映射关系,每一个格子`80*80`;
其实我们推箱子的原理就是更新数据结构.
每走一步,就是`更新我们的地图`,通过新的`二维数组`,渲染新的地图,达到视觉上推箱子的效果.

> 新增工具类：GUtils.copyArray 只是一个数组拷贝的方法。可以随意找个地方定义下
```typescript
export class GUtils {
  /** 拷贝数组 */
  static copyArray(arr: Array<any>) {
      let newArr:any = [];
      for (var i = 0; i < arr.length; i++) {
          newArr[i] = arr[i].concat();
      }
      return newArr;
  }
}
```
### 1、筛选出当前关卡地图
```typescript
    /** 初始化游戏 */
  initGame() {
    this.step = 0
    this.curMap = GUtils.copyArray(LEVEL[`LV_${this.lv}`])
    this.renderMap()
  }
```
### 2、如上图我们在`initGame()` 方法中去执行渲染地图方法 `this.renderMap()`
新增一个方法 renderMap
我们会根据`二维数组`的值来进行渲染。*格子 0 无 1 墙壁 2 地板 3 箱子 4 箱子终点 5 人 6 着火的箱子*。
空格子用矢量图`Graphics`, 其他格子使用`sprite`

```typescript

  /** 创建地图 */
  private renderMap() {
    this.mapContainer && this.mapContainer.removeAll()
    this.mapContainer = this.add.container(-425, -100, new Phaser.GameObjects.Container(this))
    this.curMap.forEach((colum, i) => {
      colum.forEach((row, j) => {
        switch (row) {
          case 0:
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
          case 2:
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
```



## 五、开始推箱子
我们这里需要使用phaser的键盘事件。
通过回调的`e.key`判断上`w`、下`s`、左`a`、右`d`.

在create方法里面添加`键盘事件`的监听。
```javascript
this.cursors = this.input.keyboard.createCursorKeys()
this.input.keyboard.on('keydown', this.onListenerKeyDown.bind(this))
```
增加`onListenerKeyDown`事件方法
```typescript
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
```

上面我们已经监听到了键盘事件; 大家也看到了有个p1,p2两个坐标。
但是不能直接进行移动，我们要判断一个格子`是否可以更新(推动)`,需要判断`下一个位置`和`下下个位置`.
所以我们需要记录这两个数组位置:

1、什么样的情况我们推不动?


- 推动方向是墙体
- 推动方向是箱子,箱子同一个方向的下一个位置是箱子,墙体(这里分为着火的箱子和目标箱子)



2、什么样的情况下我们可以移动?


- 下一个位置是空地
- 下一个位置是箱子终点
- 下一个位置是箱子,下下个位置是空地
- 下一个位置是箱子,下下个位置是箱子终点(分俩箱子)



3、注意


- 当前人物位置是箱子终点时,需要还原



思考完成之后我们就可以写代码了.


```typescript

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
```


然后使用新的二维数组去渲染出场景.
这个时候我们的推箱子基本就要大功告成了.


## 六、判断结果


**怎么样算是过关呢?**
比较关卡数组和当前数组.
当每一个箱子的终点都变成箱子的时候就过关了.
当然,我们也可以加上步数限制.


```javascript
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
```


还可以加上关卡和步数显示.


## 七、切换关卡


**怎么到下一关呢?**
其实也是更新数据啦.
数据关系映射好,直接进行关卡重新绘制即可.
同样,可以加个按钮,点击可以重玩本关.


```javascript
 /** 初始化游戏 */
initGame() {
    this.step = 0;
    this.curMap = GUtils.copyArray(LEVEL[`LV_${this.lv}`]);
    this.renderMap();
}

/** 重新开始本关 */
resetGame() {
    this.initGame();
}
```


至此,大功告成.
六一写个推箱子助助兴,回忆童年时光.
​

附上源码地址:[http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/pushBox](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/pushBox)
