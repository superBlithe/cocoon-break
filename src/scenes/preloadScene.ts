import { RES } from '../constants/config'

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    // RES.map(item =>)
    for (const key in RES) {
      if (Object.prototype.hasOwnProperty.call(RES, key)) {
        this.load.image(key, RES[key])
      }
    }
  }

  create() {
    this.scene.start('MainScene')
  }
}
