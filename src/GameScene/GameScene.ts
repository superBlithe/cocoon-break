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
