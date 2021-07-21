
import GameBg from "../components/GameBg";
import { RES_MAP, FRUIT_NAME, FRUIT_ARRAY, OVER_COUNT } from "../config/GameCfg";
import { ADD_TEXT, GUtils, _throttle } from "../config/GUtils";
import { StartScene } from "./StartScene";

export class GameScene extends FYGE.Container {
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

  }
 

  /** 监听事件 */
  private addEvents() {
  }

  /** 移除事件 */
  private removeEvents() {
  }
}
