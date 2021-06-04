import { ASSETS } from '../constants/assets'

export default class ModalScene extends Phaser.Scene {
  constructor() {
    super('ModalScene')
  }

  create() {
    this.add.rectangle(400, 300, 640, 500, 0x000000, 0.7)

    let bg = this.add.image(0, 0, ASSETS.IMAGES.MODAL.BG).setOrigin(0, 0)
    bg.setPosition((this.cameras.main.width - bg.width) / 2, (this.cameras.main.height - bg.height) / 2)
    this.input.keyboard.once('keydown_SPACE', this.restart, this)
    this.input.once('pointerdown', this.restart, this)
  }

  restart() {
    this.scene.start('game')
  }
}
