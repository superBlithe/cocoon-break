import FpsText from '../objects/fpsText'
import { ASSETS } from '../constants/assets'

export default class MainScene extends Phaser.Scene {
  fpsText
  angry: Phaser.GameObjects.Image
  de: Phaser.GameObjects.Image
  amao: Phaser.GameObjects.Image
  shopIcon: Phaser.GameObjects.Image
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.add
      .image(0, 0, ASSETS.IMAGES.INDEX.BG)
      .setOrigin(0, 0)
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)

  }

  update() {
    this.fpsText.update()
  }
}
