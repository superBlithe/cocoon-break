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
        const angle = Math.atan2(dy, dx) / Math.PI * 180;
        return (angle + 360) % 360;
    }
    /** 判断整数 */
    static isInteger(obj: any) {
        return typeof obj === 'number' && obj % 1 === 0;
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