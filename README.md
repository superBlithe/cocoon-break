

> 王梦佳：“熊东起GG，我想吃水果~”

熊东起：“这哪受得了，给你切”



先看看效果
![切西瓜gif.gif](https://cdn.nlark.com/yuque/0/2021/gif/684024/1624331429403-909e5589-1e76-4179-9ae3-2db453fbe818.gif#clientId=u46e7712d-232e-4&from=drop&id=u95fed642&margin=%5Bobject%20Object%5D&name=%E5%88%87%E8%A5%BF%E7%93%9Cgif.gif&originHeight=621&originWidth=352&originalType=binary&ratio=2&size=1487634&status=done&style=none&taskId=udbb9ad3f-f9fa-4070-84ed-ccb4ae28401)


废话话不多说，直接开整！


## 文章索引
完整代码：[http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step6](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step6)
### 文章很冗余，很多，大家不必从头跟着走，每一节都会有一个基础仓库，可以在这个基础上进行开发。


- 方案
- step1: 初始化&简单布局
- step2: 刀光实现
- step3: 刀碰撞水果，matterjs登场 
   - matterjs结合FYGE
   - 重力
   - 碰撞

 

- step4: 物理引擎&碰撞检测
- step5: 游戏页



## 方案


> 换个思路，我们先来拆解，然后说实现。就像拼积木一样，逐步句完成。



- **_两_**个场景：`开始页`、`游戏页`
- **_两_**个关键的类：`水果`、`刀光`
- 物理引擎：重力、碰撞检测



## 可跳过step1


## step1: 初始化&简单布局


> 王梦佳说：“我啥也不会，咋办呢~”

熊东起：那我们就从0开始吧~



### 已经提前给大家准备好了初始项目


大家可以克隆基础项目：[http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step1](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step1)


基础项目都干了啥呢？


- 各类图片
- 创建目录
- 入口文件main.ts加载这些图片，后面只需要从缓存取就好了
- 封装一些方法



#### src项目目录：


- components：`存放各类组件，比如背景、刀光、水果` 
   - GameBg.ts

 

- config 
   - GameCfg.ts `游戏配置`
   - GUtils.ts `工具方法`

 

- GameScene 
   - GameScene.ts `游戏页`
   - StartScene.ts `开始页`

 

- main.ts `入口，文件`



#### 开始游戏按钮


开始按钮其实是分为圆环和西瓜🍉


声明类型


```typescript
export class StartScene extends FYGE.Container {
  /** 开始按钮 */
  private startBtnGroup: FYGE.Container;
  private btnOut: FYGE.Sprite;
  /** 水果：西瓜》 开始按钮 */
  private xigua: Fruit;
  /** 西瓜的动画 */
  private TweenXigu: FYGE.Tween;
```


真正的按钮西瓜需要是一个水果

我们这里先把`圆环及圆环的动画`

让它逆时针转起来


```typescript
  private initBtn() {
    this.startBtnGroup = this.addChild(new FYGE.Container());
    this.startBtnGroup.position.x = 200;
    this.startBtnGroup.position.y = 350;
    let btnOut = this.startBtnGroup.addChild(new FYGE.Sprite(getRes(RES_MAP.newGameBtnOut)));
    btnOut.anchorX = btnOut.anchorY = btnOut.width / 2;
    FYGE.Tween.get(btnOut, { loop: true }).to({ rotation: -360 }, 8000);
    this.btnOut = btnOut;
  }
```


#### 简单水果类


为什么叫`简单`水果类？因为这里仅仅是个展示的节点
开始页的西瓜，以及游戏页的各类水果。都会从这个类进行扩展。
我们先创建一个简单的水果类。
**新建components/Fruit.ts**


```typescript
import { FRUIT_NAME, RES_MAP, SS } from "../config/GameCfg";
import { ADD_SPRITE, getRes, GUtils } from "../config/GUtils";

export default class Fruit extends FYGE.Sprite {
  constructor() {
    super();
    /** 防止贴图禁用后，后面没办法复用。 */
    this.texture = getRes(RES_MAP["fruitXigua"]).clone();
    this.anchorX = this.width / 2;
    this.anchorY = this.height / 2; 
  }
}
```


然后呢，在开始页引入进来，并进行声明


```typescript
 /** 水果：西瓜》 开始按钮 */
  private xigua: Fruit;
```


然后再initBtn方法中进行初始化，并添加顺时针旋转的动效


```typescript
  let xigua = this.addChild(new Fruit());
  xigua.x = 250;
  xigua.y = 400;
  this.TweenXigu = FYGE.Tween.get(xigua, { loop: true }).to({ rotation: 360 }, 4000);
  this.xigua = xigua;
```


基础搭建完事了，我们下面会进行刀光的绘制


## step2: 刀光实现


本节起始项目：[http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step2](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step2)


> 王梦佳：”好吓人喔~，还有刀光！“

熊东起：”必须的啊，不光开始页有，游戏页也要有，而且还要参与后面的碰撞检测呢~“



刀光其实是画的多边形。`drawPolygon`可以接受一组坐标`Points`。


`鼠标移动`的时候，进行捕获坐标。
`鼠标抬起`的时候，清除绘制内容。


那就开始吧~
**新建components/Blade.ts**


```typescript
import { RES_MAP, SS } from "../config/GameCfg";
import Tpoint from "./Tpoint";

//每个点存活时间
const POINTLIFETIME = 100;
export default class Blade extends FYGE.Graphics {
  private points: Tpoint[] = [];

  public drawBlade(e: FYGE.MouseEvent) {
    this.clear();
    let point = new Tpoint(e.localX, e.localY);
    point.time = new Date().getTime();
    this.points.push(point);
    if (new Date().getTime() - this.points[0].time > POINTLIFETIME) {
      this.points.shift();
    }
    // 点太少，误触
    if (this.points.length < 2) return;
    this.beginFill(0xffffff);
    this.drawPolygon(this.points);
    this.endFill();
  }

  public reset() {
    this.points = [];
    this.clear();
  }
}
```


> 王梦佳：”`Tpoint`是个啥啊？“

熊东起：”就是个普通的Point, 扩展一个time字段。你自己新建吧。“

熊东起：”我们要添加事件咯。“
**StartScene.ts**



```typescript
  /** 刀光 */
  private blade: Blade;
  // init() 里添加
  this.blade = this.addChild(new Blade());

/** 监听事件 */
  private addEvents() {
    this.stage.addEventListener(FYGE.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
    this.stage.addEventListener(FYGE.MouseEvent.MOUSE_UP, this.onMouseUp, this);
  }

  /** 移除事件 */
  private removeEvents() {
    this.stage.removeEventListener(FYGE.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
    this.stage.removeEventListener(FYGE.MouseEvent.MOUSE_UP, this.onMouseUp, this);
  }

  private onMouseUp() {
    this.blade.reset();
  }

  /** 鼠标移动 */
  private onMouseMove(e) {
    _throttle(this.blade.drawBlade(e), 50);
    // this.blade.checkCollide(this.xigua, this.doStart.bind(this));
  }
```


## step3: 刀碰撞水果，matterjs登场


本节起始项目：[http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step3](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step3)


如果只是开始按钮的西瓜碰撞检测，我们可以直接使用FYGE的`点和物体sprite.hitTestPoint`的方法。事实上我刚开始也是这么做的。
但是后面还要模拟重力，模拟物体和物体碰撞。所以就引入了matterjs。
**安装matterjs**


```
  yarn add matter-js @types/matter-js -S
```


### 怎么使用呢？


之前打砖块文章有聊过一些用法。可以结合参考。我们这里称matterjs创建的为`物理世界`，FYGE创建的称为`视图世界`。


- 首先我们要创建一个物理世界
- 然后呢? 在物理世界画一些刚体，和当前的FYGE里面的节点绑定起来
- 监听物理世界，改变视图世界



#### 创建物理世界


隐藏背景(方便调试)，然后执行创建物理世界方法, 调试的时候把render渲染打开


**init()**


```typescript
// this.addChild(new GameBg());
  this.createPhyWorld()
```


**createPhyWorld()**


```typescript
  /** 创建物理世界 */
   private createPhyWorld() {
    const { Engine, Render, Runner, Composite, Bodies, World, Composites } = Matter;
    this.engine = Engine.create();
    this.world = this.engine.world;
     this.engine.gravity.y = 0;
     
    /** 真正运行 */
    this.runner = Runner.create();
    Runner.run(this.runner, this.engine);
    // @ts-ignore
    this.composites = Composite;
     
    // 临时渲染引擎，调试用
    var render = Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width: 750,
        height: 600,
      },
    });
    Render.run(render);
  }
```


#### 增加物理世界的刀光


我们只需要扩展Blade类，然后增加一个属性PhyBody。
在绘制刀光的时候，同时在物理世界绘制一份。
我们在每次绘制`drawBlade`方法之前都要清除之前的绘制。


`SS` 是 `SS = document.body.clientWidth / 750;` 为了同步两个世界坐标的换算比例。


完整的刀光代码
**Blade.ts**


```typescript
import * as Matter from "matter-js";
import { RES_MAP, SS } from "../config/GameCfg";
import Tpoint from "./Tpoint";

//每个点存活时间
const POINTLIFETIME = 100;
export default class Blade extends FYGE.Graphics {
  private points: Tpoint[] = [];
  private _body: Matter.Body;
  get phyBody(): Matter.Body {
    return this._body;
  }
  set phyBody(v: Matter.Body) {
    this._body = v;
  }

  public drawBlade(e: FYGE.MouseEvent) {
    this.clear();
    let point = new Tpoint(e.localX, e.localY);
    point.time = new Date().getTime();
    this.points.push(point);
    if (new Date().getTime() - this.points[0].time > POINTLIFETIME) {
      this.points.shift();
    }
    // 点太少，误触
    if (this.points.length < 2) return;
    this.beginFill(0xffffff);
    this.drawPolygon(this.points);
    this.endFill();
    // @ts-ignore
    this.phyBody && this.parent.composites.remove(this.parent.world, [this.phyBody]);
    // 物理世界也跟着一起画
    this.phyBody = Matter.Bodies.fromVertices(
      e.localX * SS,
      e.localY * SS,
      [
        this.points.map((p) => {
          let { x, y } = p;
          return { x: x * SS, y: y * SS };
        }),
      ],
      {
        isStatic: true,
      }
    );
    // @ts-ignore
    this.parent.composites.add(this.parent.world, [this.phyBody]);
  }

  public reset() {
    this.points = [];
    this.clear();
    // @ts-ignore
    this.phyBody && this.parent.composites.remove(this.parent.world, [this.phyBody]);
  }
}
```


刀光就成了~


### 也给水果-西瓜添加一个物理刚体


方法跟刀光一样，这里直接贴代码了


```typescript
export default class Fruit extends FYGE.Sprite {
  public phyBody: Matter.Body;
  constructor() {
    super();
    /** 防止贴图禁用后，后面没办法复用。 */
    this.texture = getRes(RES_MAP["fruitXigua"]).clone();
    this.anchorX = this.width / 2;
    this.anchorY = this.height / 2; 
    this.phyBody = Matter.Bodies.circle(this.x * SS, this.y * SS, (this.width / 2) * SS, {
      isStatic: true,
      isSensor: true, // 传感器，可以检测到碰撞，但是不参与碰撞
      render: { fillStyle: "#060a19" },
      collisionFilter: { group: -1 }, // 参考reademe里面的碰撞规则
    });
    this.setPhyPos();
  }
  set fx(value: number) {
    this.position.x = value;
    this.setPhyPos();
  }

  set fy(value: number) {
    this.position.y = value;
    this.setPhyPos();
  }

  setPhyPos() {
    Matter.Body.setPosition(this.phyBody, {
      x: (this.x + this.width / 2) * SS,
      y: (this.y + this.height / 2) * SS,
    });
  }
}
```


然后呢？
在首页`initBtn`方法里, 把西瓜刚体添加进去，然后把x,y改成`fx`、 `fy`，这样会同时设置视图世界以及物理刚体的坐标。


```
xigua.fx = 250;
xigua.fy = 400;
// @ts-ignore
this.composites.add(this.world, [xigua.phyBody]);
```


下面我们要开启物理引擎及碰撞了


## step4: 物理引擎&碰撞检测


本节起始项目：[http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step4](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step4)


> 王梦佳：”这是要开始切水果了吗？“

熊东起：”是的呀，MM“



不出意外的话，可以在屏幕上看到西瓜，以及刀光都有个`白色的框框`了。没错，那个就是物理世界画的刚体。

如果有意外，找`@张超`。


`西瓜`和`刀光`这俩物理刚体都已经绘制完成，下面就要让他们进行碰撞。


首先在`initBtn()`加上, 开始游戏页，我们已经把重力设置成0了，所以不用static了`


```typescript
  Matter.Body.setStatic(this.xigua.phyBody, false);
```


然后在`createPhyWorld()`中添加事件监听


```typescript
  Matter.Events.on(this.engine, "collisionStart", this.onCollisionStart.bind(this));
```


添加对应的方法


```typescript
 /** 划过开始按钮 */
  doStart() {
    alert("开始游戏");
  }
  /**
   * @description: 碰撞检测
   */
  onCollisionStart(e) {
    let pairs = e.pairs;
    if (this.xigua.phyBody.id === pairs[0].bodyA.id) {
      this.doStart();
    }
  }
```


### 钢铁碰撞会触发，一个`collisionStart`回调，然后我们判断钢铁的id是不是西瓜的id就可以了。由于西瓜`不能被碰跑`,所以西瓜刚体加个属性`isSensor`


```typescript
isSensor: true, // 传感器，可以检测到碰撞，但是不参与碰撞
```


大家可以看到，西瓜的刚体已经掉落了。


然后这样就可以`alert`开始游戏了
开始游戏我们需要做以下几个处理


- 西瓜切开，
- 西瓜掉落
- 清除当前页面，进入新的



```typescript
  /** 划过开始按钮 */
  doStart() {
    this.engine.gravity.y = 1.2;
    /** 停止西瓜转动 */
    FYGE.Tween.removeTweenSelf(this.TweenXigu);
    this.btnOut.visible = false;
    // this.xigua.doHalf();
    this.removeEvents();
    setTimeout(() => {
      // @ts-ignore
      this.composites.clear(this.world, true);
      Matter.Runner.stop(this.runner);
      Matter.Engine.clear(this.engine);
      this.parent.addChild(new GameScene());
      this.parent.removeChild(this);
    }, 1000);
  }
```


大家看上面代码，看到有个doHalf。就是切西瓜了，目前先注释。


### 视图世界的西瓜掉落


大家刚才都看到了物理刚体的掉落，而视图世界的西瓜还在原地。
其实很简单，就是每一帧去取物理刚体的坐标，然后更改视图世界西瓜的坐标。
**Fruit.ts constructor()**


```typescript
   this.addEventListener(
      FYGE.Event.ADDED_TO_STAGE,
      () => {
        this.addEventListener(FYGE.Event.ENTER_FRAME, this.onFarm, this);
      },
      this
    );
```


**Fruit.ts onFarm()**


```typescript
  /** 根据物理刚体，更新当前的坐标。 */
  private onFarm() {
    this.x = this.phyBody.position.x / SS - this.width / 2;
    this.y = this.phyBody.position.y / SS - this.height / 2;
  }
```


### 西瓜切开


这个更简单，就是原来的图隐藏，然后给这个西瓜添加两个子节点。图片提前准备好了。


**Fruit.ts**


```typescript
  /** 水果的两半是两个不同的图。 */
  private half_pre: FYGE.Sprite;
  private half_next: FYGE.Sprite;
 /** 切成2半 */
   doHalf() {
    if (this.half_next || this.half_pre) return;
    this.half_pre = this.addChild(ADD_SPRITE(getRes(RES_MAP["fruitXigua" + "1"]), -5, 0));
    this.half_next = this.addChild(ADD_SPRITE(getRes(RES_MAP["fruitXigua" + "2"]), 5, 0));
    this.texture.valid = false;
    FYGE.Tween.get(this.half_pre).to({ x: GUtils.getRandom(-120, -80), rotation: GUtils.getRandom(-50, -30) }, GUtils.getRandom(2000, 4000));
    FYGE.Tween.get(this.half_next).to({ x: GUtils.getRandom(80, 120), rotation: GUtils.getRandom(30, 50) }, GUtils.getRandom(2000, 4000));
    Matter.Body.setStatic(this.phyBody, false);
  }
```


再看看，是不是就有了切开动画了。
`RES_MAP["fruitXigua" + "1"]` 有人注意到这句话了么，两个字符串你搁着+啥+?

现在只有西瓜么~，后面还有其他水果，每个水果的切开，都是水果名字+“1”


------------至此，开始页就完成了。下面我们进行游戏页。


## step5: 游戏页


本节起始项目：[http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step5](http://gitlab2.dui88.com/no.4/cocoon-break/tree/mooc/fruit-step5)


> 王梦佳："熊GG，终于要开始游戏了嘛，好期待啊"

熊东起：”想多啦，前面基本都已经实现了，游戏页也不过是简单的随机水果，记个分啥的“
如上他俩所述，游戏页已经没有什么新玩意了。



### 扩展水果


- 水果的名字动态取
- 给水果加一个是否死亡的状态
**Fruit.ts**



```typescript
  public die: boolean = false;
  /** 水果名字 */
  private fName: FRUIT_NAME;

   constructor(fName: FRUIT_NAME = "fruitXigua") {
    super();
    this.fName = fName;
    /** 防止贴图禁用后，后面没办法复用。 */
    this.texture = getRes(RES_MAP[this.fName]).clone();
   }
```


切开的事件里面也换成真实水果图片，以及die状态
**Fruit.ts doHalf**


```typescript
this.half_pre = this.addChild(ADD_SPRITE(getRes(RES_MAP[this.fName + "1"]), -5, 0));
this.half_next = this.addChild(ADD_SPRITE(getRes(RES_MAP[this.fName + "2"]), 5, 0));
this.die = true;
```


### 下面几个之前都讲过了。这里直接贴出源码


- 创建物理世界
- 生成水果
- 随机初始化水果
- 给水果一个反作用力



完整的GameScene.ts


```typescript
import Blade from "../components/blade";
import Fruit from "../components/Fruit";
import GameBg from "../components/GameBg";
import { RES_MAP, FRUIT_NAME, FRUIT_ARRAY, OVER_COUNT } from "../config/GameCfg";
import { ADD_TEXT, GUtils, _throttle } from "../config/GUtils";
import * as Matter from "matter-js";
import { StartScene } from "./StartScene";

export class GameScene extends FYGE.Container {
  private engine: Matter.Engine;
  private world: Matter.World;
  private render: Matter.Render;
  private runner: Matter.Runner;
  private composites: Matter.Composite;
  private gameover: boolean = false;
  /** 水果list */
  private fruits: Fruit[] = [];
  /** 水果的最大数量，会随着分数增加难度 */
  private fruitMax: number = 4;

  /** 关卡 */
  private _lv: number = 1;
  /** 关卡文字 */
  private lvText: FYGE.TextField;
  private get lv(): number {
    return this._lv;
  }
  private set lv(v: number) {
    this._lv = v;
    this.lvText && (this.lvText.text = "第" + v + "关");
  }
  /** 刀光 */
  private blade: Blade;
  /** 分数文字 */
  private scoreText: FYGE.TextField;
  /** 分数 */
  private _score: number = 0;
  private get score(): number {
    return this._score;
  }
  private set score(v: number) {
    this._score = v;
    this.scoreText && (this.scoreText.text = "分数:" + v);
    FYGE.Tween.removeTweens(this.scoreText);
    FYGE.Tween.get(this.scoreText)
      .set({ scaleX: 1, scaleY: 1, anchorX: 30 })
      .to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 100)
      .to({ scaleX: 1, scaleY: 1 }, 50);
    if (v > 10) {
      this.lv = Math.ceil(v / 10);
    }
  }
  /** 丢掉的数量 */
  private _dieCount: number = 0;
  /** 文字 */
  private dieCountText: FYGE.TextField;
  private get dieCount(): number {
    return this._dieCount;
  }
  private set dieCount(v: number) {
    this._dieCount = v;
    this.dieCountText && (this.dieCountText.text = "丢失:" + v);
    // 丢的太多了，游戏结束
    v >= OVER_COUNT &&
      (this.gameover = true) &&
      setTimeout(() => {
        this.gameOver();
      }, 17);
  }
  constructor() {
    super();
    this.addEventListener(
      FYGE.Event.ADDED_TO_STAGE,
      () => {
        this.addEvents();
        this.initGame();
      },
      this
    );
  }

  /** 初始化游戏 */
  initGame() {
    this.addChild(new GameBg());

    this.blade = this.addChild(new Blade());

    this.createPhyWorld();
    /** 当然是生成水果了 */
    this.genneratorFruit();
    /** 关卡 */
    this.lvText = this.addChild(ADD_TEXT("第1关", 30, "#66ff00", 50, 50));
    /** 分数 */
    this.scoreText = this.addChild(ADD_TEXT("分数:0", 40, "#66ffff", this.stage.width / 2 - 50, 50));
    /** 丢失跑掉的水果 */
    this.dieCountText = this.addChild(ADD_TEXT("丢失:0", 30, "#ff3399", this.stage.width - 150, 50));
  }
  /** 创建物理世界 */
  private createPhyWorld() {
    const { Engine, Render, Runner, Composite, Bodies, World, Composites } = Matter;
    this.engine = Engine.create();
    this.world = this.engine.world;
    this.engine.gravity.y = 0.5;
    // 临时渲染引擎，调试用
    var render = Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width: 750,
        height: 600,
      },
    });

    Render.run(render);

    /** 真正运行 */
    this.runner = Runner.create();
    Runner.run(this.runner, this.engine);
    // @ts-ignore
    this.composites = Composite;
    Matter.Events.on(this.engine, "collisionStart", this.onCollisionStart.bind(this));
  }
  /** 生成水果 */
  genneratorFruit() {
    if (this.gameover) return;
    while (this.fruits.length < this.fruitMax + this.lv) {
      this.randomFruit();
    }
  }

  /** 随机水果 */
  randomFruit() {
    let index = Math.floor(Math.random() * FRUIT_ARRAY.length);
    let fruit = new Fruit(FRUIT_ARRAY[index]);

    fruit.fx = GUtils.getRandom(this.stage.width * 0.25, this.stage.width * 0.75);
    fruit.fy = this.stage.height;
    // @ts-ignore
    this.composites.add(this.world, [fruit.phyBody]);

    FYGE.Tween.get(fruit, { loop: true }).to({ rotation: 360 }, 4000);

    this.addChild(fruit);
    // timeout是 调试用的
    setTimeout(() => {
      if (!this.stage) return;
      Matter.Body.setStatic(fruit.phyBody, false);
      let sh = this.stage.height / 1334;
      Matter.Body.setVelocity(fruit.phyBody, { x: GUtils.getRandom(-3, 3), y: GUtils.getRandom(-15 * sh, -12 * sh) });
    }, GUtils.getRandom(0, 2000));
    this.fruits.push(fruit);
  }

  /**
   * @description: 碰撞检测
   */
  onCollisionStart(e) {
    let pairs = e.pairs;
    pairs.map((p) => {
      let needHalf = this.fruits.find((fruit) => fruit.phyBody?.id === p.bodyA?.id);
      !needHalf?.die && (this.score += 1) && needHalf?.doHalf();
    });
  }
  /** 鼠标移动 */
  private onMouseMove(e) {
    _throttle(this.blade.drawBlade(e), 50);
    /** 废弃，本来是用的hitTestPoint来做的碰撞检测。 */
    // this.blade.checkCollide(this.xigua, this.doStart.bind(this));
  }

  /** 监听事件 */
  private addEvents() {
    this.stage.addEventListener(FYGE.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
    this.stage.addEventListener(FYGE.MouseEvent.MOUSE_UP, this.onMouseUp, this);
    this.addEventListener(FYGE.Event.ENTER_FRAME, this.onFarm, this);
  }

  /** 移除事件 */
  private removeEvents() {
    this.stage.removeEventListener(FYGE.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
    this.stage.removeEventListener(FYGE.MouseEvent.MOUSE_UP, this.onMouseUp, this);
    this.removeEventListener(FYGE.Event.ENTER_FRAME, this.onFarm, this);
  }

  private onMouseUp() {
    this.blade.reset();
  }

  private onFarm() {
    this.fruits.map((f, i) => {
      if (f.y > this.stage?.height) {
        console.log("你走", f.die);
        // 跑出去的水果如果还存活，就丢失+1
        if (!f.die) {
          this.dieCount += 1;
        }
        this.removeChild(f);
        this.fruits.splice(i, 1);
        this.genneratorFruit();
      }
    });
  }

  /**
   * @description: 游戏结束
   */
  private gameOver() {
    this.removeEvents();
    this.removeAllChildren();

    alert("游戏结束");
    // @ts-ignore
    this.composites.clear(this.world, true);
    Matter.Runner.stop(this.runner);
    Matter.Engine.clear(this.engine);
    this.parent.addChild(new StartScene());
    this.parent.removeChild(this);
  }
}
```


这里拓展下碰撞检测的规则
比如水果不能和水果进行碰撞。
我们直接使用`collisionFilter` 的`group`属性。
如果更复杂的可以参考下面


### 碰撞检测规则


> 简单的碰撞关系，直接设置`group`即可复杂的碰撞关系，可以通过设置`category`和和`mask`值进行搭配，做出很高级的碰撞关系



Matter相互碰撞提供了collisionFilter属性，支持三种属性，分别是
`group category mask`


#### 在两个group相等的前提下


如果任意group大于零，则两者始终碰撞，比如大家都是1，这大家相互直接始终碰撞
如果任意group小于0，`比如大家都是-1`，则大家永远也不碰撞,`我们的水果就是用的这个`
除上述两种情况，则根据category和mask进行判定


#### 在两个group不相等的前提下


category，mask判定规则
category代表一个碰撞分类，其值可为1，2，4，8...直到 2^31，每个刚体设置一个值
mask为碰撞集合（category集合），是category相与的结果值，比如接受2，4类型，其值为6
a和b碰撞情况是
`a的mask必须包含b的category`，`同时`b的mask也必须包含a的category，即
(a.category & b.mask) !== 0 && (b.category & a.mask) !== 0


更多的规则就去找API吧。


## 总结


至此，`简单`的切水果游戏就完事了。 逻辑也很简陋。仅作为学习交流使用。


> 熊东起：“我好了, 你学fei了吗”

王梦佳：“啥也不是~”

