import GameBg from "../components/GameBg";
import { RES_MAP, SS } from "../config/GameCfg";
import { ADD_SPRITE, getRes, GUtils, loadImage, _throttle } from "../config/GUtils";
import { GameScene } from "./GameScene";
import Fruit from "../components/Fruit";
import Blade from "../components/blade";
import * as Matter from "matter-js";

export class StartScene extends FYGE.Container {
  private engine: Matter.Engine;
  private world: Matter.World;
  private render: Matter.Render;
  private runner: Matter.Runner;
  private composites: Matter.Composite;
  /** 开始按钮 */
  private startBtnGroup: FYGE.Container;
  private btnOut: FYGE.Sprite;
  /** 水果：西瓜》 开始按钮 */
  private xigua: Fruit;
  /** 西瓜的动画 */
  private TweenXigu: FYGE.Tween;
  /** 刀光 */
  private blade: Blade;
  constructor() {
    super();
    this.addEventListener(
      FYGE.Event.ADDED_TO_STAGE,
      () => {
        this.addEvents();
        this.init();
      },
      this
    );
  }

  /** 初始化游戏 */
  init() {
    this.addChild(new GameBg());
    this.createPhyWorld();
    this.blade = this.addChild(new Blade());

    /** title的蒙层 */
    this.addChild(ADD_SPRITE(getRes(RES_MAP.titleMask), 0, 0, 750, 375));
    this.addChild(ADD_SPRITE(getRes(RES_MAP.logo), 20, 20));

    this.initBtn();
  }

  /**
   * @description: 初始化首页的西瓜按钮
   */
  private initBtn() {
    this.startBtnGroup = this.addChild(new FYGE.Container());
    this.startBtnGroup.position.x = 200;
    this.startBtnGroup.position.y = 350;
    let btnOut = this.startBtnGroup.addChild(new FYGE.Sprite(getRes(RES_MAP.newGameBtnOut)));
    btnOut.anchorX = btnOut.anchorY = btnOut.width / 2;
    FYGE.Tween.get(btnOut, { loop: true }).to({ rotation: -360 }, 8000);
    this.btnOut = btnOut;

    let xigua = this.addChild(new Fruit());
    xigua.fx = 250;
    xigua.fy = 400;
    this.TweenXigu = FYGE.Tween.get(xigua, { loop: true }).to({ rotation: 360 }, 4000);
    this.xigua = xigua;

    Matter.Body.setStatic(this.xigua.phyBody, false);
    // @ts-ignore
    this.composites.add(this.world, [xigua.phyBody]);
  }

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
    Matter.Events.on(this.engine, "collisionStart", this.onCollisionStart.bind(this));

    // // 临时渲染引擎，调试用
    // var render = Render.create({
    //   element: document.body,
    //   engine: this.engine,
    //   options: {
    //     width: 750,
    //     height: 600,
    //   },
    // });
    // Render.run(render);
  }
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
  /** 划过开始按钮 */
  doStart() {
    this.engine.gravity.y = 1.2;
    /** 停止西瓜转动 */
    FYGE.Tween.removeTweenSelf(this.TweenXigu);
    this.btnOut.visible = false;
    this.xigua.doHalf();
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
  /**
   * @description: 碰撞检测
   */
  onCollisionStart(e) {
    let pairs = e.pairs;
    if (this.xigua.phyBody.id === pairs[0].bodyA.id) {
      this.doStart();
    }
  }
}
