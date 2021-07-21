import { RES_MAP } from "./config/GameCfg";
import { loadRes } from "./config/GUtils";
import { GameScene } from "./GameScene/GameScene";
import { StartScene } from "./GameScene/StartScene";

export class Main {
  //主舞台
  stage: FYGE.Stage;
  private requestID;
  private _pause: boolean;
  private canvas: HTMLCanvasElement;
  constructor(canvas: HTMLCanvasElement) {
    //建舞台
    var stage = new FYGE.Stage(
      canvas,
      750, //设计宽度，按设计搞给的就行
      1624, //设计高度
      document.body.clientWidth,
      document.body.clientHeight,
      FYGE.RENDERER_TYPE.WEBGL,
      false //视窗居中裁切
    );
    this.stage = stage;
    this.canvas = canvas; //赋值下，为了下面的destroy的cancelAnimationFrame
    //stage初始化
    stage.addEventListener(FYGE.Event.INIT_STAGE, this.onAddToStage, this);
    //循环
    var self = this;
    loop();
    function loop() {
      if (!self._pause) {
        FYGE.Tween.flush();
        stage.flush();
      }
      //为了兼容多page的canvas
      self.requestID = window.requestAnimationFrame(loop);
    }
  }
  private async onAddToStage() {
    await loadRes(RES_MAP);
    console.log("资源加载完成" );
    this.stage.addChild(new StartScene());
  }

  destroy() {
    //Tween都移除，注意吧，可能原先的也被移除,,对于多page时注意，会把其他页面的也去掉
    FYGE.Tween.removeAllTweens();
    //停掉计时器
    //@ts-ignore 为了兼容多page的canvas
    window.cancelAnimationFrame(this.requestID);
    //舞台销毁
    this.stage.destroy();
  }
}
