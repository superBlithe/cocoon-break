---
highlight: atom-one-dark
theme: v-green
---
# 走进互动营销二：使用phaserjs实现一个贪吃蛇
技术栈：`canvas`、`phaser`、`TS` <br>
本篇完成项目地址[完整代码](https://github.com/superBlithe/cocoon-break/tree/mooc/snake)

听到实现个小游戏就很慌？`duck不必！` ，这要学不会，你来打我!<br>
今天还是初级文章，`手把手`带大家实现一个贪吃蛇。大佬绕过。你可以get：
- phaserjs的简单使用
- 一个游戏的模板仓库 phaser + ts + webpack5
- 一条可爱的蛇蛇

废话不多说，开干!

## 一、分析需求(小伙子，别慌！)

**这个游戏可以拆成以下模块:**<br>
- 一条可爱的蛇蛇
- 随机生成的水果
- wasd键盘控制上下左右
- 吃水果动作


## 二、基础环境搭建(TS+phaser)

### 基础框架
比较干净没有什么东西。提前给大家准备了一个干净的模板。[phaser + ts + webpack5项目模板](https://github.com/superBlithe/cocoon-break/tree/temp/phaser)

### 所需素材
就两张方块图片，大家可以去完整的项目里面去下载。[完整代码](https://github.com/superBlithe/cocoon-break/tree/mooc/snake)

### 素材配置以及预加载图片 
比较基础，不再赘述了，之前文章有 讲过。传送门[走进互动营销一：使用canvas引擎phaser实现一个推箱子h5游戏实战](https://juejin.cn/post/6969779221715501093)

## 三、游戏场景
我们来分析一下：
### 蛇
蛇是有一节一节组成的，每一节都是个sprite。所以蛇应该是一个数组。<br>
### 水果
每个水果就是也是一个节点。方便后面扩展，我么也把水果初始化成数组<br>
### 方向
`wasd` 分别为上下左右4个方向。我们用`向量`进行表示。 当然你可以用x,y也可以的。后面会讲。

### 创建主场景`MainScene`;

新建 *src/scenes/mainScene.ts*
```typescript
import FpsText from '../objects/fpsText'
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
    this.fpsText = new FpsText(this)
    this.moveVec = new Phaser.Math.Vector2(0, 0)
    this.initGame()
  }

  /** 初始化游戏 */
  initGame() {}

  /** 重新开始本关 */
  resetGame() {
    this.initGame()
  }

  /** 判断是否结束 */
  private gameOver() { }
  /**帧 */
  update() {
    this.fpsText.update()
  }
}

```
这个时候不出意外，就可以看到一个空白的场景，左上角有个FPS.

## 四、画一条小蛇蛇

我么先定义一下每一节蛇蛇的宽高`BOX_SIZE`。<br>
以及初始化一条长度为`SNAKE_START_LENGTH` 蛇蛇。<br>

新建 *src/constants/config.ts*
```typescript

export const CONFIG = {
  /** 格子大小 */
  BOX_SIZE: 40,
  /** 初始的蛇蛇长度 */
  SNAKE_START_LENGTH: 4
}
```
我们新增两个方法。
- `initSnake`: 初始化蛇蛇。循环`SNAKE_START_LENGTH`，生成坐标，然后去调用下面
- `genneratorSnakeItem`：根据坐标生成蛇的一节item

``` typescript
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
```

我们在`initGame`执行`this.initSnake()`
此时应该可以看到一条长度为4的小蛇，下一步就让小蛇动起来：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7cf0d396dbe4b3b94ea31c01f96dfd0~tplv-k3u1fbpfcp-watermark.image)

## 五、让小蛇蛇跑起来
小蛇就这么躺着肯定不行，怎么让它动起来呢？
- 监听`wasd`方向键
- 小蛇根据方向，进行移动

### 先说方向
不管`wasd`哪个键，我们都用是坐标x,y来表示方向。
- `w`向上，那么{x: 0 , y: -1}
- `a`向左，那么{x: -1 , y: 0}
- `s`向下，那么{x: 0 , y: 1}
- `d`向上，那么{x: 1 , y: -0}
在`帧事件`里面我们去把小蛇的坐标加上对应的方向坐标。小蛇就可以移动了。

### 蛇移动
这里再重新强调下：`数组的最后一项为蛇头`<br>
举个栗子：我们按了`d`键，让蛇向`右`移动。我们只需要移动蛇尾就可以达到效果了。蛇尾的**新**坐标为`蛇头的坐标` + 上`方向向量`


我亲手画个美妙的示例图:
![蛇方向解释.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de2587794fb64d9aa29c08489b3448b6~tplv-k3u1fbpfcp-watermark.image)

那就上代码吧：<br>
首先`create`生命周期里面把`键盘事件`监听以及`方向向量`初始化掉。

```typescript
create() {
    this.fpsText = new FpsText(this)
    this.cursors = this.input.keyboard.createCursorKeys()
    this.input.keyboard.on('keydown', this.onListenerKeyDown.bind(this))
    this.moveVec = new Phaser.Math.Vector2(0, 0)
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
```
然后关键代码来了。<br>
为了控制速度，我们增加一个`updateDelay`的数字。每一帧+1。然后只有在`20`帧才真正渲染一次。这个`20`可以后面扩展成为速度。<br>
`update`事件里面添加如下代码
```typescript
  update(dt) {
    this.fpsText.update()
    this.updateDelay++
    if (this.moveVec.x === 0 && this.moveVec.y === 0) return
    if (this.updateDelay % 20 === 0) {
      this.updateDelay = 0;
      // 数组最后一项为 蛇头
      let snakesFirst = this.snakes[this.snakes.length - 1]
      let snakesLast = this.snakes.shift()
      //获取本次预移动的点坐标
      snakesLast!.x = snakesFirst.x + this.moveVec.x * CONFIG.BOX_SIZE
      snakesLast!.y = snakesFirst.y + this.moveVec.y * CONFIG.BOX_SIZE
      //添加到头部
      // this.physics.add.overlap(snakesLast, this.fruits, this.collectFruit, null, this)
      this.snakes.push(snakesLast!)
    }
  }
```
此时此刻，你的小蛇蛇应该可以移动了。这部分代码比较长，如果不好写，可以直接参考源码：[完整代码](https://github.com/superBlithe/cocoon-break/tree/mooc/snake)

## 六、吃水果

### 生成水果
我们生成水果的时候，无非就是`随机坐标`放置一个水果。<br>
随机坐标的学问在于：
- 坐标需要和蛇的格子一样。我们需要计算出，整个屏幕大概`x,y`分别可以放置多少个水果`maxX,maxY`。然后再这个里面取随机数。
- 新生成的水果，不能生成在`蛇身上`。如果落到蛇身上了，继续递归一个新的坐标。

新增`genneratorFruit`以及获取随机坐标`getNewFruitPos`。为了吃到第一个水果，记得在`initGame`方法里面调用一次`this.genneratorFruit()`。
```typescript
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
```

### 吃水果
前面我们已经把水果和蛇的格子坐标统一了，这里的吃水果就好做了。
- 1、要判断`蛇头`有没有`碰到水果`。
- 2、在水果坐标这里，新生成一个`蛇的节item`。
- 3、销毁当前水果，重新生成一个

`update` 方法里面新增检测是否碰到水果`this.collectFruit()`。
创建collectFruit方法
```typescript
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
```

打开浏览器看看？ 你的贪吃蛇就是不是就完成了！

## 碰撞自己及碰墙
我们需要在`update`方法里面新增两个检测,因为蛇头在最前面，我们只需要判断蛇头这个元素坐标就OK了。
- 不能碰到自己`this.checkSelf(snakesFirst)`
- 不能撞墙`this.checkWall(snakesFirst)`

```typescript
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
  
```

## 结语
一个简单的小游戏就完成了。
phaserjs里面封装好的`碰撞检测`。可以直接用。因为这里的碰撞很简单，我们就自己实现了。

如果大家对`移动端`、`互动营销`、`h5游戏`感兴趣，点个赞，点个关注。后续会难度会陆续增加。
