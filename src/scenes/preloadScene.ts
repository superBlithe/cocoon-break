import { ASSETS } from '../constants/assets';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image(ASSETS.IMAGES.INDEX.BG, '//yun.duiba.com.cn/spark/assets/37b2673b5600a191c3f7896cd9ec1083296b5ba3.jpg')
    this.load.image(ASSETS.IMAGES.MODAL.BG, '../../assets/modal/bg.png')
  }

  create() {
    this.scene.start('MainScene')
  }
}
