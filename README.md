# 推箱子 游戏解析

推箱子小游戏是很多人的童年回忆.
今天是 6.1,我们就用简单的代码来实现一下.

## 推箱子需求

思考:
1、需要一个代码开发环境.
2、需要一个 canvas 引擎.
3、需要准备一个人物来做我们的主人公,一个箱子,一个箱子推放的终点,一个燃烧的箱子,还有我们的游戏地图(墙体).

## 一、简单搭建一个 TS 环境

TS 不能直接在浏览器中运行,我们需要使用`ts-loader`.
使用`webpack`打包.

```js
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'output.js',
        path: __dirname,
        libraryTarget: 'umd',
    }

```

指定根目录下一个`tsconfig.json`,来进行项目的一些配置.

```js
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "removeComments": true,
        "noEmitOnError":true,
        "outDir":"dist",
        "lib": [
			"es5",
			"dom",
			"es2015.promise"
		]
    },
    "exclude": [
        "node_modules"
    ]
}
```

具体配置这里不展开细讲.
至此一个简单的 TS 开发环境就完成了.

## 二、引入游戏引擎

游戏引擎只是为了我们更好的使用`canvas`.
有兴趣的同学可以了解下`pixi`, `egret`,`phaser`,`laya`,`cocos`等优秀的游戏引擎.其应用但不局限于游戏.
这里我们使用可梦引擎`fyge`.(兑吧专用).

使用方法:

1、使用 CDN 引入

```js
<script
  src="//yun.duiba.com.cn/db_games/libs0924/fyge2020.min.js"
  crossorigin="anonymous"
></script>
```

2、使用本地文件

```js
<script src="libs/fyge.min.js"></script>
```

3、使用 npm

```js
 npm i fyge //具体名字问大师兄
```

我们这里使用本地文件.
引入`FYGE.d.ts`便于查找 API.

## 三、搭建简单的舞台

创建一个入口类`Main`;
初始化我们的`canvas`画布.

```js
var stage = new FYGE.Stage(
  canvas,
  750, //设计宽度，按设计搞给的就行
  1624, //设计高度
  document.body.clientWidth,
  document.body.clientHeight,
  FYGE.RENDERER_TYPE.WEBGL,
  false, //视窗居中裁切
)
```

舞台创建完成之后,我们需要每一帧更新舞台,使舞台动起来.

```js
stage.flush()
```

在舞台`stage`加载完成之后就可以加载我们的游戏场景了.
游戏场景中包括一些显示对象和一些游戏逻辑.

```js
const gameScene: GameScene = this.stage.addChild(new GameScene())
```

## 四、开始我们的游戏场景

首先,完成一个推箱子游戏,需要些什么?

1、准备素材

墙体,箱子,着火的箱子,箱子的终点,人物

![素材](//yun.duiba.com.cn/spark/assets/453d81424cef82ca68d29dec7861d2c9028a0685.png '素材')

2、编辑场景地图

为了可扩展,我们选用 20\*20 的二维数组来编辑我们的地图.
定义数据映射关系.
0 -- 背景
1 -- 墙壁
2 -- 地板
3 -- 箱子
4 -- 终点
5 -- 人
6 -- 着火的箱子

```js
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

```js
;[
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
```

地图编辑完成之后,我们在舞台上渲染场景如下:

```js
/** 使用精灵图 */
this.mapContainer.addChild(FYGE.Sprite.fromUrl(RES.box))
```

![场景](//yun.duiba.com.cn/spark/assets/bd0e11ef7c3abb1f790b2c58cd98854c004e3d2b.png '场景')

这里我们绘制场景,使用数据映射关系,每一个格子`80*80`;
其实我们推箱子的原理就是更新数据结构.
每走一步,就是更新我们的地图,通过新的二维数组,渲染新的地图,达到视觉上推箱子的效果.

## 开始推箱子

这里我们简单点,直接监听键盘事件`document.onkeydown`.
通过`e.key`判断上`w`、下`s`、左`a`、右`d`.

我们判断一个格子是否可以更新(推动),需要判断下一个位置和下下个位置.

所以我们需要记录这两个数组位置:

```js
let p1 = {
  x: 0,
  y: 0,
}
let p2 = {
  x: 0,
  y: 0,
}
```

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

```js
const { x: x1, y: y1 } = p1;
const { x: x2, y: y2 } = p2;
const { x, y } = this.playerPointer;
//不能移动 墙体
if (this.curMap[x1][y1] == BLOCK.wall) {
    return false;
}
...
// 可以移动 地板 
if (this.curMap[x1][y1] == BLOCK.ground || this.curMap[x1][y1] == BLOCK.end) {
    this.curMap[x][y] = BLOCK.ground;
    this.curMap[x1][y1] = BLOCK.player;
}
....

if (LEVEL[`LV_${this.lv}`][x][y] == BLOCK.end) {
    this.curMap[x][y] = BLOCK.end;
}
```

然后使用新的二维数组去渲染出场景.
这个时候我们的推箱子基本就要大功告成了.


## 判断结果
怎么样算是过关呢?

比较关卡数组和当前数组.

当每一个箱子的终点都变成箱子的时候就过关了.

当然,我们也可以加上步数限制.

```js
/** 判断是否结束 */
private gameOver() {
    const mapList = LEVEL[`LV_${this.lv}`];
    for (let i = 0; i < mapList.length; i++) {
        for (let j = 0; j < mapList[i].length; j++) {
            if (mapList[i][j] == BLOCK.end && this.curMap[i][j] != BLOCK.box) {
                return false;
            }
        }
    }
    return true;
}
```
还可以加上关卡和步数显示.

## 切换关卡
怎么到下一关呢?
其实也是更新数据啦.

数据关系映射好,直接进行关卡重新绘制即可.

同样,可以加个按钮,点击可以重玩本关.

```js
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