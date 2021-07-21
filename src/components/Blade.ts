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
