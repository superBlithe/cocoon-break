import { RES_MAP } from "../config/GameCfg";
import { getRes } from "../config/GUtils";

export default class GameBg extends FYGE.Sprite {
  constructor() {
    super();
    this.width = 750;
    this.height = 1624;
    this.texture = getRes(RES_MAP.bg)
    
  }

}
