import * as Matter from "matter-js";
import { FRUIT_NAME, RES_MAP, SS } from "../config/GameCfg";
import { ADD_SPRITE, getRes, GUtils } from "../config/GUtils";

export default class Fruit extends FYGE.Sprite {
  public die: boolean = false;
  /** 水果名字 */
  private fName: FRUIT_NAME;
  public phyBody: Matter.Body;
    /** 水果的两半是两个不同的图。 */
    private half_pre: FYGE.Sprite;
    private half_next: FYGE.Sprite;
  constructor(fName: FRUIT_NAME = "fruitXigua") {
    super();
    this.fName = fName;
    /** 防止贴图禁用后，后面没办法复用。 */
    this.texture = getRes(RES_MAP[this.fName]).clone();
    this.anchorX = this.width / 2;
    this.anchorY = this.height / 2;
    this.phyBody = Matter.Bodies.circle(this.x * SS, this.y * SS, (this.width / 2) * SS, {
      isStatic: true,
      isSensor: true, // 传感器，可以检测到碰撞，但是不参与碰撞
      render: { fillStyle: "#060a19" },
      collisionFilter: { group: -1 }, // 参考reademe里面的碰撞规则
    });
    this.setPhyPos();

    this.addEventListener(
      FYGE.Event.ADDED_TO_STAGE,
      () => {
        this.addEventListener(FYGE.Event.ENTER_FRAME, this.onFarm, this);
      },
      this
    );
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
   /** 切成2半 */
   doHalf() {
    if (this.half_next || this.half_pre) return;
    this.half_pre = this.addChild(ADD_SPRITE(getRes(RES_MAP[this.fName + "1"]), -5, 0));
    this.half_next = this.addChild(ADD_SPRITE(getRes(RES_MAP[this.fName + "2"]), 5, 0));
    this.texture.valid = false;
    FYGE.Tween.get(this.half_pre).to({ x: GUtils.getRandom(-120, -80), rotation: GUtils.getRandom(-50, -30) }, GUtils.getRandom(2000, 4000));
    FYGE.Tween.get(this.half_next).to({ x: GUtils.getRandom(80, 120), rotation: GUtils.getRandom(30, 50) }, GUtils.getRandom(2000, 4000));
    Matter.Body.setStatic(this.phyBody, false);
    this.die = true;
  }

  /** 根据物理刚体，更新当前的坐标。 */
  private onFarm() {
    this.x = this.phyBody.position.x / SS - this.width / 2;
    this.y = this.phyBody.position.y / SS - this.height / 2;
  }
}
