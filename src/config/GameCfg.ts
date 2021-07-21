/** 资源配置 */
export const RES_MAP = {
  bg: "../../assets/background.jpg",
  titleMask: "../../assets/home-mask.png",
  logo: "../../assets/logo.png",
  newGameBtnOut: "../../assets/new-game.png",
  fruitXigua: "../../assets/xigua.png",
  fruitXigua1: "../../assets/xigua-1.png",
  fruitXigua2: "../../assets/xigua-2.png",
  fruitBanana: "../../assets/banana.png",
  fruitBanana1: "../../assets/banana-1.png",
  fruitBanana2: "../../assets/banana-2.png",
  fruitApple: "../../assets/apple.png",
  fruitApple1: "../../assets/apple-1.png",
  fruitApple2: "../../assets/apple-2.png",
  fruitBasaha: "../../assets/basaha.png",
  fruitBasaha1: "../../assets/basaha-1.png",
  fruitBasaha2: "../../assets/basaha-2.png",
  fruitPeach: "../../assets/peach.png",
  fruitPeach1: "../../assets/peach-1.png",
  fruitPeach2: "../../assets/peach-2.png",
}

/** const断言储存字面量 */
export const FRUIT_ARRAY = [ "fruitXigua" , "fruitBanana" , "fruitApple" , "fruitBasaha" , "fruitPeach"] as const

export type FRUIT_NAME = typeof FRUIT_ARRAY[number] 

/** 比例系数--matterjs适配 */
export const SS = document.body.clientWidth / 750;

/** 跑掉几个水果游戏结束 */
export const OVER_COUNT = 10;
