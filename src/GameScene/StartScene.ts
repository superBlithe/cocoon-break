
import GameBg from "../components/GameBg";
import { RES_MAP, SS } from "../config/GameCfg";
import { ADD_SPRITE, getRes, GUtils, loadImage, _throttle } from "../config/GUtils";
import { GameScene } from "./GameScene";

export class StartScene extends FYGE.Container {
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

    /** title的蒙层 */
    this.addChild(ADD_SPRITE(getRes(RES_MAP.titleMask), 0, 0, 750, 375));
    this.addChild(ADD_SPRITE(getRes(RES_MAP.logo), 20, 20));

    this.initBtn();
  }

  /**
   * @description: 初始化首页的西瓜按钮
   */
  private initBtn() {
   
  }

  /** 监听事件 */
  private addEvents() {
    
  }

  /** 移除事件 */
  private removeEvents() {
    
  }

}
