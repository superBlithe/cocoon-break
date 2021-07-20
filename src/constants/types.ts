/*
 * @Author: your name
 * @Date: 2021-07-18 22:04:30
 * @LastEditTime: 2021-07-19 21:19:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \project\snake\src\constants\types.ts
 */

/** 格子 0 无 1 墙壁 2 地板 3 箱子 4 箱子终点 5 人 */
export enum BLOCK {
  wall = 1,
  ground = 2,
  box = 3,
  end = 4,
  player = 5,
  badBox = 6
}

/** 方向 */
export enum DIR {
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4
}


/** 键盘方向 */
export enum KEY_DIR {
  UP = "w",
  DOWN = "s",
  LEFT = "a",
  RIGHT = "d"
}

export type IPOS = {
  x: number,
  y: number
}
