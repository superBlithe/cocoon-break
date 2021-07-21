/**
 * Created by _xdq on 2021/04/07.
 * 公共方法
 * @export
 * @class GUtils
 */
export class GUtils {
  /** 随机数 */
  static getRandom(max: number, min: number): number {
    return Number((Math.random() * (max - min) + min).toFixed(1));
  }
  /** 获取角度 */
  static getAngle(dy: number, dx: number): number {
    const angle = (Math.atan2(dy, dx) / Math.PI) * 180;
    return (angle + 360) % 360;
  }
  /** 判断整数 */
  static isInteger(obj: any) {
    return typeof obj === "number" && obj % 1 === 0;
  }
  /** 拷贝数组 */
  static copyArray(arr: Array<any>) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].concat();
    }
    return newArr;
  }
}

/**
 * @description: 封装加载图片sprite
 * @param {string} url 链接
 * @param {number} x
 * @param {number} y
 * @param {number} width 宽
 * @param {number} height 高
 * @return {*}
 */
export const ADD_SPRITE = (texture: FYGE.Texture, x: number = 0, y: number = 0, width?: number, height?: number): FYGE.Sprite => {
  let _sprite = new FYGE.Sprite(texture);
  width && (_sprite.width = width);
  height && (_sprite.height = height);
  _sprite.x = x;
  _sprite.y = y;
  return _sprite;
};

/**
 * @description: 瞎JB封装文字节点
 * @param {string} text
 * @param {number} size
 * @param {string} fillColor
 * @param {number} x
 * @param {number} y
 * @return {*}
 */
export const ADD_TEXT = (text: string, size: number = 30, fillColor: string = "#ffffff", x?: number, y?: number): FYGE.TextField => {
  let _text = new FYGE.TextField();
  _text.text = text;
  _text.size = size;
  _text.fillColor = fillColor;
  _text.position.x = x;
  _text.position.y = y;
  return _text;
};

/**
 * @description: 函数节流，普通防连点
 * @param {(Function, number?)}
 * @return {Function}
 */
export const _throttle = (fun, delay = 2000) => {
  let last, deferTimer;
  return function () {
    let now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
      }, delay);
    } else {
      last = now;
      fun.apply(this, arguments);
    }
  };
};

/**
 * @description: 加载图片
 * @param {*} url
 * @return {*}
 */
export const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    FYGE.GlobalLoader.loadImage((s, image) => {
      FYGE.Texture.addToCache(FYGE.Texture.from(image), url);
      resolve(FYGE.TextureCache[url]);

      // resolve(FYGE.Texture.fromImage(image));
    }, url);
  });
};

/**
 * @description:
 * @param {*} resMap
 * @return {*}
 */
export const loadRes = (resMap) => {
  return Promise.all(Object.keys(resMap).map((key) => loadImage(resMap[key])));
};

/**
 * 获取素材，
 * @param str
 * @return 已加载好得素材或null
 */
export const getRes = (str: string) => {
  var type = str.substring(str.lastIndexOf(".") + 1, str.length);
  if (type == "png" || type == "jpg") {
    return FYGE.TextureCache[str] || null;
  }
};
